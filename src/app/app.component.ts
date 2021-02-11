import { Component } from '@angular/core';
import { UtilityService } from './services/utility.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'women-fitness-app';
  constructor(private utilityService: UtilityService,private router: Router) { 
    this.getData();
  }
  redirectTo(url){
    this.router.navigateByUrl(url);
  }
  getData(){
    this.utilityService.getUserdata().subscribe((data)=>{ 
      //this.profileForm.get('name').setValue(data.user.name);
      this.utilityService.storeUser(data);
    },
    (error)=>{
    });
  }
}
