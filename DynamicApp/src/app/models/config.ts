import { Headers, Http } from '@angular/http';

export class Config {

    public headers: Headers;
    public apiURl: string;

    constructor() {
        this.headers = new Headers({ 'Content-Type': 'application/json' });


        this.apiURl = 'http://harmonyservice/api/CMSData/GetCMSJsonData';  // URL to web api
          this.Searchurl = 'http://harmonyservice/api/CMSData/GetFilteredRecords'; 
           // URL to web api



    }
}
