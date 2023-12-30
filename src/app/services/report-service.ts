// Import the report model so we can implement
import { Injectable } from "@angular/core";
import { Report } from "../models/report";

// Have the service be placed at root so we can maintain the same instance in our codebase
@Injectable({
    providedIn: "root"
})

export class ReportService {
    // Create a prop of type report array 
    reportArray: Report[] = [
        new Report('TheBigApple', 5000000),
        new Report('TheLittleApple', 200000),
        new Report('ABCCamper', 302400),
        new Report('TheSwimmers', 324005)
    ];

    // Create a method to get all the reports
    getAllReports(){
        return this.reportArray;
    }

    // Create a method that creates a report
    createReport(companyName: string, yearlyRevenue: number){
        let newReport = new Report(companyName, yearlyRevenue);
        this.reportArray.push(newReport)
    }
}

