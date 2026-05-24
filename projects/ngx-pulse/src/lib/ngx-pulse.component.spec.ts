import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPulseComponent } from './ngx-pulse.component';

describe('NgxPulseComponent', () => {
  let component: NgxPulseComponent;
  let fixture: ComponentFixture<NgxPulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPulseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
