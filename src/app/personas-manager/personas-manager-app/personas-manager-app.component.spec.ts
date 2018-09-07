import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasManagerAppComponent } from './personas-manager-app.component';

describe('PersonasManagerAppComponent', () => {
  let component: PersonasManagerAppComponent;
  let fixture: ComponentFixture<PersonasManagerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasManagerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasManagerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
