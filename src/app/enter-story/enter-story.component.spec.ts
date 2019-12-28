import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterStoryComponent } from './enter-story.component';

describe('EnterStoryComponent', () => {
  let component: EnterStoryComponent;
  let fixture: ComponentFixture<EnterStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
