import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BusService} from '../../../service/bus.service';
import {BusTypeService} from '../../../service/bus-type.service';
import {DepartureService} from '../../../service/departure.service';
import {Route, Router} from '@angular/router';
import {BusType} from '../../../model/busType';
import {Destination} from '../../../model/destination';
import {Departure} from '../../../model/departure';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bus-create',
  templateUrl: './bus-create.component.html',
  styleUrls: ['./bus-create.component.css']
})
export class BusCreateComponent implements OnInit {
  destinations?: Destination[] = [];
  departures?: Departure[] = [];
  busForm?: FormGroup;
  busTypes?: BusType[];

  constructor(private busService: BusService,
              private busTypeService: BusTypeService,
              private departureService: DepartureService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.busTypeService.getAll().subscribe(busTypes => {
      this.busTypes = busTypes;
      this.departureService.getAllDepartures().subscribe(departures => {
        this.departures = departures;
        this.destinations = departures;
      });
      this.busForm = new FormGroup({
        code: new FormControl('', [Validators.required]),
        busType: new FormControl('', [Validators.required]),
        companyName: new FormControl('', [Validators.required]),
        departure: new FormControl('', [Validators.required]),
        destination: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^090[0-9]{7}$|^093[0-9]{7}$|^097[0-9]{7}$')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        // departureTime: new FormControl('', [Validators.required, Validators.pattern('^[0-1][0-9]:[0-5][0-9]$|^2[0-3]:[0-5][0-9]$')]),
        departureTime: new FormControl('', [Validators.required, Validators.pattern('^(0[5-9]|1[0-9]|2[0-2]):[0-5][0-9]$|^23:00$')]),
        arrivalTime: new FormControl('', [Validators.required, Validators.pattern('^(0[5-9]|1[0-9]|2[0-2]):[0-5][0-9]$|^23:00$')])
      });
    });
  }

  createBus() {
    this.busService.saveBus(this.busForm.value).subscribe(() => {
      console.log(this.busForm.value);
      Swal.fire({
        icon: 'success',
        text: 'successfully added',
        confirmButtonText: 'Done',
        title: 'Congratulations!'
      });
      this.router.navigateByUrl('/buses');
    });
  }
}
