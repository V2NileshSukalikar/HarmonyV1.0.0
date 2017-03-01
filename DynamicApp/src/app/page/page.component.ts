
import { Component, OnInit } from '@angular/core';
import { PagedataService } from '../services/pagedata.service'
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [PagedataService]
})
export class PageComponent implements OnInit {



  constructor(private pagedataService: PagedataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getpagedata();
    //  this.getCMSData();
  }
  pagedata = {} as any;
  data={} as any;
  pagecounter =0 as number; 
  getpagedata(): void {


    let pagename = "";

    this.route.params
      .subscribe((params: Params) => {
        pagename = params['token'];
        console.log(pagename);
      });

    this.pagedataService.getCMSData(pagename, true).then(
      (session) => {

        this.pagedata = session.pagespecificData;
        this.data = session.GlobalData;
        console.log(session.pagespecificData);
      }
    )

  }

incrementpagecounter(){
  this.pagecounter=this.pagecounter+1
}

  getclassfromorientation(orient : number ):number{
   
   var data = Math.round (100/orient);
   return data;
   
 
  }

  createRange(number):any{
  var items: number[] = [];
  for(var i = 1; i <= number; i++){
     items.push(i);
  }
  return items;
}

// getCMSData(): void {
//     this.pagedataService
//       .getCMSData('Page1', true)
//       .then((data) => {
        
//         console.log(this.data);
//       }
//       );
//   }


}

