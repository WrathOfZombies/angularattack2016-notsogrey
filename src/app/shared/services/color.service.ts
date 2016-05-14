import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Utils} from '../helpers/utilities';

export interface IThemesCollection {
    themes: ITheme[],
    totalCount: number
}

export interface ITheme {
    author: {
        id: string,
        name: string
    },
    comment: { count: number },
    createdAt: Date,
    tags: { value: string }[]
    description: string,
    harmony: {
        baseSwatchIndex: number,
        rule: string,
        sourceURL: string,
        mood: string
    },
    href: string
    originalTheme: string,
    access: { visibility: string },
    like: { count: number },
    view: { count: number },
    rating: {
        count: number,
        overall: number
    },
    iccProfile: string,
    swatches: ISwatch[]
    name: string,
    id: string,
    editedAt: Date
}

export interface ISwatch {
    name: string,
    mode: string,
    values: number[],
    hex: string,
    colorIndex: string
}

export enum ColorDirectory {
    MostPopular,
    All,
    MostUsed
}

@Injectable()
export class ColorService {
    private _apiToken: string = '7810788A1CFDC3A717C58F96BC4DD8B4';

    constructor(private _http: Http) {
    }

    getThemesFromColor(hexCode: string, page: number = 0, count: number = 36): Promise<IThemesCollection> {
        let url = this._getSearchUrl(hexCode, page, count),
            headers = new Headers({
                apiToken: this._apiToken,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }),
            options = new RequestOptions({ headers: headers });

        return this._http.get(url, options)
            .toPromise()
            .then(response => { return response.json() as IThemesCollection; })
            .catch(error => { throw new Error('Unable to get swatches. Please try again later.'); });
    }

    private _getSearchUrl(hexCode: string, startIndex: number, count: number): string {
        let baseUrl = 'https://color.adobe.com/api/v2/@location?startIndex=@startIndex&maxNumber=@count&q=%7B%22term%22%3A%22%23@color%22%7D',
            location = 'search';

        return Utils.replace(baseUrl)
            ('@location', location)
            ('@startIndex', startIndex.toString())
            ('@count', count.toString())
            ('@color', hexCode)
            ();
    }

    private _getDirectoryUrl(mode: ColorDirectory, startIndex: number, count: number): string {
        // https://color.adobe.com/api/v2/themes?filter=public&startIndex=792&maxNumber=36&sort=like_count&time=all
        // https://color.adobe.com/api/v2/search?startIndex=0&maxNumber=36&q=%7B%22term%22%3A%22%23FF4444%22%7D

        let baseUrl, location;

        switch (mode) {
            default:
                baseUrl = 'https://color.adobe.com/api/v2/@location?filter=@mode&startIndex=@startIndex&maxNumber=@count&sort=@sort&time=@time';
                location = 'themes';

                let filter = 'public',
                    sort = 'like',
                    time = 'all';

                return Utils.replace(baseUrl)
                    ('@location', location)
                    ('@filter', filter)
                    ('@startIndex', startIndex.toString())
                    ('@count', count.toString())
                    ('@sort', sort)
                    ('@time', time)
                    ();
        }
    }
}