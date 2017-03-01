import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Config } from '../models/config';

@Injectable()
export class PagedataService {

    config = new Config();

    constructor(private http: Http) { }

    getCMSData(pageName: string, isHeader: boolean): any {
        const url = this.config.apiURl + '/' + pageName + '/' + isHeader;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
