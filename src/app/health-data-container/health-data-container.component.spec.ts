import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDataContainerComponent } from './health-data-container.component';

describe('HealthDataContainerComponent', () => {
  let component: HealthDataContainerComponent;
  let fixture: ComponentFixture<HealthDataContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDataContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
