import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { State } from '../../models/state';
import { PropertyType } from '../../models/property-type';
import { StreetExtension } from '../../models/street-extension';
import { StreetDirection } from '../../models/street-direction';
import { ListingType } from '../../models/listing-type';
import { LookupService } from '../../services/lookup.service';
import { PropertyAtrributeService } from '../../services/property-atrribute.service';
import { PropertyFeatureService } from '../../services/property-feature.service';
import { AuServiceService } from '../../services/au-service.service';
import { Router } from '@angular/router';
import { SuburbService } from '../../services/suburb.service';

@Component({
  selector: 'app-entryform',
  host: { '(window:keydown)': 'hotkeys($event)' },
  templateUrl: './entryform.component.html',
  styleUrls: ['./entryform.component.css']
})
export class EntryformComponent implements OnInit {
  @ViewChild('input101') ad_size: ElementRef;
  @ViewChild('input104') bedrooms: ElementRef;
  @ViewChild('input102') lounge_room: ElementRef;
  @ViewChild('input103') air_conditioned: ElementRef;
  @ViewChild('input96') agent_contact: ElementRef;
  @ViewChild('input97') transport: ElementRef;
  @ViewChild('input98') swimming_pool: ElementRef;
  @ViewChild('input105') open_plan: ElementRef;
  @ViewChild('unit_no') unit: ElementRef;



  public states: State[];
  public property_types: PropertyType[];
  public street_extensions: StreetExtension[];
  public street_directions: StreetDirection[];
  public listing_types: ListingType[];

  public propertyForm: FormGroup;
  public agents: FormArray;

  public showRent: boolean = true;
  public show: boolean = false;
  public showAdditional: boolean = false;
  public showAuctionField: boolean;

  public form = {
      Page_No: "",
      State: "VIC",
      Publication_Name: "Sample",
      Publication_Date: new Date(),
      Property_Type: "HO",
      Unit_No: "",
      Street_No: "",
      Street_No_Suffix: "",
      Street_Name: "",
      Street_Extension: "Street",
      Street_Direction: "",
      Suburb: "",
      PostCode: "",
      Sale_Rent: 'Sale',
      Listing_Type: "S",
      Auction_Date: null,
      Price_From: "",
      Auction_Time: null,
      Price_To: null,
      Auction_Location: "",
      Price_Description: "",
      Rental_Period: "",
      Bedrooms: null,
      M2_Total_Floor: null,
      Land_Area: null,
      Land_Area_Metric: 'M2',
      Ensuites: "",
      Toilets: null,
      Dining_Rooms: null,
      Lounge_Dining: null,
      Other_Rooms: null,
      Lockup_Garages: null,
      Year_Built: null,
      Floor_Level: null,
      No_Of_Floor: null,
      Bathrooms: null,
      Lounge_Rooms: null,
      No_Of_Study: null,
      No_Of_Tennis: null,
      Family_Rumpus: null,
      Car_Spaces: null,
      Year_Building: null,
      Total_Floors:null,
      Construction_Type: "",
      Materials_In_Roof: "",
      Type_Of_Scenic: "",
      Water_Frontage: "",
      Scenic_View: "",
      Air_Conditioned: "",
      Heritage_Other: "",
      Lift_Installed: "",
      Access_Security: "",
      Close_To_Public: "",
      Vendor_Will_Trade: "",
      Permanent_Water: "",
      Mains_Electricity: "",
      River_Frontage: "",
      Coast_Frontage: "",
      Canal_Frontage: "",
      Lake_Frontage: "",
      Sealed_Roads: "",
      Open_Plan: "",
      Fireplace: "",
      Polished_Floors: "",
      Swimming_Pool: "",
      Renovated: "",
      Double_Storey: "",
      Ducted_Heating: "",
      Granny_Flat: "",
      Selling_Off: "",
      Boat_Ramp: "",
      Ducted_Vaccuum: "",
      Town_Water: "",
      Town_Sewerage: "",
      Curb_Chanelling: "",
      All_Weather_Access: "",
      Land_Subject: "",
      Phone_Service: "",
      Land_Can_Be: "",
      Trees_On_Land: "",
      Additional_Property: "",
      Date_Creation: new Date(),
      Data_Entry_Date: new Date(),
      Ad_Size: "SMALL",
      Ad_Photo_Type: "COLOUR",
      Ad_Photo_Count: "SINGLE",
      Ad_Section: "MIDDLE",
      Ad_Exclusive: "UNKNOWN",
      agents: this.fb.array([this.createAgent()
      ])
  }



