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
  desc = new Subject<any>();
  private recommendation_type = new BehaviorSubject<any>('');
 // private books:Book[];
  private booktitles;
  private user;
  constructor(private http: HttpClient) { 
    

  }
  
  setDesc(val){
    this.desc.next(val)
  }
  serviceWrapper (serviceURL, requestData, successHandler, post?){
    var responseSubject = new Subject<any>();
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
  storeUser(user){
    this.user=user;
  }
  getUser(){
    return this.user;
  }
  getUserdata(){
   
  // environment.API_URL
    return this.serviceWrapper(
    environment.API_URL+"user.json",
    "",
    (successData) => {      
          return {

              'data': successData.user
          };
    
    });
    }
    getDailyHealthdata(){
      return this.serviceWrapper(
        environment.API_URL+"dailyData.json",
        "",
        (successData) => {      
              return {
    
                  'data': successData
              };
        
        });
    }
    getweeklyStepcount(){
      return this.serviceWrapper(
        environment.API_URL+"stepcount.json",
        "",
        (successData) => {      
              return {
    
                  'data': successData
              };
        
        });
    }
    getweeklyActivity(){
      return this.serviceWrapper(
        environment.API_URL+"activity.json",
        "",
        (successData) => {      
              return {
    
                  'data': successData
              };
        
        });
    }
    getweeklyCalorieBurn(){
      return this.serviceWrapper(
        environment.API_URL+"calorie.json",
        "",
        (successData) => {      
              return {
    
                  'data': successData
              };
        
        });
    }
    getweeklySleepHour(){
      return this.serviceWrapper(
        environment.API_URL+"sleep.json",
        "",
        (successData) => {      
              return {
    
                  'data': successData
              };
        
        });
    }
    getIdealData(){
      return this.serviceWrapper(
        environment.API_URL+"idealData.json",
        "",
        (successData) => {      
              return {
    
                  'data': successData.user
              };
        
        });
    }
}
