import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdCardModule, MdButtonModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';

import { AppRoutingModule, routableComponents } from './app-routing/app-routing.module';
import { UserService } from './services/user.service';

import { SpinnerComponent } from './spinner/spinner.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
