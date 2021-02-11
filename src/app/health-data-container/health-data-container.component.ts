import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-health-data-container',
  templateUrl: './health-data-container.component.html',
  styleUrls: ['./health-data-container.component.css']
})
export class HealthDataContainerComponent implements OnInit {

  constructor(private utilityService: UtilityService,private router: Router) { }
  desc =false;
  currentData;
  sleep;
  count;
  calorie;
  heart;
  count_left;
  ngOnInit(): void {
    this.getDailyData();
    this.utilityService.desc.subscribe(function(t) {
      if(t==true)
        this.desc=true;
      else
        this.desc=false;
  });
  }
  redirectTo(url){
    this.router.navigateByUrl(url);
  }
  stepDesc(){
    this.currentData="steps";
    this.desc=true;
  }
 
    
  getDailyData(){
    this.utilityService.getDailyHealthdata().subscribe((response)=>{ 
      //this.profileForm.get('name').setValue(data.user.name);
      this.sleep=response.data.sleep;
      this.count=response.data.count;
      this.calorie=response.data.calorie;
      this.heart=response.data.heart;
      this.getUserData();
    },
    (error)=>{
    });
  }
  step_text;
  cur_weight;
  last_date;
  weight_text;
  weight_goal;
  getUserData(){
    var user=this.utilityService.getUser();
    this.count_left=Number(user.goal.step)-Number(this.count);
    if(this.count_left<=0){
      this.step_text="you have reached your daily goal";
    }
    else
     this.step_text="still "+this.count_left +" to reach the goal";
    this.cur_weight=user.profile.weight;
    this.last_date=user.profile.date;
    if(user.goal.weight!=-1){
      this.weight_goal=Number(user.goal.weight)-Number(this.cur_weight);
      if(this.weight_goal<0){
        this.weight_text="You have to lose "+(this.weight_goal*-1)+" kg";
      }
      else if(this.weight_goal==0){
        this.weight_text="You have reached to your goal";
      }
      else{
        this.weight_text="You have to gain "+(this.weight_goal)+" kg";
      }
    }

  }
}
