import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleComponent } from './particle.component';

describe('ParticleComponent', () => {
  let component: ParticleComponent;
  let fixture: ComponentFixture<ParticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
