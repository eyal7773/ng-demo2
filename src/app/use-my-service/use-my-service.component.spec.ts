import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseMyServiceComponent } from './use-my-service.component';

describe('UseMyServiceComponent', () => {
  let component: UseMyServiceComponent;
  let fixture: ComponentFixture<UseMyServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseMyServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseMyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
