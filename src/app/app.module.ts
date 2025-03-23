import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderComponent  // Moved from declarations to imports
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }