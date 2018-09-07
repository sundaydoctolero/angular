import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Property } from '../../models/property';
import { State } from '../../models/state';
import { PropertyType } from '../../models/property-type';
import { LookupService } from '../../services/lookup.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  @Input() form: Property;
   
  @Output() partial_form = new EventEmitter();
  

  

  public states: State[]; 

  public property_types: PropertyType[];

  constructor(
    private _lookup: LookupService
  ) { 
    this.partial_form.emit(this.partial_form);

  }

  ngOnInit() {
    this.states = this._lookup.getStatesLkp();
    this.property_types = this._lookup.getPropertyTypesLkp();
  }

  ngOnChanges(changes: SimpleChanges){
    
  }

}
