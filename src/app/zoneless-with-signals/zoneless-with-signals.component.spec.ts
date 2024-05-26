import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelessWithSignalsComponent } from './zoneless-with-signals.component';

describe('ZonelessWithSignalsComponent', () => {
  let component: ZonelessWithSignalsComponent;
  let fixture: ComponentFixture<ZonelessWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonelessWithSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZonelessWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
