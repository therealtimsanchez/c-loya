import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponentService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'c-loya';
  public data: any;


  constructor(private http: HttpClient, private service: AppComponentService) {
    this.service.getData().subscribe(response => {
      this.data = response;
      console.log(this.data);

    });

      }
}


