import {Component} from '@angular/core';
import {PathResolver} from '../shared/helpers/utilities';
import {ColorService, ISwatch} from '../shared/services/color.service';

let view = 'not-so-grey';
@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)]
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