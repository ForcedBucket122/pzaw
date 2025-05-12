import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WplatyComponent } from './wplaty.component';

describe('WplatyComponent', () => {
  let component: WplatyComponent;
  let fixture: ComponentFixture<WplatyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WplatyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WplatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
