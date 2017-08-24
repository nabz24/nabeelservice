import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import {ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';




const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'aboutme', component: AboutmeComponent},

];
export const routing = RouterModule.forRoot(APP_ROUTES);
