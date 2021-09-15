import { createAction, props } from "@ngrx/store";

export namespace ExampleActions {
    export const increaseCount = createAction("INCREASE_COUNT");

    export const sendMessage = createAction(
        "SEND_MESSAGE",
        props<{message?: string}>()
    );

    export const getWeather = createAction(
        "GET_WEATHER",
    )

    export const getWeatherSuccess = createAction(
        "GET_WEATHER_SUCCESS",
        props<{data?: number}>()
    )

    export const getPromiseData = createAction(
        "GET_PROMISE_DATA",
    )

    export const getPromiseDataSuccess = createAction(
        "GET_PROMISE_DATA_SUCCESS",
        props<{prdata?: any}>()
    )
}