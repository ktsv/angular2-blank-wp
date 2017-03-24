import {Injectable} from "@angular/core";
import {Http, RequestOptions, URLSearchParams, RequestOptionsArgs} from "@angular/http";
import "rxjs/add/operator/map";
const apiUrl = 'http://date.jsontest.com/';

@Injectable()
export class CommonService {
    url: string;

    constructor(private http: Http) {
        this.http = http;
    }

    setUrl(relativeUrl: String) {
        this.url = apiUrl + relativeUrl;
    }

    /*
     * List of services for interaction with REST API
     */

    list(options?: RequestOptionsArgs) {
        return this.http.get(this.url, options);
    }

    listChildren(pk, options?: RequestOptionsArgs) {
        return this.http.get(this.url + pk + '/children/', options);
    }

    retrieve(pk, options?: RequestOptionsArgs) {
        return this.http.get(this.url + pk + '/', options);
    }

    elementRetrieve(options?: RequestOptionsArgs) {
        return this.http.get(this.url, options);
    }

    remove(pk) {
        return this.http.delete(this.url + pk + '/');
    }

    update(pk, data) {
        return this.http.put(this.url + pk + '/', data);
    }

    create(data) {
        return this.http.post(this.url, data);
    }

    getDetailMethod(pk, method, options?: RequestOptionsArgs) {
        return this.http.get(this.url + pk + method, options);
    }

    postDetailMethod(pk, method, data?: any) {
        return this.http.post(this.url + pk + method, data);
    }

    getListMethod(method, options?: RequestOptionsArgs) {
        return this.http.get(this.url + method, options);
    }

}
