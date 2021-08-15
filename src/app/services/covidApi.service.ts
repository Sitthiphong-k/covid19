import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor() { }

  public getDailyCovid() {
    debugger
    let _data;

    axios.get<resp>('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all').then(_ => {
      _data = _.data;
    }).catch(err => {
      _data = console.error("error", err)
    })

    return _data;
  }

}

export interface resp {
  txn_date: string
  new_case: number
  total_case: number
  update_date: Date
}

