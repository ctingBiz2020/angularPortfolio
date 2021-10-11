import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BinarytreeComponent } from './project/binarytree/binarytree.component';
import { NodeComponent } from './project/binarytree/node/node.component';
import { LeftarrowComponent } from './project/binarytree/leftarrow/leftarrow.component';
import { RightarrowComponent } from './project/binarytree/rightarrow/rightarrow.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent}  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ProjectComponent,
    HomeComponent,
    BinarytreeComponent,
    NodeComponent,
    LeftarrowComponent,
    RightarrowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
