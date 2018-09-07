import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property';
import { PropertyService } from '../../services/property.service';


@Component({
  selector: 'app-view-properties',
  templateUrl: './view-properties.component.html',
  styleUrls: ['./view-properties.component.css']
})
export class ViewPropertiesComponent implements OnInit {

  public properties: Property[];

  constructor(
    private _properties: PropertyService
    ) { }

  ngOnInit() {
    this.properties = this._properties.getList();
  }

}