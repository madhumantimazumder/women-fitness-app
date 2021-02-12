import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input('chartData') chartData;
  @Input('primaryXAxis') primaryXAxis;
  @Input('title') title;
  constructor() { }

  ngOnInit(): void {
  }

}
