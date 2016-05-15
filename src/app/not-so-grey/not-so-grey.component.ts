import {Component, enableProdMode} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ChooseComponent} from '../not-so-grey.choose/not-so-grey.choose.component';
import {CustomizeComponent} from '../not-so-grey.customize/not-so-grey.customize.component';
import {PathResolver} from '../shared/helpers/utilities';

enableProdMode();

let view = 'not-so-grey';
@RouteConfig([
    {
        path: '/choose',
        name: 'Choose',
        component: ChooseComponent,
        useAsDefault: true                
    },
    {
        path: '/customize',
        name: 'Customize',
        component: CustomizeComponent
    }
])

@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)],
    host: { 'class': 'not-so-grey' },
    directives: [ROUTER_DIRECTIVES]
})

export class NotSoGreyComponent {
    constructor() {
        
    }
}