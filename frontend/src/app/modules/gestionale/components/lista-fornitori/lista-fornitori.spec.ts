import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GestionaleModule } from '../../gestionale.module';
import { ListaFornitoriComponent } from './lista-fornitori.component';

describe('ListaFornitoriComponent', () => {
  let component: ListaFornitoriComponent;
  let fixture: ComponentFixture<ListaFornitoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GestionaleModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFornitoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
