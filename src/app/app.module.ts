import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityService } from './services/utility.service';
import {HealthDataContainerComponent } from'./health-data-container/health-data-container.component';
import {ProfileContainerComponent } from'./profile-container/profile-container.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts'; 
import { ChartComponent } from './chart/chart.component';
import { CategoryService, LineSeriesService } from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    ProfileContainerComponent,
    HealthDataContainerComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [UtilityService,CategoryService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
