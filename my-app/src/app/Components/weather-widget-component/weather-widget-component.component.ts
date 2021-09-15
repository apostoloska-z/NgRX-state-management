import { Component, OnInit, Inject } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';

@Component({
  selector: 'app-weather-widget-component',
  templateUrl: './weather-widget-component.component.html',
  styleUrls: ['./weather-widget-component.component.scss'],
  providers: [GetWeatherService],
})
export class WeatherWidgetComponentComponent implements OnInit {
  public WeatherData: any;
  public query = 'Kyiv';

  constructor(private weatherService: GetWeatherService,  ) {}

  ngOnInit(): void {
    this.weatherService.getWeather(this.query).subscribe((data:any) => {
      this.WeatherData = data;
      this.setWeatherData(this.WeatherData);
    })
  }

    setWeatherData (data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate  = new Date(); 
    this.WeatherData.isDay = (currentDate.getTime()<sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

  searchQuery() {
    this.weatherService.getWeather(this.query).subscribe((data:any) => {
      this.WeatherData = data;
      this.setWeatherData(this.WeatherData);
      console.log(data);
    })
  }
}