  constructor(private fb: FormBuilder,
    private _lookup: LookupService,
    private _formPropAttributes: PropertyAtrributeService,
    private _formPropFeatures: PropertyFeatureService,
    private Au: AuServiceService, 
    private PostCode: SuburbService,
    private _router: Router,
    ) {
    this.states = this._lookup.getStatesLkp();
    this.property_types = this._lookup.getPropertyTypesLkp();
    this.street_extensions = this._lookup.getStreetExtensionsLkp();
    this.street_directions = this._lookup.getStreetDirectionsLkp();
    this.listing_types = this._lookup.getListingTypesLkp();
  }

  send() {
    this.Au.saveProperty(this.propertyForm.value).subscribe(
      data => {
        console.log(data);
        this.unit.nativeElement.focus();
        this.agents.controls.splice(0);
        this.propertyForm = this.fb.group(this.form);
        this.addAgent();
      },
      error => console.log(error)
    );
    
    this.show = false;
    
  }

  reset() {
    this.propertyForm.reset();
  }

  showDetails() {
    return this.show = !this.show;
  }

  getSuburb(){
    this.PostCode.getPostCode(this.state.value,this.suburb.value).subscribe(
      data=> this.setPostCode(data),
      error => this.post_code.setValue("")
    )
  }

  setPostCode(suburb){
    this.post_code.setValue(suburb.data.Post_Code);
  }

  hotkeys(e) {
    if ((e.keyCode) == 96 && e.ctrlKey) { // numpad 0
      e.preventDefault();
      this.agent_contact.nativeElement.focus();
    }

    if ((e.keyCode) == 97 && e.ctrlKey) { // numpad 1
      e.preventDefault();
      this.transport.nativeElement.focus();
    }

    if ((e.keyCode) == 98 && e.ctrlKey) { //numpad 2
      e.preventDefault();
      this.swimming_pool.nativeElement.focus();
    }

    if ((e.keyCode) == 99 && e.ctrlKey) { //numpad 3
      e.preventDefault();

    }
    if ((e.keyCode) == 100 && e.ctrlKey) { //numpad 4
      e.preventDefault();

    }

    if ((e.keyCode) == 101 && e.ctrlKey) { //numpad 5
      e.preventDefault();
      this.ad_size.nativeElement.focus();
    }

    if ((e.keyCode) == 102 && e.ctrlKey) {
      e.preventDefault();
      this.lounge_room.nativeElement.focus(); //numpad 6
    }

    if ((e.keyCode) == 103 && e.ctrlKey) { //numpad 7
      e.preventDefault();
      this.air_conditioned.nativeElement.focus();
    }

    if ((e.keyCode) == 104 && e.ctrlKey) { //numpad 8
      e.preventDefault();
      this.bedrooms.nativeElement.focus();
    }

    if ((e.keyCode) == 105 && e.ctrlKey) { //numpad 9
      e.preventDefault();
      this.open_plan.nativeElement.focus();
    }





  }

  ngOnInit() {
    this.propertyForm = this.fb.group(this.form);
    this.unit.nativeElement.focus();
  }

  showAdditionalField() {
    return this.showAdditional = !this.showAdditional;
  }

  createAgent() {
    return this.fb.group({
      Agent_Contact: "",
      Agency_Name: "",
      Agent_Firstname: "",
      Agent_Surname: "",
      state: "VIC",
      publication_name: "Sample",
      publication_date: new Date(),
    })
  }

