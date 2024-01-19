import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormDialogueComponent } from './person-form-dialogue.component';

describe('PersonFormDialogueComponent', () => {
  let component: PersonFormDialogueComponent;
  let fixture: ComponentFixture<PersonFormDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonFormDialogueComponent]
    });
    fixture = TestBed.createComponent(PersonFormDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
