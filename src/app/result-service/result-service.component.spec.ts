import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultServiceComponent } from './result-service.component';

describe('ResultServiceComponent', () => {
  let component: ResultServiceComponent;
  let fixture: ComponentFixture<ResultServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
