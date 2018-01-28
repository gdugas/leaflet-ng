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

  private get fixPattern() {
    return '")marker-icon.png';
  }

  ngOnInit() {
    this.layer = L.marker(this.latlng);
    this.ngFix();
  }

  ngFix() {
    this.layer.on('add', () => {
      const htmlIcon = this.layer._icon;
      if (htmlIcon.src.endsWith(this.fixPattern)) {
        htmlIcon.src = htmlIcon.src.substr(0, htmlIcon.src.length - this.fixPattern.length);
      }
    });
  }

}
