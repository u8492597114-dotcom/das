import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GestionaleModule } from '../../gestionale.module';
import { DashboardGestionaleComponent } from './dashboard-gestionale.component';

describe('DashboardGestionaleComponent', () => {
  let component: DashboardGestionaleComponent;
  let fixture: ComponentFixture<DashboardGestionaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GestionaleModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGestionaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
