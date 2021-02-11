import { Component, OnInit ,Input} from '@angular/core';
import { UtilityService } from '../../services/utility.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input('currentData') currentData: string;
  constructor(private utilityService: UtilityService) { 
    
  }
  
  ngOnInit(): void {
  }
  back(){
    this.utilityService.desc.next(false);
  }

}
