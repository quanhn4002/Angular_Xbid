import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDangdaugiaComponent } from './page-dangdaugia.component';

describe('PageDangdaugiaComponent', () => {
  let component: PageDangdaugiaComponent;
  let fixture: ComponentFixture<PageDangdaugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageDangdaugiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDangdaugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
