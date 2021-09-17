import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'format'
})
export class FormatPipe implements PipeTransform {
  transform(value: any): any {
    let celcius;
    if(value) {
      celcius = (value - 273.15).toFixed(0)
    }
        return celcius;
  }
}