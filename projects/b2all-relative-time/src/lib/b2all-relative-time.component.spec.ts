import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2allRelativeTimeComponent } from './b2all-relative-time.component';

describe('B2allRelativeTimeComponent', () => {
  let component: B2allRelativeTimeComponent;
  let fixture: ComponentFixture<B2allRelativeTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2allRelativeTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2allRelativeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
