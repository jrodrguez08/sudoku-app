import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdCardModule, MdButtonModule, MdInputModule, MdProgressSpinnerModule, MdToolbarModule, MdMenuModule} from '@angular/material';

import {AppRoutingModule, routableComponents} from './app-routing/app-routing.module';
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';

import {SpinnerComponent} from './spinner/spinner.component';

import {AppComponent} from './app.component';
import {TileComponent} from './tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    SpinnerComponent,
    TileComponent
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
    MdInputModule,
    MdProgressSpinnerModule,
    MdToolbarModule,
    MdMenuModule
  ],
  providers: [UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
