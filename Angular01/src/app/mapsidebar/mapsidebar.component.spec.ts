import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsidebarComponent } from './mapsidebar.component';

describe('MapsidebarComponent', () => {
  let component: MapsidebarComponent;
  let fixture: ComponentFixture<MapsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
