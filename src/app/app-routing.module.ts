import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./landing/landing.component";
import {DateListComponent} from "./datetime/datetime-retrieve/datetime-retrieve.component";

const routes: Routes = [
    //{
    //  path: '',
    //  redirectTo: '/example-link',
    //  pathMatch: 'full'
    //},
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'datetime',
        component: DateListComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
