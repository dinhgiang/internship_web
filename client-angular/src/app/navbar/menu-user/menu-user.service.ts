import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { getCookie } from "../../objects/Cookiee";
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class MenuUserService {
    constructor(private http: Http) { }

    getMessages() {
        console.log("da vao service lấy message")
        let userID = getCookie("userID")
        var url = 'http://' + myWebsiteDomain + '/user/messages/action=view/start=' + 1 + '/total=' + 10;
        // const body = JSON.stringify(value);
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => res.json());
    }
}