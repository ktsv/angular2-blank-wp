import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'home',
    templateUrl: '../../templates/landing.component.html',
    providers: [],
})

export class LandingComponent {


    constructor(private route: ActivatedRoute, private router: Router) {
    }

    public goTo(path: string) {
        this.router.navigate([path]);
    }
}
