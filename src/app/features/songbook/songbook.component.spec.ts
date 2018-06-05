import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongbookComponent } from './songbook.component';

describe('SongbookComponent', () => {
  let component: SongbookComponent;
  let fixture: ComponentFixture<SongbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
