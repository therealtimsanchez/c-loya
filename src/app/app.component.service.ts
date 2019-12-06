import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AppComponentService {
  public audits: any;
  private url = 'https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=34160864';


  //Adding comment



  constructor(private http: HttpClient) {

  }


    getData() {
      return this.http.get(this.url);
    }


}


