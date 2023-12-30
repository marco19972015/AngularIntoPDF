// Model report class (keeps the contract for our data coming in)
export class Report {

    // hold our data
    companyName: string;
    yearlyRevenue: number;

    // Constructor to be able to create a new report
    constructor(companyName: string, yearlyRevenue: number){
        this.companyName = companyName;
        this.yearlyRevenue = yearlyRevenue
    }

}