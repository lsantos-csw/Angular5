import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DebugElement } from '@angular/core';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let comp: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then( () => {
      fixture = TestBed.createComponent(ContactComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));
  it(`should have text 'contact page'`, async(() => {
    expect(comp.text).toEqual(`contact page`);
  }));

  it(`should set submitted to true`, async(() => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  }));

  it(`should call the on Submit method`, async(() => {
    fixture.detectChanges();
    spyOn(comp, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(comp.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it(`form should be invalid`, async(() => {
    comp.contactForm.controls['email'].setValue('');
    expect(comp.contactForm.valid).toBeFalsy();
    comp.contactForm.controls['name'].setValue('');
    expect(comp.contactForm.valid).toBeFalsy();
    comp.contactForm.controls['text'].setValue('');
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    comp.contactForm.controls['email'].setValue('asd@Asd.com');
    expect(comp.contactForm.valid).toBeFalsy();
    comp.contactForm.controls['name'].setValue('aaaa');
    expect(comp.contactForm.valid).toBeFalsy();
    comp.contactForm.controls['text'].setValue('aaaa');
    expect(comp.contactForm.valid).toBeTruthy();
  }));
});
