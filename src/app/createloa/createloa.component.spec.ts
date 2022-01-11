import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateloaComponent } from './createloa.component';

describe('CreateloaComponent', () => {
  let component: CreateloaComponent;
  let fixture: ComponentFixture<CreateloaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:  [ CreateloaComponent ]
    })
    .compileComponents ();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateloaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