  addAgent(): void {

    this.agents = this.propertyForm.get('agents') as FormArray;
    this.agents.push(this.createAgent());
  }


  deleteAgent(index) {
    console.log(index);
    this.agents.removeAt(index);
  }


  
  checkAddress(){
    if(this.page_no.valid && this.street_no.valid && this.suburb.valid && this.post_code.valid){
      return false;
    } else {
      return true;
    }
  }

  showFieldAttribute(field) {
    return this._formPropAttributes.checkField(this.property_type.value.substring(0, 2), field);
  }

  showFieldFeature(field) {
    return this._formPropFeatures.checkField(this.property_type.value.substring(0, 2), field);
  }

  showRentField() {
    return this.sale_rent.value == "Rent" ? true : false;
  }


  generate() {
    if (this.adSize.value == "CLASSIFIEDS") {
      this.adPhotoType.setValue("NO PHOTO");
      this.adPhotoCount.setValue("NOT APPLICABLE");
      this.adSection.setValue("CLASSIFIEDS");
    } else if (this.adSize.value == "") {
      this.adPhotoType.setValue("NO PHOTO");
      this.adPhotoCount.setValue("NOT APPLICABLE");
      this.adSection.setValue("");
    } else {
      this.adPhotoType.setValue("COLOUR");
      this.adPhotoCount.setValue("SINGLE");
      this.adSection.setValue("MIDDLE");
    }
  }

  generate2() {
    if (this.adPhotoType.value == "NO PHOTO") {
      this.adPhotoCount.setValue("NOT APPLICABLE");
    } else {
      this.adPhotoCount.setValue("SINGLE");
    }
  }

  displayAuction(){
    if(this.listing_type.value == "A" || this.listing_type.value == "MA" || this.listing_type.value == "T"){
      this.showAuctionField = true;
    } else {
      this.auction_date.setValue("");
      this.auction_location.setValue("");
      this.auction_time.setValue("");
      this.showAuctionField = false;
    }
  }

  //Getters
  get adSize() {
    return this.propertyForm.get('Ad_Size') as FormControl;
  }

  get adPhotoType() {
    return this.propertyForm.get('Ad_Photo_Type') as FormControl;
  }

  get adPhotoCount() {
    return this.propertyForm.get('Ad_Photo_Count') as FormControl;
  }

  get adSection() {
    return this.propertyForm.get('Ad_Section') as FormControl;
  }

  get adExclusive() {
    return this.propertyForm.get('Ad_Exclusive') as FormControl;
  }

  get page_no() {
    return this.propertyForm.get('Page_No') as FormControl;
  }
  get property_type() {
    return this.propertyForm.get('Property_Type') as FormControl;
  }

  get state() {
    return this.propertyForm.get('State') as FormControl;
  }
  get street_no() {
    return this.propertyForm.get('Street_No') as FormControl;
  }
  get street_name() {
    return this.propertyForm.get('Street_Name') as FormControl;
  }

  get suburb() {
    return this.propertyForm.get('Suburb') as FormControl;
  }

  get post_code() {
    return this.propertyForm.get('PostCode') as FormControl;
  }

  get sale_rent() {
    return this.propertyForm.get('Sale_Rent') as FormControl;
  }

  get listing_type() {
    return this.propertyForm.get('Listing_Type') as FormControl;
  }

  get auction_date() {
    return this.propertyForm.get('Auction_Date') as FormControl;
  }

  get auction_time() {
    return this.propertyForm.get('Auction_Time') as FormControl;
  }

  get price_from() {
    return this.propertyForm.get('Price_From') as FormControl;
  }

  get price_to() {
    return this.propertyForm.get('Price_From') as FormControl;
  }

  get auction_location() {
    return this.propertyForm.get('Auction_Location') as FormControl;
  }

  get price_description() {
    return this.propertyForm.get('Price_Description') as FormControl;
  }

  get rental_period() {
    return this.propertyForm.get('Rental_Period') as FormControl;
  }

}
