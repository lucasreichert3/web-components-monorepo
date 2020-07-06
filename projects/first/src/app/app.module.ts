import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
  FirstCompComponent],
  imports: [
    BrowserModule
  ],
  entryComponents: [FirstCompComponent]
})
export class AppModule implements DoBootstrap{ 

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(FirstCompComponent, { injector: this.injector });
    customElements.define('first-component', el);
  }

}
