import { Component, OnInit,Input } from '@angular/core';
import { PagedataService } from '../../services/pagedata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

@Input() SearchNo:number=0;

  constructor(private pagedataService: PagedataService,) { }

  ngOnInit() {
  }

  searchDatabyString(searchText: string): void {
this.pagedataService.searchData=[];
  this.pagedataService.searchData=[{"Address":"this is address"}]
    // this.pagedataService.getsearchData(searchText).then(
    //   session => 
    //   setTimeout(() => {
    //     this.pagedataService.searchData=session.data},500)
    //   );



  }

}