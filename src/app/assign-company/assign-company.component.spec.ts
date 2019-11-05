import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCompanyComponent } from './assign-company.component';

describe('AssignCompanyComponent', () => {
  let component: AssignCompanyComponent;
  let fixture: ComponentFixture<AssignCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
