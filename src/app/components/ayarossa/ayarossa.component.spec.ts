import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyarossaComponent } from './ayarossa.component';

describe('AyarossaComponent', () => {
  let component: AyarossaComponent;
  let fixture: ComponentFixture<AyarossaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyarossaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyarossaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
