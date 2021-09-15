import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExampleActions } from '../../store/example.actions';
import { ExampleSelectors } from '../../store/example.selectors';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})

export class Comp1Component implements OnInit{
  message? = "";
  data? = 0;
  prdata? = "";

  constructor(private store$: Store) { }

  increaseCount(): void {
    this.store$.dispatch(ExampleActions.increaseCount())
  }

  sendMessage(): void {
    this.store$.dispatch(ExampleActions.sendMessage({message: this.message}))
  }

  getData():void {
    this.store$.dispatch(ExampleActions.getWeather());
  }

  getPrData():void {
    this.store$.dispatch(ExampleActions.getPromiseData());
  }

  ngOnInit():void {
    this.store$.select(ExampleSelectors.data).subscribe(data => {
      this.data=data;
    })

    this.store$.select(ExampleSelectors.prdata).subscribe(data => {
      this.prdata=data;
    })
  }

  // sendQuery():any {
  //   return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityQuery}&appid=677f911625ef116961869e6d61814a45`)
  //   .then(response => {
  //       if (!response.ok) {
  //           throw Error();
  //       }
  //       return response.json()
  //   })
  //   .then(result => {
  //     this.weatherData = result.main;
  //     this.store$.dispatch(ExampleActions.sendWeatherData({data: this.weatherData}))
  //   })
  //   .catch(error => {
  //     console.log("error");
  // });

}


