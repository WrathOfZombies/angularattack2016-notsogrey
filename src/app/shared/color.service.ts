import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {Utils} from './utilities';

export class IColor {
    HEX: string;
    HSL: string;
    RGB: string;
    RGBA: string;
    CYMK: string
}

export class ITheme {

}

export enum ColorDirectory {
    MostPopular,
    All,
    MostUsed,
    Search
}

@Injectable()
export class ColorService {
    private apiToken: string = '7810788A1CFDC3A717C58F96BC4DD8B4';

    constructor(private _http: Http) {
    }

    getThemesFromColor(color: IColor, page: number = 0) {
        let url = this._getUrl(ColorDirectory.Search, page, color);
        console.log(url);

        // return this._http.get(url, options)
        //     .map(response => {
        //         var themes = response.json();
        //         return themes as ITheme[];
        //     });
    }

    private _getUrl(mode: ColorDirectory, startIndex: number, color?: IColor): string {
        // https://color.adobe.com/api/v2/themes?filter=public&startIndex=792&maxNumber=36&sort=like_count&time=all
        // https://color.adobe.com/api/v2/search?startIndex=0&maxNumber=36&q=%7B%22term%22%3A%22%23FF4444%22%7D

        let baseUrl, location;

        switch (mode) {
            case ColorDirectory.Search:
                baseUrl = 'https://color.adobe.com/api/v2/@location?startIndex=@startIndex&maxNumber=36&q=%7B%22term%22%3A%22%23@color%22%7D';
                location = 'search';

                return Utils.replace(baseUrl)
                    ('@location', location)
                    ('@startIndex', startIndex.toString())
                    ('@color', color.HEX)
                    ();

            default:
                baseUrl = 'https://color.adobe.com/api/v2/@location?filter=@mode&startIndex=@startIndex&maxNumber=36&sort=@sort&time=@time';
                location = 'themes';

                let filter = 'public',
                    sort = 'like',
                    time = 'all';

                return Utils.replace(baseUrl)
                    ('@location', location)
                    ('@filter', filter)
                    ('@startIndex', startIndex)
                    ('@sort', sort)
                    ('@time', time)
                    ();
        }
    }
}