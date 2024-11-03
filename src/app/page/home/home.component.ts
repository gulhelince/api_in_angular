import { Component, OnInit } from '@angular/core';
//call apiservices
import { ApiservicesService } from '../apiservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiservicesService) { }

  categoryList:any = ['all','hosting','ecommerce','finance','course','product','travel'];
  showAllData:any=[];
  filterName:any;
  filterData:any=[];
  showData:any;

  ngOnInit(): void {
   this.homeData();
  }

  homeData()
  {
    this.service.homeapi().subscribe((result)=>{
      console.log(result,'result#');
      if(result.length>0)
      {
        this.showAllData = result;
        this.showData = true;
      }
    });
  }

  onChange(e:any){
    console.log(e.target.value,'categoryvalue');
    this.showData=false;
    this.filterName = e.target.value;
    this.filterData=[];

    this.showAllData.filter((element:any)=>{
      if(this.filterName=='All')
      {
        this.filterData.push(element);
      }
      else{
        if(element.category == this.filterName.toLowerCase())
          {
            this.filterData.push(element);
          }
      }

      
    });

    console.log(this.filterData,'filterData##');
  }

}
