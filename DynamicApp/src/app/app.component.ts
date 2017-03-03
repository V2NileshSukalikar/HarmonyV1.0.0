import { Component, } from '@angular/core';
import { PagedataService } from './services/pagedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app works!';

  data = {} as any;
  constructor(private globalservice: PagedataService) {

    this.data = globalservice.GlobalData;
  }

  getdata() {
    this.data = this.globalservice.GlobalData;
  }

  resertcounter() {

   // alert(this.globalservice.pagecounter)
    this.globalservice.pagecounter = 0;

  }
}


