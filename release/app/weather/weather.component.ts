import { Component, OnInit, } from '@angular/core';
import{WeatherService} from '../weather.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { log } from 'util';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
city=['Delhi','Bengaluru','Kolkata','Pune','Noida'];
 result=[];
 
   constructor(private weather:WeatherService) { }

  ngOnInit() {
           for(var i=0;i<this.city.length;i++)
           {
              this.weather.getweather(this.city[i]).subscribe((response)=>
            {
            // var data =   JSON.stringify(response);
            console.log(response,"data");
            
           this.result.push({'name':response.name,'temp':response.main.temp });
          //console.log(this.result)
            //this.apStr.push(this.result[i]); 
            //console.log()
          //  console.log(response.name) ;
          
            });
          }}
        }
