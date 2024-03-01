import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {
  public deptList=[
    {id:1,name:'Angular'},
    {id:2,name:'React.Js'},
    {id:3,name:'Javascript'},
    {id:4,name:'node'},
  ]
  // constructor() { }

  // ngOnInit(): void {
  // }
 
  constructor(private router:Router,private route:ActivatedRoute){}
  public selectedId:number=0;
  ngOnInit()
  {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      if(id!=null)
      this.selectedId=+id;
    })
  }
  onSelect(dept:any)
  {
    this.router.navigate(['/department',dept.id]);

  }
  isSelected(dept:any)
  {
    return dept.id===this.selectedId;
  }


}
