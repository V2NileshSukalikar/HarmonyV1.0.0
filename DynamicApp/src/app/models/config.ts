import { Headers, Http } from '@angular/http';

export class Config {

    public headers: Headers;
    public apiURl: string;

    constructor() {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.apiURl = 'http://localhost:53142/api/CMSData/GetcmsData';  // URL to web api
    }
}
