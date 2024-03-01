import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent implements OnInit {

  public deptid:number=0;
  
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let deptid=params.get('deptid');
      if(deptid!=null)

      this.deptid=+deptid;
    } )
  }
  goPrevious(){
    let preId = this.deptid-1;
    this.router.navigate(['/department',preId]);
  }
  goNext(){
    let nextId = this.deptid+1;
    this.router.navigate(['/department',nextId]);
  }
  goBack(){
    let selectedId=this.deptid ?this.deptid:null;
    this.router.navigate(['/department',{id:selectedId}]);
  }



}
