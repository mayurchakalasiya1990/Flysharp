import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyflightComponent } from './buyflight.component';

describe('BuyflightComponent', () => {
  let component: BuyflightComponent;
  let fixture: ComponentFixture<BuyflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
