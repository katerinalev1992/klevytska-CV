import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ContactsComponent} from './components/contacts/contacts.component';
import {HobbiesComponent} from './components/hobbies/hobbies.component';
import {EducationComponent} from './components/education/education.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {BlogComponent} from './components/blog/blog.component';
import {RootComponent} from './components/root/root.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ExperienceComponent,
    EducationComponent,
    HobbiesComponent,
    BlogComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'contacts', component: ContactsComponent},
      {path: 'experience', component: ExperienceComponent},
      {path: 'education', component: EducationComponent},
      {path: 'hobbies', component: HobbiesComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'home', component: RootComponent}
    ])
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
