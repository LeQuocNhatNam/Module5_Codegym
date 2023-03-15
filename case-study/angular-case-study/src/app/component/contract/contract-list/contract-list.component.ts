import {Component, OnInit} from '@angular/core';
import {Contract} from "../../../model/contract/contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[] = [{
    id: 1,
    deposit: 0,
    startDate: '2020-12-18',
    endDate: '2020-12-19',
    customer: {id: 'KH-1123', name: 'Nguyễn Văn A'},
    facility: {id: 3, name: 'House'}
  },{
    id: 2,
    deposit: 0,
    startDate: '2020-12-18',
    endDate: '2020-12-19',
    customer: {id: 'KH-1124', name: 'Nguyễn Văn A'},
    facility: {id: 3, name: 'House'}
  },{
    id: 3,
    deposit: 0,
    startDate: '2020-12-18',
    endDate: '2020-12-19',
    customer: {id: 'KH-1125', name: 'Nguyễn Văn A'},
    facility: {id: 3, name: 'House'}
  },{
    id: 4,
    deposit: 200,
    startDate: '2020-12-18',
    endDate: '2020-12-19',
    customer: {id: 'KH-1126', name: 'Nguyễn Văn A'},
    facility: {id: 3, name: 'House'}
  },];

  constructor() {
  }

  ngOnInit(): void {
  }

}
