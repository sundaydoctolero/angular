import { Injectable } from '@angular/core';
import { PropertyAttribute } from '../models/property-attribute';

@Injectable({
  providedIn: 'root'
})
export class PropertyAtrributeService {

  private fields: PropertyAttribute[] = [
    { id: 1, label: "Bedrooms", name: "Bedrooms", commercial: true, farm: true, house: true, land: false, unit: true, sold: false },
    { id: 2, label: "M2 Total Floor", name: "M2_Total_Floor", commercial: true, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 3, label: "Land_Area", name: "Land_Area", commercial: true, farm: true, house: true, land: true, unit: false, sold: false },
    { id: 4, label: "Land_Area_Metric", name: "Land_Area_Metric", commercial: true, farm: true, house: true, land: true, unit: false, sold: false },
    { id: 5, label: "Ensuites", name: "Ensuites", commercial: false, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 6, label: "Toilets", name: "Toilets", commercial: false, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 7, label: "Dining_Rooms", name: "Dining_Rooms", commercial: false, farm: true, house: true, land: false, unit: true, sold: false },
    { id: 8, label: "Lounge_Dining", name: "Lounge_Dining", commercial: false, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 9, label: "Other_Rooms", name: "Other_Rooms", commercial: true, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 10, label: "Lockup_Garages", name: "Lockup_Garages", commercial: false, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 11, label: "Year_Built", name: "Year_Built", commercial: true, farm: true, house: true, land: false, unit: true, sold: false },
    { id: 12, label: "Floor_Level", name: "Floor_Level", commercial: true, farm: false, house: false, land: false, unit: true, sold: false },
    { id: 13, label: "No_Of_Floor", name: "No_Of_Floor", commercial: true, farm: false, house: false, land: false, unit: true, sold: false },
    { id: 14, label: "Bathrooms", name: "Bathrooms", commercial: true, farm: true, house: true, land: false, unit: true, sold: false },
    { id: 15, label: "Lounge_Rooms", name: "Lounge_Rooms", commercial: false, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 16, label: "No_Of_Study", name: "No_Of_Study", commercial: false, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 17, label: "No_Of_Tennis", name: "No_Of_Tennis", commercial: false, farm: false, house: true, land: false, unit: false, sold: false },
    { id: 18, label: "Family_Rumpus", name: "Family_Rumpus", commercial: false, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 19, label: "Car_Spaces", name: "Car_Spaces", commercial: true, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 20, label: "Year_Building", name: "Year_Building", commercial: true, farm: false, house: true, land: false, unit: false, sold: false },
    { id: 21, label: "Total_Floors", name: "Total_Floors", commercial: true, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 22, label: "Construction_Type", name: "Construction_Type", commercial: true, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 23, label: "Materials_In_Roof", name: "Materials_In_Roof", commercial: true, farm: false, house: true, land: false, unit: true, sold: false },
    { id: 24, label: "Type_Of_Scenic", name: "Type_Of_Scenic", commercial: false, farm: false, house: true, land: true, unit: true, sold: false },
    
  ]

  constructor() { }

  getFormAttributes(property_type) {
    if (property_type == "HO") {
      return this.getHouseAttributes();
    } else if (property_type == "CO") {
      return this.getCommercialAttributes();
    } else if (property_type == "LA") {
      return this.getLandAttributes();
    } else if (property_type == "FA") {
      return this.getFarmAttributes();
    } else if (property_type == "UN") {
      return this.getUnitAttributes();
    }
  }

  getHouseAttributes() {
    return this.fields.filter(function (item) {
      return item.house === true;
    })
  }

  getCommercialAttributes() {
    return this.fields.filter(function (item) {
      return item.commercial === true;
    })
  }

  getLandAttributes() {
    return this.fields.filter(function (item) {
      return item.land === true;
    })
  }

  getFarmAttributes() {
    return this.fields.filter(function (item) {
      return item.farm === true;
    })
  }

  getUnitAttributes() {
    return this.fields.filter(function (item) {
      return item.unit === true;
    })
  }

  getSoldAttributes() {
    return this.fields.filter(function (item) {
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
