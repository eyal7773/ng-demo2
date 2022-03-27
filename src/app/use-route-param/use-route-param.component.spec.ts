import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseRouteParamComponent } from './use-route-param.component';

describe('UseRouteParamComponent', () => {
  let component: UseRouteParamComponent;
  let fixture: ComponentFixture<UseRouteParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseRouteParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseRouteParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
