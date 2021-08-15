import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-covid-daily',
  templateUrl: './covid-daily.component.html',
  styleUrls: ['./covid-daily.component.scss']
})
export class CovidDailyComponent implements OnInit {

  _lists: any;
  _prov: any;

  constructor() { }

  ngOnInit() {
    this.getApi()
    this.getApiProvince()
  }

  //COVID-19 ประจำวัน
  getApi() {
    axios.get<resp>('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all').then(_ => {
      this._lists = _.data;
    }).catch(err => {
      console.error("error", err)
    })

  }

  //COVID-19 ประจำวัน แยกตามรายจังหวัด
  getApiProvince() {
    axios.get<respProv>('https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces').then(_ => {
      this._prov = _.data;
      console.warn("this._prov", this._prov);

    }).catch(err => {
      console.error("error", err)
    })

  }

}

export interface resp {
  txn_date: string
  new_case: number
  total_case: number
  update_date: Date
}

export interface respProv {
  txn_date: string
  province: string
  new_case: number
  total_case: number
  update_date: Date
}