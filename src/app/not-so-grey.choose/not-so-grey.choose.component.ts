import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
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

export class ChooseComponent implements OnInit {
    isLoaded: boolean;
    image: HTMLImageElement;
    swatches: any;

    private _container: any;

    constructor(
        private _element: ElementRef,
        private _imageHelper: ImageHelper,
        private _deviceHelper: DeviceHelper,
        private _router: Router
    ) { }

    ngOnInit() {
        this._deviceHelper.windowUpdated$.subscribe(resize => this.resizeCanvas());
        this.resizeCanvas();
    }

    drop(event: DragEvent) {
        event.stopPropagation();
        event.preventDefault();

        var types = JSON.stringify(event.dataTransfer.types);
        if (types.indexOf('Files') !== -1) {
            let file = event.dataTransfer.files[0];
            if (file) {
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
                        this.swatches = this._imageHelper.processImage(this.image);
                    }
                };
            }
        }
    }

    displayImage(link: string) {
        this.image = new Image();
        this.image.src = link;
        this.image.onload = (event: Event) => {
            try {
                var canvas = this._element.nativeElement.querySelector('canvas') as HTMLCanvasElement;
                this._imageHelper.drawImageScaled(this.image, canvas);
                this.isLoaded = true;
                this.swatches = this._imageHelper.processImage(this.image);
            }
            catch (e) {

            }
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

    select(swatch: w3color) {
        this._router.navigate(['Customize', { hex: swatch.toHexString().replace('#', '') }]);
    }
}