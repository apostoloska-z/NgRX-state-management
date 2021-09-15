import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleSelectors } from '../../store/example.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})

export class Comp2Component implements OnInit{
  count$: Observable<number>;
  message$: Observable<any>;
  data$: Observable<any>;
  prdata$: Observable<any>;
  weatherData: any;

  constructor(private store$: Store) { 
    this.count$ = this.store$.select(ExampleSelectors.count);
    this.message$ = this.store$.select(ExampleSelectors.message);
    this.data$ = this.store$.select(ExampleSelectors.data);
    this.prdata$ = this.store$.select(ExampleSelectors.prdata);
  }

  ngOnInit() {
    this.weatherData=this.data$;
    console.log(this.data$);
  }


  // ngOnInit():void {
  //   this.store$.select(ExampleSelectors.data).subscribe(data => {
  //     this.data$=data;
  //     this.weatherData = this.data$;
  //     console.log(this.weatherData);
  //   })
  // }

}
