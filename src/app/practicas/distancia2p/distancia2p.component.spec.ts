import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distancia2pComponent } from './distancia2p.component';

describe('Distancia2pComponent', () => {
  let component: Distancia2pComponent;
  let fixture: ComponentFixture<Distancia2pComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Distancia2pComponent]
    });
    fixture = TestBed.createComponent(Distancia2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
