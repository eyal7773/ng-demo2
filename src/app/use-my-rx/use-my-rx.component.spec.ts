import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseMyRxComponent } from './use-my-rx.component';

describe('UseMyRxComponent', () => {
  let component: UseMyRxComponent;
  let fixture: ComponentFixture<UseMyRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseMyRxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseMyRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
