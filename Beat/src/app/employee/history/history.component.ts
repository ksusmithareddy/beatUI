import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EmployeeService } from 'app/services/employee.service';
import { History } from './history';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  historyList : any=[];
  id: any;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeHistoryById(this.id).subscribe(data => {
      this.historyList = data;
      console.log(this.historyList)
      console.log(this.historyList.empId)
    });
  }
}