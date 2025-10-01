import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { NotFound } from './not-found/not-found';
import { ProductDetail } from './product-detail/product-detail';
import { LogIn } from './log-in/log-in';
import { SignUp } from './sign-up/sign-up';
import { Profile } from './profile/profile';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path:'home',
        component:Home,
        title:"Shop-Home"
    },
    {
        path:'signup',
        component:SignUp,
        title:"Shop-sign up"
    },
    {
        path:'login',
        component:LogIn,
        title:"Shop-Login"
    },
    {
        path:'products',
        component:Products,
        title:"Shop-Products"
    },
    {
        path:'products/:id',
        component:ProductDetail,
        title:"Shop-Products-Details"
    },
    {
        path:'profile',
        component:Profile,
        title:"Shop-Profile"
    },
    {
        path:'**',
        component:NotFound,
        title:"Error-404"
    },
];
