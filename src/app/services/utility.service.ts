import { Injectable } from '@angular/core';
import { BehaviorSubject ,Subject,Observable } from 'rxjs';
import { environment  } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { getMaxListeners } from 'process';
//import { Book } from "../models/book"; 
//https://ng-bootstrap.github.io/#/components/rating/api

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private genre_subject = new BehaviorSubject<any>('');
  display_loading = new Subject<any>();
  private recommendation_type = new BehaviorSubject<any>('');
 // private books:Book[];
  private booktitles;
  private user;
  constructor(private http: HttpClient) { 
    this.user={
      
    }

  }
 
  serviceWrapper (serviceURL, requestData, successHandler, post?){
    var responseSubject = new Subject<any>();
    this.display_loading.next(true);
    if(!!post){
      this.http.post(serviceURL, requestData).subscribe(function (data) {
        var result = successHandler(data);
        if (!!result.error) {
            responseSubject.error(result.error);
        }
        else {
            responseSubject.next(result.data);
        }
      }, function (error) {
        responseSubject.error("serviceFailureMsg");
      });
    }
    else{
      this.http.get(serviceURL).subscribe(function (data) {
        var result = successHandler(data);
        if (!!result.error) {
            responseSubject.error(result.error);
        }
        else {
            responseSubject.next(result.data);
        }
      }, function (error) {
        responseSubject.error("serviceFailureMsg");
      });
    }
    return responseSubject;
  }
 
  getUserdata(){
   
  // environment.API_URL
    return this.serviceWrapper(
    environment.API_URL+"user.json",
    "",
    (successData) => {      
          return {

              'data': successData
          };
    
    });
    }
}
