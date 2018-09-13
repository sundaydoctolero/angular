import { Injectable } from '@angular/core';
import { State } from '../models/state';
import { PropertyType } from '../models/property-type';
import { StreetExtension } from '../models/street-extension';
import { StreetDirection } from '../models/street-direction';
import { ListingType } from '../models/listing-type';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  private states: State[] = 
  [{
    code: "ACT",
    state: "Australian Capital Territory"
  },{
    code: "NSW",
    state: "New South Wales"
  },{
    code: "NT",
    state: "Northern Territory"
  },{
    code: "QLD",
    state: "Queensland"
  },{
    code: "SA",
    state: "Southern Acodeustralia"
  },{
    code: "TAS",
    state: "Tasmania"
  },{
    code: "VIC",
    state: "Victoria"
  },{
    code: "WA",
    state: "Western Australia"
  },{
    code: "NZ",
    state: "New Zealand"
  }
  ]

  private property_types: PropertyType[] = 
  [{ code: "HO",property_type: "House" },
   { code: "HO,10", property_type: "House - One Storey / Lowset" },
   { code: "HO,20", property_type: "House - Two Storey / Highset" },
   { code: "HO,50", property_type: "House - Multi Storey"
  }, {
    code: "HO,60",
    property_type: "House - Office / Retail"
  },{
    code: "HO,70",
    property_type: "House - Dual Occupancy"
  },{
    code: "HO,80",
    property_type: "House - Semi Detached"
  },{
    code: "HO,85",
    property_type: "Duplex"
  },{
    code: "HO,90",
    property_type: "Terrace"
  },{
    code: "UN",
    property_type: "Unit"
  },{
    code: "UN,10",
    property_type: "Unit - Townhouse / Villa"
  },{
    code: "UN,20",
    property_type: "Unit - Lowrise"
  },{
    code: "UN,30",
    property_type: "Unit - Highrise"
  },{
    code: "UN,40",
    property_type: "Unit - Penthouse"
  },{
    code: "UN,50",
    property_type: "Unit - Triplex"
  },{
    code: "UN,60",
    property_type: "Unit - Quadruplex"
  },{
    code: "UN,70",
    property_type: "Unit - Studio"
  },{
    code: "CO",
    property_type: "Commercial"
  },{
    code: "CO,30",
    property_type: "Commercial - Retail Building"
  },{
    code: "CO,50",
    property_type: "Commercial - Office Building"
  },{
    code: "CO,70",
    property_type: "Commercial - Industrial Building"
  },{
    code: "LA",
    property_type: "Land"
  },{
    code: "LA,10",
    property_type: "Land - Residential House"
  },{
    code: "LA,20",
    property_type: "Land - Residential Acreage"
  },{
    code: "LA,30",
    property_type: "Land - Rural Acreage"
  },{
    code: "LA,50",
    property_type: "Land - Residential Development"
  },{
    code: "LA,60",
    property_type: "Land - Office / Retail"
  },{
    code: "LA,65",
    property_type: "Land - Industrial"
  },{
    code: "LA,70",
    property_type: "Land - Parks / Reserves"
  },{
    code: "LA,85",
    property_type: "Land - Government"
  },{
    code: "FA",
    property_type: "Farm / Rural"
  }
 ]
  
  private street_extensions: StreetExtension[] = [
    { code: "St", street_extension: "Street" },
    { code: "Rd", street_extension: "Road" },
    { code: "Hwy", street_extension: "Highway" },
    { code: "Ct", street_extension: "Court" },
    { code: "Cr", street_extension: "Crescent"},
  ]
 
  private street_directions: StreetDirection[] =[
    { code: "N", street_direction: "North" },
    { code: "S", street_direction: "South" },
    { code: "E", street_direction: "East" },
    { code: "W", street_direction: "West" }
  ]
  
  private listing_types: ListingType[] = [
    { code: "S", listing_type: "Normal Sale" },
    { code: "M", listing_type: "Mortgagee Sale" },
    { code: "MA", listing_type: "Mortgagee Auction" },
    { code: "T",  listing_type: "Tender" },
    { code: "A",  listing_type: "Auction" },
    { code: "R",  listing_type: "Rent" },
    { code: "O",  listing_type: "Other" },
  ]

  constructor() { }

  getStatesLkp(){
    return this.states;
  }

  getPropertyTypesLkp(){
    return this.property_types;
  }

  getStreetExtensionsLkp(){
    return this.street_extensions;
  }

  getStreetDirectionsLkp(){
    return this.street_directions;
  }

  getListingTypesLkp(){
    return this.listing_types;
  }

}
