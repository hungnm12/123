import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChatComponent } from './chat/chat.component';

export const routes: Routes = [
   
   {path:'',component:LoginComponent},
   {path:'signup',component:SignupComponent},
   {path:'chat',component:ChatComponent}

];
