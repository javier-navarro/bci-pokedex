import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DetallePokemonComponent } from './detalle-pokemon.component';

describe('DetallePokemonComponent', () => {
  let component: DetallePokemonComponent;
  let fixture: ComponentFixture<DetallePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePokemonComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
