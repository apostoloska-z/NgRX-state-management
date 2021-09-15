import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  apiKey = '677f911625ef116961869e6d61814a45';

  constructor(private http: HttpClient) {}

  public getWeather(query:string): Observable<any> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${this.apiKey}`)
  }
}
