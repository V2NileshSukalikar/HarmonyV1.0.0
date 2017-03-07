import { Headers, Http } from '@angular/http';

export class Config {

    public headers: Headers;
    public apiURl: string;
     public Searchurl: string;

    constructor() {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
//<<<<<<< HEAD
        this.apiURl = 'http://harmonyservice/api/CMSData/GetCMSJsonData';  // URL to web api
          this.Searchurl = 'http://harmonyservice/api/CMSData/GetFilteredRecords';  // URL to web api
// =======
//         this.apiURl = 'http://localhost:53142/api/CMSData/GetcmsData';  // URL to web api
// >>>>>>> refs/remotes/origin/master
    }
}
