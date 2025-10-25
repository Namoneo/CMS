import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

/*
 * This is a very basic bootstrap file.  In a full Angular setup you would also
 * configure providers, import modules, and enable production mode
 * conditionally.  For now this simply mounts the root component.
 */

bootstrapApplication(AppComponent).catch((err) => console.error(err));