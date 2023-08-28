import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    HomeComponent,
    OneComponent,
    ThreeComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
