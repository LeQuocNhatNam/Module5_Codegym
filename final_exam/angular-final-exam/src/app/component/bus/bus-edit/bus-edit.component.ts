import {Component, OnInit} from '@angular/core';
import {Destination} from '../../../model/destination';
import {Departure} from '../../../model/departure';
import {DepartureService} from '../../../service/departure.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BusService} from '../../../service/bus.service';
import {DestinationService} from '../../../service/destination.service';
import Swal from 'sweetalert2';
import {BusTypeService} from '../../../service/bus-type.service';
import {BusType} from '../../../model/busType';

@Component({
  selector: 'app-bus-edit',
  templateUrl: './bus-edit.component.html',
  styleUrls: ['./bus-edit.component.css']
})
export class BusEditComponent implements OnInit {
  destinations: Destination[] = [];
  departures: Departure[] = [];
  busForm: FormGroup;
  id: number;
  busTypes?: BusType[];

  constructor(private departureService: DepartureService,
              private destinationService: DestinationService,
              private busService: BusService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private busTypeService: BusTypeService) {
  }

  ngOnInit(): void {
    this.departureService.getAllDepartures().subscribe(departures => {
      this.departures = departures;
      this.destinationService.getAllDestinations().subscribe(destinations => {
        this.destinations = destinations;
      });
      this.busTypeService.getAll().subscribe(busTypes => {
        this.busTypes = busTypes;
      });

      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = +paramMap.get('id');
        this.busService.findBusById(this.id).subscribe(bus => {
          bus.departure = this.departures.filter(item => item.id === bus.departure.id)[0];
          bus.destination = this.destinations.filter(item => item.id === bus.destination.id)[0];
          bus.busType = this.busTypes.filter(item => item.id === bus.busType.id)[0];
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
          this.busForm.patchValue(bus);
        });
      });
    });
  }

  editBus() {
    this.busService.editBus(this.id, this.busForm.value).subscribe(() => {
      Swal.fire({
        confirmButtonText: 'Done',
        title: 'Success',
        text: 'Edited Successfully',
        icon: 'success'
      });
      this.router.navigateByUrl('/buses');
    });
  }
}

