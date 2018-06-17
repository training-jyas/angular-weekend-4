import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(value: string, length: number) {
        if (value && typeof value === 'string') {
            return value.slice(0, length);
        }
        return value;
    }
}
