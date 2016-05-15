import {Component} from '@angular/core';
import {PathResolver} from '../shared/helpers/utilities';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {ChooseComponent} from '../not-so-grey.choose/not-so-grey.choose.component';
import {CustomizeComponent} from '../not-so-grey.customize/not-so-grey.customize.component'
import {ColorService, ISwatch} from '../shared/services/color.service';

let view = 'not-so-grey';
@RouteConfig([
    {
        path: '/choose',
        name: 'Choose',
        component: ChooseComponent,
        useAsDefault: true
    },
    {
        path: '/customize/:hex',
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

    colors: ISwatch[];
    constructor(private _colorService: ColorService) {
        this.colors = [
            {
                name: "",
                mode: "",
                values: [22, 2, 3],
                hex: "#333333",
                colorIndex: '2'
            },
            {
                name: "",
                mode: "",
                values: [22, 2, 3],
                hex: "#333332",
                colorIndex: '2'
            },
            {
                name: "",
                mode: "",
                values: [22, 2, 3],
                hex: "#333312",
                colorIndex: '2'
            }
        ];

        console.log(this.colors);
    }
}