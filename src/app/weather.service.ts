import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService  {
  apikey='a0c1fcaa88764c969a5157d0ec42a8b4';
  url='';
  forcasting='';
  constructor(private _http: Http) {
    
    this.url='http://api.openweathermap.org/data/2.5/weather?q=';
    this.forcasting='http://api.openweathermap.org/data/2.5/forecast?q=';
   }
   getweather(city:string)
   {
    return this._http.get(this.url+city+'&'+ 'APPID='+this.apikey+'&'+'units=metric')
    .map((res: Response) => res.json())
   }
  getforecasting(city:string)
  {
    
    {
      return this._http.get(this.forcasting+city+'&'+ 'APPID='+this.apikey+'&'+'units=metric')
      .map((res: Response) => res.json())
     }
  } 
}
