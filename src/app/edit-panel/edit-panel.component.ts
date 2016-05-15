import {Component} from '@angular/core';
import {PathResolver} from '../shared/helpers/utilities';

let view = 'edit-panel';
@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)],
    host: { 'class': 'col-xs-12 col-sm-4 col-md-5 nsg-panel edit-panel' }
})

export class EditPanelComponent {
    constructor() {

    }
}