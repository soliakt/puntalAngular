import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AduanaComponent } from './users/aduana/aduana.component';
import { GuardamuelleComponent } from './users/guardamuelle/guardamuelle.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'aduana',
        component: AduanaComponent,
    },
    {
        path:'guardamuelle',
        component:GuardamuelleComponent,
    },
];
