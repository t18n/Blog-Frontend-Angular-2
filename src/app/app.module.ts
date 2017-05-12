import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, XHRBackend, RequestOptions, BaseRequestOptions, Headers, RequestOptionsArgs } from '@angular/http';

import { HttpClient } from './HttpClient';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TruncatePipe } from './limitpipe/limitpipe';
import { SinglearticleComponent } from './singlearticle/singlearticle.component';
import { HeaderPrimaryComponent } from './header-primary/header-primary.component';
import { FooterComponent } from './footer/footer.component';
import { errorPageComponent } from './404page/404page.component';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { TagComponent } from './tag/tag.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '404', component: errorPageComponent },
  { path: 'article/:id', component: SinglearticleComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TruncatePipe,
    SinglearticleComponent,
    HeaderPrimaryComponent,
    FooterComponent,
    errorPageComponent,
    HeaderSecondaryComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
