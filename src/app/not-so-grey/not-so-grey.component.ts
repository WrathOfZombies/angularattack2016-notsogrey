import {Component} from '@angular/core';
import {PathResolver} from '../shared/helpers/utilities';
import {ColorService, ISwatch} from '../shared/services/color.service';
import {DribbbleService} from '../shared/services/dribbble.service';
import {ImagePanelComponent} from '../image-panel/image-panel.component';

let view = 'not-so-grey';
@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)],
    directives: [ImagePanelComponent]
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

        let color = w3color('#e6f3ff');
        console.log(color.toHexString(), color.toRgbString(), color.toHsl(), color.toCmykString());
    }
}