import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpercaseComponent } from './upercase.component';

describe('UpercaseComponent', () => {
  let component: UpercaseComponent;
  let fixture: ComponentFixture<UpercaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpercaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpercaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
