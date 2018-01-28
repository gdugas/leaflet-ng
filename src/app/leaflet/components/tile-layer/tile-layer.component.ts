import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { AbstractLayer } from '../../classes/abstract-layer.class';

@Component({
  selector: 'leaflet-tile-layer',
  templateUrl: './tile-layer.component.html',
  styleUrls: ['./tile-layer.component.css']
})
export class TileLayerComponent extends AbstractLayer implements OnInit {

  @Input()
  url = '';

  @Input()
  options: L.TileLayerOptions = {};

  ngOnInit() {
    this.layer = L.tileLayer(this.url, this.options);
  }

}
