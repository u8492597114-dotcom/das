import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GestionaleModule } from '../../gestionale.module';
import { ListaOrdiniComponent } from './lista-ordini.component';

describe('ListaOrdiniComponent', () => {
  let component: ListaOrdiniComponent;
  let fixture: ComponentFixture<ListaOrdiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GestionaleModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaOrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
