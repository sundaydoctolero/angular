import { Injectable } from '@angular/core';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  
  private properties: Property[] = 
    [
      {
        id: 1,
        Page_No: "2",
        Sequence_No: 1001,
        State: "VIC",
        Publication_Name: "Agent Booklet - Hocking Stuart Real Estate",
        Publication_Date: new Date("2018-09-03"),
        Unit_No: "",
        Street_No: "45",
        Street_No_Suffix: "",
        Street_Name:  "Linda",
        Street_Extension:  "Street",
        Suburb:  "Hawthorn",
        City: "VIC",
        Property_Type:  "UN,10",
        PostCode: "1234",
        Listing_Type: "S",

        Data_Entry_Date: new Date(),
      },
      {
        id: 1,
        Page_No: "4",
        Sequence_No: 1001,
        State: "VIC",
        Publication_Name: "Agent Booklet - Hocking Stuart Real Estate",
        Publication_Date: new Date("2018-09-03"),
        Unit_No: "",
        Street_No: "36",
        Street_No_Suffix: "",
        Street_Name:  "Hawthorn",
        Street_Extension:  "Road",
        Suburb:  "Gisborne",
        City: "VIC",
        Property_Type:  "HO,10",
        PostCode: "3456",
        Listing_Type: "S",
        Data_Entry_Date: new Date(),
      }
    ];

  constructor() { }

  getList(){
    return this.properties;
  }

  getAddress(){
    
  }


}
