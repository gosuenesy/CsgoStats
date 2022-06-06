import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerServiceComponent } from './player-service.component';

describe('PlayerServiceComponent', () => {
  let component: PlayerServiceComponent;
  let fixture: ComponentFixture<PlayerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
