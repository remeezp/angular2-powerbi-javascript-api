import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';


import * as pbi from 'powerbi-client';

import { Reports } from './reports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: Window, useValue: window }]
})

export class AppComponent {


  @ViewChild('reportContainer')
  reportContainer: ElementRef;

  title = 'app works!';

  result: Array<pbi.IEmbedConfiguration>;

  models: any; // this is the powerbi models
  powerbi: any; // this is the powebi-client

  constructor(private http: Http) {
    this.models = window['powerbi-client'].models;
    this.powerbi = window['powerbi'];
  }

  ngAfterViewInit() {
    this.getEmbedDetails()
      .subscribe(
      success => {
        this.powerbi.embed(this.reportContainer['nativeElement'], this.result);
        console.log(this.result);
      }
      )
  }

  getReports() {
    this.http.get("http://localhost:3000/api/reports")
      .toPromise()
      .then(
      result => console.log(result.json())
      );
  }

  // replace <reportid> with your reportid
  getEmbedDetails(): Observable<pbi.IEmbedConfiguration> {
    return this.http
      .get("http://localhost:3000/api/reports/<reportid>")
      .map((res: Response) => this.result = res.json());
  }

}
