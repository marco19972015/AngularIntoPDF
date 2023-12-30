import { Component, DoCheck, OnInit, inject, signal } from '@angular/core';
import { ReportService } from '../services/report-service';
import { Report } from '../models/report';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit{

  // Hold the current values stored in the input for later use
  companyName: string = '';
  yearlyRevenue!: number;

  // Dependency injection 
  reportService = inject(ReportService);

  // Save the initial list in a property (use bang to let ng know that we will fill the value later)
  currentData = this.reportService.getAllReports();


  ngOnInit(): void {}


  addNewReport(){
    this.reportService.createReport(this.companyName, this.yearlyRevenue);
    console.log(this.reportService.getAllReports());
  }
}
