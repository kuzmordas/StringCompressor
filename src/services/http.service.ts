import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    postData(s: string, url: string){
        return this.http.post(url, { value: s });
    }
}