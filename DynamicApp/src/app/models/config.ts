import { Headers, Http } from '@angular/http';

export class Config {

    public headers: Headers;
    public apiURl: string;

    constructor() {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
//<<<<<<< HEAD
        this.apiURl = 'http://localhost:53142/api/CMSData/GetCMSJsonData';  // URL to web api
// =======
//         this.apiURl = 'http://localhost:53142/api/CMSData/GetcmsData';  // URL to web api
// >>>>>>> refs/remotes/origin/master
    }
}
