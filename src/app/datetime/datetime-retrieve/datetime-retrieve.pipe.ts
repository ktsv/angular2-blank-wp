import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: "dateListSearch"
})
export class DateListSearchPipe implements PipeTransform {
    transform(value: any[], arg: string): any {
        return arg ? value.filter(item =>
                (item.date ? item.date.toLowerCase().indexOf(arg.toLowerCase()) > -1: item.date) ||
                (item.time.toLowerCase().indexOf(arg.toLowerCase()) > -1)
            ) : value;
    }
}