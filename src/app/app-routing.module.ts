import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { AyarossaComponent } from './components/ayarossa/ayarossa.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ListCvComponent } from './components/list-cv/list-cv.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {path:"",component:LoginComponent},
  {path:"register",component:InscriptionComponent},
  {path:"cv",component:ListCvComponent},
  {path:"addCv",component:AddCvComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
