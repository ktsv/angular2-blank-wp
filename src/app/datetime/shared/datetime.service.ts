import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {CommonService} from "../../common.service"

@Injectable()
export class DateTimeService extends CommonService {
    /*
     * You can specify path, that will be added to API url
     * in common.service.ts file
     */
    url: string = '';

    constructor(http: Http) {
        super(http);
        this.setUrl(this.url);
    }

    /*
     * Example of the additional service
     * common.service.ts
     * pk - primary key (id)

     detail(pk) {
       return this.getDetailMethod(pk, '/dates/');
     }
     */
}

