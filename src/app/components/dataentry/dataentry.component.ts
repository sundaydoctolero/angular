import { Component, OnInit } from '@angular/core';
import { AuServiceService } from '../../services/au-service.service';
import { State } from '../../models/state';
import { LookupService } from '../../services/lookup.service';
import { PropertyType } from '../../models/property-type';
import { Property } from '../../models/property';
import { StreetExtension } from '../../models/street-extension';
import { StreetDirection } from '../../models/street-direction';
import { ListingType } from '../../models/listing-type';
import { SnotifyService } from 'ng-snotify';
import { PropertyFeatureService } from '../../services/property-feature.service';
import { PropertyAtrributeService } from '../../services/property-atrribute.service';
import { Agent } from '../../models/agent';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {
  /** Lookup Variable */
  public states: State[];
  public property_types: PropertyType[];
  public street_extensions: StreetExtension[];
  public street_directions: StreetDirection[];
  public listing_types: ListingType[];


  /**  */
  public showPropertyDetails: boolean = false;
  public showRentFields: boolean = false;
  public showAdditional: boolean = true;


  orderForm: FormGroup;
  items: FormArray;


  public Agents: Agent[] = [
    {
      Agency_Name: "LJ Hooker Real Estate",
      Agent_Firstname: "Jennifer",
      Agent_Surname: "Doctolero",
      Agent_Contact: "0412 123 121",
    },
    {
      Agency_Name: "Ray White Real Estate",
      Agent_Firstname: "Sunday",
      Agent_Surname: "Doctolero",
      Agent_Contact: "0412 123 123",
    },
  ];


  public form: Property = {
    id: 1,
    Page_No: "1",
    State: "VIC",
    Publication_Name: "Agent Booklet - Ray White Real Estate",
    Publication_Date: new Date(),

    Street_No: "",
    Street_No_Suffix: "",
    Street_Name: "",
    Street_Extension: "Street",
    Street_Direction: "",
    Suburb: "",
  
    
    PostCode: "",
    Sale_Rent: "Sale",

    Ad_Size: "SMALL",
    Listing_Type: "S",
    Property_Type: "HO",
    Land_Area_Metric: "M2",
    Ad_Photo_Type: "COLOUR",
    Ad_Photo_Count: "MULTIPLE",
    Ad_Section: "MIDDLE",
    Ad_Exclusive: "UNKNOWN",



    Data_Entry_Date: new Date(),
    Date_Creation: new Date(),

  }

  constructor(
    private _lookup: LookupService,
    private _notify: SnotifyService,
    private Au: AuServiceService,
    private _formPropFeatures: PropertyFeatureService,
    private _formPropAttributes: PropertyAtrributeService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    /** Generate Form Lookup */
    this.states = this._lookup.getStatesLkp();
    this.property_types = this._lookup.getPropertyTypesLkp();
    this.street_extensions = this._lookup.getStreetExtensionsLkp();
    this.street_directions = this._lookup.getStreetDirectionsLkp();
    this.listing_types = this._lookup.getListingTypesLkp();

    this.showAdditional = true;
    console.log(this.showAdditional);
    alert(this.showAdditional);
  }


  findProperty() {
    this.Au.getDetails(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    this.toggleShow();
  }

  toggleShow() {
    this.showPropertyDetails = !this.showPropertyDetails
  }
  
  toggleAdditional(){
    this.showAdditional = !this.showAdditional;
  }

  handleResponse(data) {
    this.form = data.data;
    this._notify.success("Property generated!");
  }

  handleError(error) {
    this._notify.error(error.error.error);
  }


  saveProperty() {
    console.log(this.form);
    this.Au.saveProperty(this.form).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  showFieldAttribute(field) {
    return this._formPropAttributes.checkField(this.form.Property_Type.substring(0, 2), field);
  }

  showFieldFeature(field) {
    return this._formPropFeatures.checkField(this.form.Property_Type.substring(0, 2), field);
  }

  showRentField() {
    return this.form.Sale_Rent == 'Rent' ? true : false;
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }



}
