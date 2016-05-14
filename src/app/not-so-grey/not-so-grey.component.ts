import {Component} from '@angular/core';
import {PathResolver} from '../shared/helpers/utilities';
import {ColorService} from '../shared/services/color.service';

let view = 'not-so-grey';
@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)]
})

export class NotSoGreyComponent {
    constructor(private _colorService: ColorService) {
        _colorService.getThemesFromColor('FF4444')
            .then((collection) => {
                console.log(collection.totalCount);
                console.log(_.first(collection.themes).swatches);
            })
            .catch(exception => { console.error(exception); });
    }
}