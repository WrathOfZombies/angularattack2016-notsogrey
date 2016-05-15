declare var Vibrant: any;
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImageHelper {
    constructor(private _http: Http) {

    }

    processImage(image: HTMLImageElement) {
        var vibrant = new Vibrant(image);
        var swatches = vibrant.swatches();
        var output = [];
        _.each(swatches, (swatch: any) => {
            if (swatch) {
                var color = w3color('rgb(' + swatch.rgb[0] + ',' + swatch.rgb[1] + ',' + swatch.rgb[2] + ')');
                output.push(color);
            }
        });

        return output;
    }

    drawImageScaled(image: HTMLImageElement, canvas: HTMLCanvasElement) {
        var context = canvas.getContext('2d');
        var hRatio = canvas.width / image.width;
        var vRatio = canvas.height / image.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerX = (canvas.width - image.width * ratio) / 2;
        var centerY = (canvas.height - image.height * ratio) / 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
            image, 0, 0, image.width, image.height,
            centerX, centerY, image.width * ratio, image.height * ratio
        );
    }    
}