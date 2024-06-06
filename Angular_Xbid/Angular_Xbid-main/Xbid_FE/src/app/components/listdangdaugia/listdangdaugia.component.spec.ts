import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdangdaugiaComponent } from './listdangdaugia.component';

describe('ListdangdaugiaComponent', () => {
  let component: ListdangdaugiaComponent;
  let fixture: ComponentFixture<ListdangdaugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListdangdaugiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListdangdaugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
