import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { TileLayerComponent } from './components/tile-layer/tile-layer.component';
import { MarkerComponent } from './components/marker/marker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MapComponent, TileLayerComponent, MarkerComponent],
  exports: [
    MapComponent,
    MarkerComponent,
    TileLayerComponent
  ]
})
export class LeafletModule {
}
