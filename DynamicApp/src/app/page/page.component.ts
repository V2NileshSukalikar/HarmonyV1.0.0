
import { Component, OnInit, AfterViewInit, ChangeDetectorRef, NgZone, OnChanges } from '@angular/core';
import { PagedataService } from '../services/pagedata.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],

})
export class PageComponent implements AfterViewInit, OnInit {

  headerData: any = {};
  isHeader: boolean;
  constructor(private pagedataService: PagedataService, private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef, public zone: NgZone) {
    this.route.params
      .subscribe((params: Params) => {
        this.pagedata = {};
        this.data = {} as any;
        this.pagecounter = 0 as number;
        this.pagedataService.selectedlink = '/page/' + params['token'];
        this.getpagedata(params['token']);
      });
  }

  ngAfterContentInit() {
  }

  ngOnInit() {
    this.pagecounter = 0;
  }

  ngAfterViewInit() {
    this.resertcounter();

    this.pagecounter = 0;
  }

  resertcounter() {

    this.pagecounter = 0;
  }

  pagedata: any = {};
  data = {} as any;
  pagecounter = 0 as number;

  getpagedata(name: string): void {
    let pagename = '';
    this.pagecounter = 0;
    this.data = {};
    pagename = name;
    this.headerData = localStorage.getItem('global');
    this.isHeader = this.headerData == null ? true : false;
    this.pagedataService.getData(pagename, this.isHeader).subscribe(
      (session) => {
        setTimeout(() => {
          this.pagedataService.pagecounter = 0;
          this.pagedata = session.pagespecificData;
          this.pagedataService.GlobalData = this.isHeader ? session.GlobalData : JSON.parse(this.headerData);
          var content = this.pagedata.contetntData.length;
          var orient = this.pagedata.orientation.reduce((a, b) => a + b, 0);

          if (content > orient) {
            var difference = content - orient;
            var lastdata = this.pagedata.orientation[this.pagedata.orientation.length - 1];
            var counter = 0;
            if (difference > lastdata) {
              counter = Math.ceil(difference / lastdata);
            }
            else if (difference > 0) {
              counter = 1;
            }

            for (var i = 0; i < counter; i++) {
              this.pagedata.orientation.push(lastdata);
            }
          }

          console.log(session.pagespecificData);
        }
          , 100);
      }
    );



  }

  incrementpagecounter() {
    if (this.pagedata != null && this.pagedataService.pagecounter < this.pagedata.contetntData.length)
    { this.pagedataService.pagecounter = this.pagedataService.pagecounter + 1; }
    //     else
    //     {
    //       this.pagedataService.pagecounter=0;
    // //this.pagedataService.pagecounter=-1;

    //     }

  }

  getclassfromorientation(orient: number): number {
    var data = Math.round(100 / orient);
    return data;
  }

  createRange(number): any {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}

