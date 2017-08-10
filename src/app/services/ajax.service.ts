import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AjaxService{
    url:string="app/data/dummyData.json";
    constructor(private http:Http){}
  
    getEmployees(){
        return this.http.get(this.url) //promise(it will make sure that, it'll return us something)
        .map((response:Response) => response.json());//covert promise into observable
    }
}// in call with family just 5 mins
//sorry man,, jus 5 mins

