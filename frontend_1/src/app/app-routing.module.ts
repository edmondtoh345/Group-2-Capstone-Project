import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MappageComponent } from './mappage/mappage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { MapsidebarComponent } from './mapsidebar/mapsidebar.component';
import { AuthGuard } from './service/auth.guard';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  {path: '', component: HomeComponent,},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent,children: [{ path: 'dialog', component: DialogComponent 
}]},
  //, canActivate: [AuthGuard] 
  {path: 'mappage', component: MappageComponent,children: [{ path: 'mapsidebar', component: MapsidebarComponent 
  }]},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
