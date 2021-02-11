import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { UtilityService } from '../services/utility.service';
@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {
  profileForm;
  goalForm;
  edit=false;
  isEdit=false;
  constructor(private utilityService: UtilityService) { 
    this.profileForm =  new FormGroup({
      "name": new FormControl(null, [Validators.required]),
      "email": new FormControl(null, [Validators.required,Validators.email]),
      "age": new FormControl(null, [Validators.required]),
      "height": new FormControl(null, [Validators.required]),
      "weight": new FormControl(null, [Validators.required]),
      
    });
    this.goalForm =  new FormGroup({
      "step": new FormControl(null),
      "calorie": new FormControl(null),
      "weight": new FormControl(null),
    });
    
  }

  ngOnInit(): void {
    this.getData();
  }
  editGoal(){
      this.isEdit=true;
      this.goalForm.enable();
  }
  makeEnable(){
      this.edit=true;
      this.profileForm.enable();
  }
  saveGoal(){
    
  }
  getData(){
    var data=this.utilityService.getUser();
   // this.utilityService.getUserdata().subscribe((data)=>{ 
      //this.profileForm.get('name').setValue(data.user.name);
      this.profileForm.setValue({
        name: data.profile.name, 
        email:data.profile.email,
        age:data.profile.age,
        height:data.profile.height,
        weight:data.profile.weight
      });
      
      this.goalForm.setValue({
        step: data.goal.step, 
        weight:data.goal.weight,
        calorie:data.goal.calorie
      });
      this.goalForm.disable();
      this.profileForm.disable();
    // },
    // (error)=>{
    // });
  }
  saveData(){
    
  }
}
