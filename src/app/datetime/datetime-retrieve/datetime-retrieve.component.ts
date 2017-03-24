import {Component, OnInit} from "@angular/core";
import {DateTimeService} from "../shared/datetime.service";
import {Response} from "@angular/http";
import {Date} from "../shared/datetime.model";
import {Router} from "@angular/router";

@Component({
    selector: 'datetime',
    templateUrl: '../../templates/datetime-retrieve.component.html',
    providers: [DateTimeService],
})

export class DateListComponent implements OnInit {
    //orders: Date[];
    date: Date;
    //selectedItem: Date;

    constructor(private service: DateTimeService, private router: Router) {
    }

    ngOnInit(): void {
        this.service.elementRetrieve()
            .map((response: Response) => <Date>response.json())
            .subscribe(
                data => {
                    this.date = data
                },
                err => {
                    console.log(err);
                });
    }

    public goTo(path: string) {
        this.router.navigate([path]);
    }

}
