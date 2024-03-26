import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetoolsFinanceComponent } from './livetools-finance.component';

describe('LivetoolsFinanceComponent', () => {
  let component: LivetoolsFinanceComponent;
  let fixture: ComponentFixture<LivetoolsFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivetoolsFinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivetoolsFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
