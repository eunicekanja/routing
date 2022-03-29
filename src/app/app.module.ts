import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { Routes,RouterModule } from '@angular/router';

const AppRoutes:Routes=[
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'users',
    component:UserComponent,
  },
  {
    path:'server',
    component:ServerComponent,
  },
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
