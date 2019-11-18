import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { BrMasker4Module } from 'brmasker4';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireModule.initializeApp({
    apiKey: "AIzaSyD0G4E-yh9nH84fcHPqTpKH_dYQaCTao38",
    authDomain: "coif-ifpr.firebaseapp.com",
    databaseURL: "https://coif-ifpr.firebaseio.com",
    projectId: "coif-ifpr",
    storageBucket: "coif-ifpr.appspot.com",
    messagingSenderId: "489167400293",
    appId: "1:489167400293:web:4eb3718f1c511b9893058c",
    measurementId: "G-M35GVBVMM7"
  }), AngularFireDatabaseModule, BrMasker4Module ],
  providers: [
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
