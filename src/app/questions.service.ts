import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceQuestion {
    public dataQuestion: any = [];

    public url: string = 'https://theimdbapi.org/api/person?person_id=nm0000121';
    constructor(private _http: Http) {
        this.getQuestion();
    }
    
    public getQuestion() {
        return this._http.get(this.url)
        .map((res: Response) => res.json());
    }
}

