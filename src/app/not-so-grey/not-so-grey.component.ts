import {Component} from '@angular/core';
import {PathResolver} from '../shared/utilities';

let view = 'not-so-grey';
@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)]
})

export class NotSoGreyComponent {
    constructor() {

    }
}