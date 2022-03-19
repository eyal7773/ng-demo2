import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithForComponent } from './input-with-for.component';

describe('InputWithForComponent', () => {
  let component: InputWithForComponent;
  let fixture: ComponentFixture<InputWithForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
