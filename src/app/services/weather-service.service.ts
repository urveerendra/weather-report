import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  cityData: any;
  city: any;
  constructor(private http: HttpClient) { }

  public getWeatherDataforCity(city?: string,appId?: string){
    if(!appId){
      appId = "f33373c4d7c79ce797961ed501b58d93";
    }
    if(!city){
      city = "London";
    }
    return this.http.get( environment.weatherCityURL+"?q="+ city +"&APPID="+ appId);
  }
  setCity(city:string){
    this.city = city;
  }
  setCityData(cityData:any){
    this.cityData = cityData;
  }
  public getWeatherDataFor5Days(lat?:string,lon?:string, appId?: string){
    if(!appId){
      appId = "f33373c4d7c79ce797961ed501b58d93";
    }
    if(!lat){
      lat = "48.8534";
    }
    if(!lon){
      lon = "2.3488";
    }
    return this.http.get( environment.forecastAPIURL+"?lat="+ lat +"&lon="+ lon +"&appid="+ appId);
  }
}
