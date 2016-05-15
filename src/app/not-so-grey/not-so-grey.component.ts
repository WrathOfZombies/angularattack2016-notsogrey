import {Component} from '@angular/core';
import {PathResolver} from '../shared/helpers/utilities';
import {ColorService} from '../shared/services/color.service';
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
    constructor(
        private _dribbbleService: DribbbleService,
        private _colorService: ColorService
    ) {
        // _dribbbleService.getShotsForColor('#FF4444')
        //     .then(results => console.log(results))
        //     .catch(error => console.error(error));

        {
            let color = w3color('#e6f3ff');
            console.log(color.toHexString(), color.toRgbString(), color.toHsl(), color.toCmykString());
        }

        {
            let color = w3color('rgb(102,184,255)');
            console.log(color.toHexString(), color.toRgbString(), color.toHsl(), color.toCmykString());
        }

        {
            let color = w3color('hsl(208, 100%, 95%)');
            console.log(color.toHexString(), color.toRgbString(), color.toHsl(), color.toCmykString());
        }
    }
}