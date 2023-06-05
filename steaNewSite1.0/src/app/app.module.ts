import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { SocietaComponent } from './societa/societa.component';
import { ServiziComponent } from './servizi/servizi.component';
import { DettaglioServiziComponent } from './dettaglio-servizi/dettaglio-servizi.component';
import { AboutComponent } from './about/about.component';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from '../environments/environment';
import { FireService } from './serìvices/fire.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    SocietaComponent,
    ServiziComponent,
    DettaglioServiziComponent,
    AboutComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [FireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
