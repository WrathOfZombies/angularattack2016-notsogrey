import {Component, OnInit, ElementRef} from '@angular/core';
import {PathResolver} from '../shared/helpers/utilities';
import {ColorService} from '../shared/services/color.service';
import {RouteParams} from '@angular/router-deprecated';

let view = 'not-so-grey.customize';
@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)],
    host: { 'class': 'nsg-choose col-xs-12' },
})


export class CustomizeComponent implements OnInit {
    private container;
    selectedColor: w3color;
    modifiedColor: w3color;
    lightnessBand: w3color[];

    constructor(
        private _routeParams: RouteParams,
        private _elementRef: ElementRef,
        private _colorService: ColorService
    ) {

    }

    ngOnInit() {
        var hex = this._routeParams.get('hex');
        this.selectedColor = w3color('#' + hex);
        this.lightnessBand = this.generateLightnessBand(w3color(this.selectedColor.toHexString()));
        this.modifiedColor = this.selectedColor;        
    }

    generateLightnessBand(color: w3color) {
        var band: w3color[] = [];
        while (color.lightness !== 1) {
            color.lighter(10);
        }
        
        band.push(w3color(color.toHexString()));

        while (color.lightness !== 0) {
            color.darker(10);
            band.push(w3color(color.toHexString()));
        }

        return band;
    }

    selectColor(color: w3color) {
        this.selectedColor = color;
        this.generateLightnessBand(w3color(this.selectedColor.toHexString()));
    }
}