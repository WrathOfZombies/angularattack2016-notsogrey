import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Utils} from '../helpers/utilities';

export interface IShot {
    id: number;
    title: string;
    path: string;
    created_at: string;
    is_rebound: boolean;
    rebounds_count: number;
    attachments_count: number;
    view_count: number;
    comments_count: number;
    likes_count: number;
    liked: boolean;
    liked_by_html: boolean;
    ga: any[];
}

@Injectable()
export class DribbbleService {
    constructor(private _http: Http) {

    }

    getShotsForColor(hexCode: string, page: number = 0, count: number = 12): Promise<IShot[]> {
        let url = this._getSearchUrl(hexCode, page, count);
        return this._http.get(url)
            .toPromise()
            .then(response => {
                let html = response.text(),
                    regex = /newestShots =([{[\s\S]*}])[,\s\S]*?;\n/gim,
                    results = html.match(regex);

                let data = Utils.replace(_.first(results))
                    ('newestShots = ', '')
                    ('}];', '}]')
                    ();

                return eval(data) as IShot[] //Bad but have no choice;
            })
            .catch(error => {
                console.log(error);
                throw new Error('Unable to get shots from Dribbble. Please try again later.');
            });
    }

    private _getSearchUrl(hexCode: string, startIndex: number, count: number): string {
        let corsUrl = 'https://crossorigin.me/',
            baseUrl = corsUrl + 'https://www.dribbble.com/colors/@color?page=@startIndex&per_page=@count';

        return Utils.replace(baseUrl)
            ('@startIndex', startIndex.toString())
            ('@count', count.toString())
            ('@color', hexCode)
            ();
    }
}