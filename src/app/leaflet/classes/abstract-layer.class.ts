import { Layer } from '../interfaces/layer.interface';
import * as L from 'leaflet';

export abstract class AbstractLayer implements Layer {
    protected layer: L.LayerGroup|L.Map;
    addTo(parentLayer: L.LayerGroup|L.Map) {
        if (this.layer) {
            this.layer.addTo(parentLayer);
        }
    }
}