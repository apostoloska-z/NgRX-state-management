import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetWeatherService } from "../Services/get-weather.service";
import { mergeMap, map} from "rxjs/operators";
import {ExampleActions} from './example.actions';

@Injectable()

export class ExampleEffects {
    loadData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ExampleActions.getWeather),
            mergeMap(() => this.getWeatherService.getWeather('Kyiv').pipe(
                map(data => {
                    console.log('hello')
                    return ExampleActions.getWeatherSuccess({ data: data.main.humidity});
                })
            )
            )
        );
    })

    constructor(private actions$: Actions, private getWeatherService: GetWeatherService) {}
}

@Injectable()

export class ExampleEffects2 {

    loadData$ = createEffect(():any => {
        return this.actions$.pipe(
            ofType(ExampleActions.getPromiseData),
            mergeMap(function():any {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const str = "HELLO THERE!";
                        resolve(str);
                    }, 2000)
                })
            .then(data => {
                return ExampleActions.getPromiseDataSuccess({prdata: data})
            })
        })
        )
        }
        );

    constructor(private actions$: Actions) {}
}



