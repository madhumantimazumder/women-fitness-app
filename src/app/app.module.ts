import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityService } from './services/utility.service';
import {HealthDataContainerComponent } from'./health-data-container/health-data-container.component';
import {ProfileContainerComponent } from'./profile-container/profile-container.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileContainerComponent,
    HealthDataContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
