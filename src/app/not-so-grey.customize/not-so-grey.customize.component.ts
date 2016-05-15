import {Component} from '@angular/core';
import {PathResolver} from '../shared/helpers/utilities';
import {OnActivate, Router, RouteSegment} from '@angular/router';

let view = 'not-so-grey.customize';

@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)],
    host: { 'class': 'nsg-choose col-xs-12' },
})

export class CustomizeComponent implements OnActivate {
    constructor(
        private _router: Router
    ) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let hex = +curr.getParam('hex');
        console.log(hex);
    }

    gotoHeroes() {
        this._router.navigate(['Choose']);
    }
}