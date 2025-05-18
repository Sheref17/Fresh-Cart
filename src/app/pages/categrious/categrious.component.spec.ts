import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategriousComponent } from './categrious.component';

describe('CategriousComponent', () => {
  let component: CategriousComponent;
  let fixture: ComponentFixture<CategriousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategriousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategriousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
