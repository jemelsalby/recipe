import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { FormsModule } from '@angular/forms';
const routes:Routes=[
  {

  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
RouterModule.forRoot(routes),
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
