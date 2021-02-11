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

  ngOnInit(): void {
  }
  redirectTo(url){
    this.router.navigateByUrl(url);
  }
}
