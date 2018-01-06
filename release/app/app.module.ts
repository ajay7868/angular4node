import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app.routes';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';
import { WeatherComponent } from './weather/weather.component';
import { ForcastingComponent } from './forcasting/forcasting.component';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    WeatherComponent,
    ForcastingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpModule,Ng2OrderModule
    
    
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
