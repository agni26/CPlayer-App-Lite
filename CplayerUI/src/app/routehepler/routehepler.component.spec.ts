import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteheplerComponent } from './routehepler.component';

describe('RouteheplerComponent', () => {
  let component: RouteheplerComponent;
  let fixture: ComponentFixture<RouteheplerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteheplerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteheplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
