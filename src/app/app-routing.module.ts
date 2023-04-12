import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path:'', redirectTo:'home', pathMatch:'full'},
{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
{ path: 'resume', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule) },
{ path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
