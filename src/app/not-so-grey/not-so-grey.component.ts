import {Component} from '@angular/core';
import {PathResolver} from '../shared/utilities';
import {ColorService} from '../shared/color.service';

let view = 'not-so-grey';
@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)]
})

export class NotSoGreyComponent {
    constructor(private _colorService: ColorService) {
        _colorService.getThemesFromColor({
            HEX: '#FF4444',
            CYMK: '',
            RGB: '',
            HSL: '',
            RGBA: ''
        }, 0);
    }
}