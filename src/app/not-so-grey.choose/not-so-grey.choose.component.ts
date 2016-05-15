import {Component, ElementRef, OnInit} from '@angular/core';
import {ImageHelper} from '../shared/helpers/image.helper';
import {PathResolver} from '../shared/helpers/utilities';
import {DeviceHelper} from '../shared/helpers/device.helper';

let view = 'not-so-grey.choose';

@Component({
    selector: view,
    templateUrl: PathResolver.resolveViewPath(view),
    styleUrls: [PathResolver.resolveStylesPath(view)],
    host: { 'class': 'nsg-choose col-xs-12' },
})

export class ChooseComponent {
    isLoaded: boolean;
    image: HTMLImageElement;
    swatches: any;

    private _container: any;

    constructor(
        private _element: ElementRef,
        private _imageHelper: ImageHelper,
        private _deviceHelper: DeviceHelper
    ) { }

    ngOnInit() {
        this._deviceHelper.windowUpdated$.subscribe(resize => this.resizeCanvas());
        this.resizeCanvas();
    }

    drop(event: DragEvent) {
        event.stopPropagation();
        event.preventDefault();
        
        console.log(JSON.stringify(event.dataTransfer.types));
        let file = event.dataTransfer.files[0];
        this.isLoaded = false;
        console.log(this);

        if (file) {
            console.log(file);
            let reader = new FileReader();
            let data = reader.readAsDataURL(file);

            reader.onload = (event: Event) => {
                this.image = new Image();
                let target = event.target as any;

                this.image.src = target.result;
                this.image.onload = (event: Event) => {
                    var canvas = this._element.nativeElement.querySelector('canvas') as HTMLCanvasElement;
                    this._imageHelper.drawImageScaled(this.image, canvas);
                    this.isLoaded = true;
                    console.log(this);
                }

                this._imageHelper.processImage(this.image);
            };
        }
    }

    dragOver(event: DragEvent) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    }

    resizeCanvas() {
        var container = this._element.nativeElement as HTMLElement;
        var dropContainer = container.querySelector('#drop') as HTMLElement;
        var canvas = dropContainer.querySelector('canvas') as HTMLCanvasElement;

        canvas.width = dropContainer.clientWidth;
        canvas.height = dropContainer.clientHeight;

        if (this.image) {
            this._imageHelper.drawImageScaled(this.image, canvas);
        }
    }
}