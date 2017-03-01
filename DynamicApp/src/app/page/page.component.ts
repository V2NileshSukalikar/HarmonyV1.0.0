import { Component, OnInit, Input } from '@angular/core';
import { PagedataService } from '../services/pagedata.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input()
  data: Object = {};
  constructor(private pagedataservice: PagedataService) { }

  ngOnInit() {
    this.getCMSData();
  }
  getCMSData(): void {
    this.pagedataservice
      .getCMSData('Page1', true)
      .then((data) => {
        this.data = data.GlobalData;
        console.log(this.data);
      }
      );
  }
}
