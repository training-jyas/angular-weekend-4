import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rupees'
})
export class CurrencyPipe implements PipeTransform {
    transform(value: string) {
        value = 'Rs ' + value;
        return value;
    }
}
