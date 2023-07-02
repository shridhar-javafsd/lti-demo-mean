
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChildComponent } from './child.component';

describe('ChildComponent', () => {



  // vars declaration 

  it('test aitnmetic op', () => {
    expect(10 + 10).toEqual(20);
  });

  it('test aitnmetic op', () => {
    expect(10 + 10).toEqual(21);
  });

});

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let el: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render Monu', () => {
  //   const testText = el.query
  //     (By.css('p')).nativeElement;
  //   expect(testText.textContent).toContain('Monu');
  // });

});
