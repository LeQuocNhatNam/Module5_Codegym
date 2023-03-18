import {Component, OnInit} from '@angular/core';
import {BusService} from '../../../service/bus.service';
import {Bus} from '../../../model/bus';
import Swal from 'sweetalert2';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  buses: Bus[] = [];
  idDelete: number;
  codeDelete: string;
  sort = true;
  page = 0;
  busPage?: any;

  constructor(private busService: BusService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.page = +paramMap.get('page');
    });
    this.getAllBuses();
  }

  getAllBuses() {
    this.busService.getAllBuses(this.page).subscribe(buses => {
      this.buses = buses.content;
      this.busPage = buses;
    });
  }

  getInfoDelete(id: number, code: string) {
    this.idDelete = id;
    this.codeDelete = code;
  }

  onDelete() {
    this.busService.deleteBus(this.idDelete).subscribe(() => {
      Swal.fire({
        confirmButtonText: 'Done',
        title: 'Success',
        text: 'You have successfully deleted ' + this.codeDelete,
        icon: 'success'
      });
      this.ngOnInit();
    });
  }

  // sortByDepartureTime() {
  //   if (this.sort) {
  //     this.busService.sortByDepartureTimeAsc().subscribe(buses => {
  //       this.buses = buses;
  //     });
  //   } else {
  //     this.busService.sortByDepartureTimeDesc().subscribe(buses => {
  //       this.buses = buses;
  //     });
  //   }
  //   this.sort = !this.sort;
  // }
}
