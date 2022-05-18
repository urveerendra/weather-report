import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foreCastInformation: any;
  constructor(public weatherService:WeatherService) { }
  weatherSubscription: any;
  cityInformation: any[]=[];  
  cities: any[] = [{
      name:'London',
      lat:'51.5085',
      lon:'-0.1257'
    },
    {
      name:'Paris',
      lat:'48.8534',
      lon:'2.3488'
    },
    {
      name:'Berlin',
      lat:'52.5244',
      lon:'13.4105'
    },
    {
      name:'Vienna',
      lat:'48.2085',
      lon:'16.3721'
    },
    {
      name:'Old Town',
      lat:'50.088',
      lon:'14.4208'
    }];
  ngOnInit(): void {
    this.loadWeather();
  }
  loadWeather(){
    this.cityInformation = [];
    this.cities.forEach(city => {
      this.weatherService.getWeatherDataforCity(city.name).subscribe( data =>{
        if(data){
          this.cityInformation.push(data);
        }        
      })
    });
  }
  getMoreweatherDetails(city:any, lat:any, lon:any){
    this.weatherService.getWeatherDataFor5Days(lat,lon ).subscribe( data =>{
      if(data){
        this.foreCastInformation = data;
      }        
    });
    this.weatherService.setCity(city);
    this.weatherService.setCityData(this.foreCastInformation); 
  }
}
