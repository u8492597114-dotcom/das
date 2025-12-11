import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GestionaleModule } from '../../gestionale.module';
import { ListaFattureComponent } from './lista-fatture.component';

describe('ListaFattureComponent', () => {
  let component: ListaFattureComponent;
  let fixture: ComponentFixture<ListaFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GestionaleModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
