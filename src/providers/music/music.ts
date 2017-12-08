// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API: string = "https://orangevalleycaa.org/api/music";

@Injectable()
export class MusicProvider {

  constructor(public http: Http) {
    console.log('Hello MusicProvider Provider');
  }

  getMusic() {
    return this.http.get(API).map(response => response.json());
  }

  getOneSong(){
    let oneSongUrl = API + "/qty/1";
    return this.http.get(oneSongUrl).map(response => response.json());
  }

}
