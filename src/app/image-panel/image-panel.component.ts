import {Component, ElementRef} from '@angular/core';
import {ImageHelper} from '../shared/helpers/image.helper';
import {PathResolver} from '../shared/helpers/utilities';

let view = 'image-panel';
@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)],
    host: { 'class': 'image-panel' }
})

export class ImagePanelComponent {
    image: HTMLImageElement;
    swatches: any;

    private _container: any;

    constructor(
        private _element: ElementRef,
        private _imageHelper: ImageHelper) {
    }

    drop(event: DragEvent) {
        event.stopPropagation();
        event.preventDefault();

        let file = event.dataTransfer.files[0];
        if (file) {
            let reader = new FileReader();
            let data = reader.readAsDataURL(file);
            reader.onload = (event: Event) => {
                let image = new Image(),
                    target = event.target as any;

                image.src = target.result;
                image.onload = (event: Event) => {
                    var canvas: HTMLCanvasElement = this._element.nativeElement.querySelector('canvas');
                    this._imageHelper.drawImageScaled(image, canvas);
                }
                this._imageHelper.processImage(image);
            };
        }
    }

    dragOver(event: DragEvent) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    }
}