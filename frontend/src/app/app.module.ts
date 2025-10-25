import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

/*
 * While modern Angular supports standalone components, this module is included
 * for familiarity and easier extension.  You can switch to standalone
 * components if you prefer by removing this module and using the
 * `bootstrapApplication` API instead.
 */
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}