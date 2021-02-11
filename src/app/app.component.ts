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
  constructor(private utilityService: UtilityService,private router: Router) { }
  redirectTo(url){
    this.router.navigateByUrl(url);
  }
}
