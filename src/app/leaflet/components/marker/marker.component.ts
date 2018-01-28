import { Component, Input, OnInit } from '@angular/core';
import { AbstractLayer } from '../../classes/abstract-layer.class';

import * as L from 'leaflet';

@Component({
  selector: 'leaflet-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css']
})
export class MarkerComponent extends AbstractLayer implements OnInit {

  @Input()
  latlng: L.LatLng;

  ngOnInit() {
    this.layer = L.marker(this.latlng);
  }

}
