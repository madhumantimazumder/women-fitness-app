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
  step_Desc;
  activity_Desc;
  calorie_Desc;
  sleep_Desc;
  sleep;
  count;
  calorie;
  activity;
  count_left;
  public chartData: Object [];
  public primaryXAxis: Object; 
  title;
  ngOnInit(): void {
    this.getDailyData();
  }
  redirectTo(url){
    this.router.navigateByUrl(url);
  }
  stepDesc(){
    // this.step_Desc= !this.step_Desc;
    this.utilityService.getweeklyStepcount().subscribe((response)=>{ 
      //this.profileForm.get('name').setValue(data.user.name);
      this.chartData = [
        { day:'1', data: response.day['1'] },
        { day:'2', data: response.day['2'] },
        { day:'3', data: response.day['3'] },
        { day:'4', data: response.day['4'] },
        { day:'5', data: response.day['5'] },
        { day:'6', data: response.day['6']},      
        { day:'7', data: response.day['7'] }
     ];  
    },
    (error)=>{
    });
    
   this.primaryXAxis = { valueType: 'Category' };
   this.title="Past 7 Days Step Count" ; 
  }
 
  sleepDesc(){
    this.utilityService.getweeklySleepHour().subscribe((response)=>{ 
      //this.profileForm.get('name').setValue(data.user.name);
      this.chartData = [
        { day:'1', data: response.day['1'] },
        { day:'2', data: response.day['2'] },
        { day:'3', data: response.day['3'] },
        { day:'4', data: response.day['4'] },
        { day:'5', data: response.day['5'] },
        { day:'6', data: response.day['6']},      
        { day:'7', data: response.day['7'] }
     ];  
    },
    (error)=>{
    });
   this.primaryXAxis = { valueType: 'Category' };
   this.title="Past 7 Days sleeping hour" ; 
  }
  calorieDesc(){
    this.utilityService.getweeklyCalorieBurn().subscribe((response)=>{ 
      //this.profileForm.get('name').setValue(data.user.name);
      this.chartData = [
        { day:'1', data: response.day['1'] },
        { day:'2', data: response.day['2'] },
        { day:'3', data: response.day['3'] },
        { day:'4', data: response.day['4'] },
        { day:'5', data: response.day['5'] },
        { day:'6', data: response.day['6']},      
        { day:'7', data: response.day['7'] }
     ];  
    },
    (error)=>{
    });
   this.primaryXAxis = { valueType: 'Category' };
   this.title="Past 7 Days calorie burn" ; 
   
  }
  activityDesc(){
    this.utilityService.getweeklyActivity().subscribe((response)=>{ 
      //this.profileForm.get('name').setValue(data.user.name);
      this.chartData = [
        { day:'1', data: response.day['1'] },
        { day:'2', data: response.day['2'] },
        { day:'3', data: response.day['3'] },
        { day:'4', data: response.day['4'] },
        { day:'5', data: response.day['5'] },
        { day:'6', data: response.day['6']},      
        { day:'7', data: response.day['7'] }
     ];  
    },
    (error)=>{
    });
   this.primaryXAxis = { valueType: 'Category' };
   this.title="Past 7 Days exercise hour" ; 
  }

 
  heart;
  getDailyData(){
    this.utilityService.getDailyHealthdata().subscribe((response)=>{ 
      //this.profileForm.get('name').setValue(data.user.name);
      this.sleep=response.data.sleep;
      this.count=response.data.count;
      this.calorie=response.data.calorie;
      this.activity=response.data.activity;
      this.heart = response.data.heart;
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
