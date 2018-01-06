import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import { AboutComponent } from './about/about.component';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {WeatherComponent} from './weather/weather.component';
import { ForcastingComponent } from './forcasting/forcasting.component';
const routes: Routes = [
    {path:'',component:AboutComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'Weather',component:WeatherComponent},
    {path:'forca',component:ForcastingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }