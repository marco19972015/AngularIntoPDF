// Import the report model so we can implement
import { report } from "../models/report";

export class ReportService {
    // Create a prop of type report array 
    report: report[] = [
        new report('TheBigApple', 5000000),
        new report('TheLittleApple', 200000),
        new report('ABCCamper', 302400),
        new report('TheSwimmers', 324005)
    ];
}

