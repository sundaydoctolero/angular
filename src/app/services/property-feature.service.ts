import { Injectable } from '@angular/core';
import { PropertyFeature } from '../models/property-feature';

@Injectable({
  providedIn: 'root'
})
export class PropertyFeatureService {
  private fields: PropertyFeature[] = [
    { id: 1, label: "Water Frontage", name: "Water_Frontage", commercial: true, farm: false, house:true, land: true, unit: true, sold: false},
    { id: 2, label: "Scenic View", name: "Scenic_View", commercial: true, farm: false, house:true, land: true, unit: true, sold: false},
    { id: 3, label: "Air Conditioned", name: "Air_Conditioned", commercial: true, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 4, label: "Heritage Other Classification", name: "Heritage_Other", commercial: true, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 5, label: "Lift Installed", name: "Lift_Installed", commercial: true, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 6, label: "Access Security Installed", name: "Access_Security", commercial: true, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 7, label: "Close To Public Transport", name: "Close_To_Public", commercial: true, farm: false, house:true, land: true, unit: true, sold: false},
    { id: 8, label: "Vendor Will Trade",name: "Vendor_Will_Trade", commercial: true, farm: true, house:true, land: true, unit: true, sold: false},
    { id: 9, label: "Permanent Water",name: "Permanent_Water", commercial: false, farm: true, house:false, land: false, unit: false, sold: false},
    { id: 10, label: "Mains Electricity Available",name: "Mains_Electricity", commercial: false, farm: true, house: false, land: true, unit: false, sold: false},
    { id: 11, label: "River Frontage",name: "River_Frontage", commercial: true, farm: true, house:true, land: true, unit: true, sold: false},
    { id: 12, label: "Coast Frontage",name: "Coast_Frontage", commercial: true, farm: true, house:true, land: true, unit: true, sold: false},
    { id: 13, label: "Canal Frontage",name: "Canal_Frontage", commercial: true, farm: true, house:true, land: true, unit: true, sold: false},
    { id: 14, label: "Lake Frontage",name: "Lake_Frontage", commercial: true, farm: true, house:true, land: true, unit: true, sold: false},
    { id: 15, label: "Sealed Roads To Property",name: "Sealed_Roads", commercial: false, farm: true, house:false, land: true, unit: false, sold: false},
    { id: 16, label: "Open Plan",name: "Open_Plan", commercial: false, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 17, label: "Fireplace",name: "Fireplace", commercial: false, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 18, label: "Polished Floors",name: "Polished_Floors", commercial: false, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 19, label: "Swimming Pool",name: "Swimming_Pool", commercial: false, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 20, label: "Renovated",name: "Renovated", commercial: false, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 21, label: "Double Storey",name: "Double_Storey", commercial: false, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 22, label: "Ducted Heating",name: "Ducted_Heating", commercial: false, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 23, label: "Granny Flat / Self Contained",name: "Granny_Flat", commercial: false, farm: false, house:true, land: false, unit: false, sold: false},
    { id: 24, label: "Selling Off The Plan",name: "Selling_Off", commercial: false, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 25, label: "Boat, Ramp/Mooring/Space",name: "Boat_Ramp", commercial: false, farm: false, house:true, land: false, unit: false, sold: false},    
    { id: 26, label: "Ducted Vaccuum",name: "Ducted_Vaccuum", commercial: false, farm: false, house:true, land: false, unit: true, sold: false},
    { id: 27, label: "Town Water Available",name: "Town_Water", commercial: false, farm: false, house:true, land: true, unit: false, sold: false},
    { id: 28, label: "Town Sewerage Available",name: "Town_Sewerage", commercial: false, farm: false, house:false, land: true, unit: false, sold: false},
    { id: 29, label: "Curb Channeling on Frontage",name: "Curb_Chanelling", commercial: false, farm: false, house:false, land: true, unit: false, sold: false},
    { id: 30, label: "All Weather Access to Land",name: "All_Weather_Access", commercial: false, farm: true, house:false, land: true, unit: false, sold: false},
    { id: 31, label: "Land Subject to Flooding",name: "Land_Subject", commercial: false, farm: false, house:false, land: true, unit: false, sold: false},
    { id: 32, label: "Phone Service Available",name: "Phone_Service", commercial: false, farm: false, house:false, land: true, unit: false, sold: false},
    { id: 33, label: "Land Can Be Subdivided",name: "Land_Can_Be", commercial: false, farm: false, house:false, land: true, unit: false, sold: false},
    { id: 34, label: "Trees On Land",name: "Trees_On_Land", commercial: false, farm: false, house:false, land: true, unit: false, sold: false},
  ];

  constructor() { }

  getFormFeatures(property_type){
    if(property_type == "HO"){
      return this.getHouseFeatures();
    } else if(property_type == "CO"){
      return this.getCommercialFeatures();
    } else if(property_type == "LA"){
      return this.getLandFeatures(); 
    } else if(property_type == "FA"){
      return this.getFarmFeatures();
    } else if(property_type == "UN"){
      return this.getUnitFeatures();
    } 
  }

  getHouseFeatures(){
    return this.fields.filter(function(item){
      return item.house === true;
    })
  }

  getCommercialFeatures(){
    return this.fields.filter(function(item){
      return item.commercial === true;
    })
  }

  getLandFeatures(){
    return this.fields.filter(function(item){
      return item.land === true;
    })
  }

  getFarmFeatures(){
    return this.fields.filter(function(item){
      return item.farm === true;
    })
  }

  getUnitFeatures(){
    return this.fields.filter(function(item){
      return item.unit === true;
    })
  }

  getSoldFeatures(){
    return this.fields.filter(function(item){
      return item.sold === true;
    })
  }

  checkField(property_type, field_name) {
    if (property_type == "HO") {
      return this.fields.find(x => x.name == field_name).house;
    } else if (property_type == "CO") {
      return this.fields.find(x => x.name == field_name).commercial;
    } else if (property_type == "LA") {
      return this.fields.find(x => x.name == field_name).land;
    } else if (property_type == "FA") {
      return this.fields.find(x => x.name == field_name).farm;
    } else if (property_type == "UN") {
      return this.fields.find(x => x.name == field_name).unit;
    }
  }

}
