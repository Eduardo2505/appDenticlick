import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class VarGlobalesProvider {

  public ulr: string;

  constructor(public http: Http) {
     //this.ulr = "http://127.0.0.1/Ave";
    this.ulr="http://adminave.pvessy.com/Ave";
  }

}
