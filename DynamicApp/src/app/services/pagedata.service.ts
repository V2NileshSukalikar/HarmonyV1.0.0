import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PagedataService {


    constructor(private http: Http) {

    };

    getdata(pagename: string, isheader: boolean): any {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get("http://harmonyservice/api/CMSData/GetcmsData/" + pagename + "/" + isheader).toPromise().then(
            responce => responce.json() as any

        ).catch(this.handleError)

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