import { 
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  OnInit,
  QueryList,
  ViewChild,
  Input,
  Output } from '@angular/core';

import * as L from 'leaflet';
import { TileLayerComponent } from '../tile-layer/tile-layer.component';
import { AbstractLayer } from '../../classes/abstract-layer.class';
import { MarkerComponent } from '../marker/marker.component';

@Component({
  selector: 'leaflet-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  @Input()
  center: L.LatLng = [0, 0];

  @Input()
  zoom = 1;

  @Output()
  centerChange: EventEmitter<L.LatLng> = new EventEmitter<L.LatLng>();

  @Output()
  load: EventEmitter<L.Map> = new EventEmitter<L.Map>();

  @Output()
  zoomChange: EventEmitter<number> = new EventEmitter<number>();


  @ContentChildren(MarkerComponent) markers: QueryList<AbstractLayer>;
  @ContentChildren(TileLayerComponent) tileLayers: QueryList<AbstractLayer>;

  @ViewChild('map') mapContainer: any;

  get map() {
    return this._map;
  }

  private _map;

  constructor() { }

  ngAfterViewInit(): void {
    this._map = L.map(this.mapContainer.nativeElement);
    this.handleMapEvents();
    this.initMapView();
    this.initMapLayers();
  }

  ngOnInit() {
  }

  initMapView() {
    this.map.setView(this.center, this.zoom);
  }

  initMapLayers() {
    this.markers.forEach((marker: AbstractLayer) => marker.addTo(this.map));
    this.tileLayers.forEach((tileLayer: AbstractLayer) => tileLayer.addTo(this.map));
  }

  handleMapEvents() {
    this.map.on('load', (evt: L.Event) => this.load.emit(this.map));
    this.map.on('move', (evt: L.Event) => this.centerChange.emit(this.map.getCenter()));
    this.map.on('zoom', (evt: L.Event) => this.zoomChange.emit(this.map.getZoom()));
  }

}
