import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestiveListComponent } from './suggestive-list.component';

describe('SuggestiveListComponent', () => {
  let component: SuggestiveListComponent;
  let fixture: ComponentFixture<SuggestiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestiveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
