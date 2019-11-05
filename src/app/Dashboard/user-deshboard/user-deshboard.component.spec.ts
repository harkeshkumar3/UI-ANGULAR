import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeshboardComponent } from './user-deshboard.component';

describe('UserDeshboardComponent', () => {
  let component: UserDeshboardComponent;
  let fixture: ComponentFixture<UserDeshboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeshboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
