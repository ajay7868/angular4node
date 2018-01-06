import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import{Forcast} from '../forcasting/forcast';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-forcasting',
  templateUrl: './forcasting.component.html',
  styleUrls: ['./forcasting.component.css']
})
export class ForcastingComponent implements OnInit {
city:String;
cityforcast:Forcast[]=[];
  constructor(private forecast:WeatherService,private route:ActivatedRoute) {
    //this.city=route.params['id'];
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //console.log(params) 
      console.log(params['id'])
     this.forecast.getforecasting(params['id']).subscribe(res=>
     {
       
       for(let i=0;i<res.list.length;i+=8)
       {
         const temparory=new Forcast(res.list[i].dt_txt,
          res.list[i].main.temp_max,res.list[i].main.temp_min);
          this.cityforcast.push(temparory);
       }
       console.log(this.cityforcast);
      // console.log(res.list[9].dt_txt);
       //console.log(res.list[0].main.temp);
      // this.result.push({'name':response.name,'temp':response.main.temp });
     })
  });
  }
}
