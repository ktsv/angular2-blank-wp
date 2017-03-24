import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DateListComponent} from "./datetime-retrieve/datetime-retrieve.component";
import {MomentModule} from "angular2-moment";
import {DateListSearchPipe} from "./datetime-retrieve/datetime-retrieve.pipe";


@NgModule({
    imports: [CommonModule, MomentModule],
    declarations: [DateListComponent, DateListSearchPipe],
    exports: [DateListComponent]
})
export class DateModule {
}
