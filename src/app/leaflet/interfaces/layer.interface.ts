import * as L from 'leaflet';

export interface Layer {
    addTo(layer: L.LayerGroup|L.Map);
}