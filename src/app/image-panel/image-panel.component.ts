declare var Vibrant: any;
import {Component} from '@angular/core';
import {ImageHelper} from '../shared/helpers/image.helper.ts';
import {PathResolver} from '../shared/helpers/utilities';

let view = 'image-panel';
@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)],
    host: {
        'class': 'image-panel'
    }
})

export class ImagePanelComponent {
    image: HTMLImageElement;
    swatches: any;

    fileSelection(event: DragEvent) {
        event.stopPropagation();
        event.preventDefault();

        let files = event.dataTransfer.files,
            file = _.first(files),
            reader = new FileReader();

        reader.onload = (e) => {
            processImage(e)
        };
        var parseFile = (theFile) => processImage;
        var data = reader.readAsDataURL(file);
        return processImage
    }

    fileSelectionComplete(event: DragEvent) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    }
}