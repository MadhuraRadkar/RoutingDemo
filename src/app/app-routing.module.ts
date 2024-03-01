import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{path:'',redirectTo:'/departments',pathMatch:'full'},
{path:'department',component:DepartmentlistComponent},
{path:'employee',component:EmployeelistComponent},
{path:'department/:deptid',component:DeptDetailsComponent},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
