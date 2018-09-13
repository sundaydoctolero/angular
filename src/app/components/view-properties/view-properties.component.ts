import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property';
import { PropertyService } from '../../services/property.service';
import { AuServiceService } from '../../services/au-service.service';


@Component({
  selector: 'app-view-properties',
  templateUrl: './view-properties.component.html',
  styleUrls: ['./view-properties.component.css']
})
export class ViewPropertiesComponent implements OnInit {

  public properties: Property[];

  public panelExpanded: boolean = true;

  constructor(
    private _properties: PropertyService,
    private Au: AuServiceService,
    ) { }

  ngOnInit() {

    this.Au.getProperties().subscribe(
      data => this.handleProperties(data),
      error => console.log(error)
    );

    this.properties = this._properties.getList();
  }

  handleProperties(properties){
    this.properties = properties.data;
  }



}