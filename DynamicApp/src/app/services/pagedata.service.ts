import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Config } from '../models/config';

import { Headers, Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PagedataService {

    config = new Config();

    constructor(private http: Http) {
    };

    getCMSData(pageName: string, isHeader: boolean): any {
        const url = this.config.apiURl + '/' + pageName + '/' + isHeader;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

}
