import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchuanbidaugiaComponent } from './listchuanbidaugia.component';

describe('ListchuanbidaugiaComponent', () => {
  let component: ListchuanbidaugiaComponent;
  let fixture: ComponentFixture<ListchuanbidaugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListchuanbidaugiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListchuanbidaugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
