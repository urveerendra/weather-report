import { Component, Input, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cityData:any = {};
  daysInfo: any[] = [];
  city: any;
  constructor(public weatherService:WeatherService) { }

  ngOnInit(): void { 
    
  }
  ngDoCheck(){
    this.city = this.weatherService.city;
    this.cityData = this.weatherService.cityData;
    this.daysInfo = [];
    let dateSet = new Set();
    if(this.cityData && this.cityData.list){
      this.cityData.list.forEach((ele:any) =>{
        let date = ele['dt_txt'].split(" ")[0];
        if(!dateSet.has(date)){
          dateSet.add(date);
          this.daysInfo.push({
          "forecast":ele.weather[0].main,
          "dt":ele.dt,
          "date": ele['dt_txt'].split(" ")[0],
          "temp": ele.main.temp,
          "minTemp": ele.main.temp_min,
          "maxTemp": ele.main.temp_max,
          })
        }
      })
    }    
  }
}
