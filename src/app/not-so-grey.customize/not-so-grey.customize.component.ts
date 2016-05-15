import {Component} from '@angular/core';
import {PathResolver} from '../shared/helpers/utilities';

let view = 'not-so-grey.customize';

@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)],
    host: { 'class': 'nsg-choose col-xs-12' },
})

export class CustomizeComponent {
    constructor() {
    }
}