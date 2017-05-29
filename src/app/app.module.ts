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
import { TagComponent } from './tag/tag.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { UserPublicProfileComponent } from './user-public-profile/user-public-profile.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { UserProfileSettingsComponent } from './user-profile-settings/user-profile-settings.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TermsComponent } from './terms/terms.component';
import { SearchComponent } from './search/search.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PartnersComponent } from './partners/partners.component';
import { OurWritersComponent } from './our-writers/our-writers.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserPostComponent } from './user-post/user-post.component';
import { TopbarComponent } from './topbar/topbar.component';

export function httpClientFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpClient(backend, defaultOptions);
}

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
  headers = new Headers({});
  merge(options?: RequestOptionsArgs): RequestOptions {
    var newOptions = super.merge(options);
    newOptions.headers.set('Authorization', localStorage.getItem('authToken'));
    //newOptions.headers.set('Accept', 'application/json');
   newOptions.headers.set('Content-Type', 'application/json');
    

    return newOptions;
  }
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: '404', component: errorPageComponent },
  { path: 'article/:id', component: SinglearticleComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'login-register', component: LoginRegistrationComponent },
  { path: 'user-public', component: UserPublicProfileComponent },  
  { path: 'profile-setting', component: UserProfileSettingsComponent }, 
  { path: 'user-comments', component: UserCommentsComponent },  
  { path: 'user-posts', component:UserPostComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'search', component: SearchComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'our-writers', component: OurWritersComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'comming-soon', component: CommingSoonComponent},
  {path: 'category/:cat_id', component: CategoryPageComponent},
  {path: 'dashboard', component:DashboardComponent},
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
    TagComponent,
    AboutMeComponent,
    LoginRegistrationComponent,
    UserPublicProfileComponent,
    LeftsidebarComponent,
    UserProfileSettingsComponent,
    UserCommentsComponent,
    TestimonialsComponent,
    TermsComponent,
    SearchComponent,
    PrivacyComponent,
    PartnersComponent,
    OurWritersComponent,
    FaqComponent,
    ContactUsComponent,
    CommingSoonComponent,
    CategoryPageComponent,
    UserComponent,
    DashboardComponent,
    UserPostComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
    providers: [
    {
      provide: HttpClient,
      useFactory: httpClientFactory,
      deps: [XHRBackend, RequestOptions]
    },
    {
      provide: RequestOptions,
      useClass: DefaultRequestOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
