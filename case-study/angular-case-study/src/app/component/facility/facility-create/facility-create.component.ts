import {Component, OnInit} from '@angular/core';
import {FacilityService} from "../../../service/facility/facility.service";
import {FacilityType} from "../../../model/facility/facility-type";
import {Facility} from "../../../model/facility/facility";
import {RentType} from "../../../model/facility/rent-type";
import {RentTypeService} from "../../../service/facility/rent-type.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityTypes: FacilityType[];
  facilities: Facility[];
  rentTypes: RentType[];
  facilityForm: FormGroup;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) {
  }

  ngOnInit(): void {
    this.getFacilityTypes();
    console.log(this.facilityTypes);
    this.getRentTypes();
    this.facilityForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern('^[^0-9]+$')]),
      area: new FormControl("", [Validators.min(10), Validators.required]),
      cost: new FormControl("",[Validators.required, Validators.min(100000)]),
      maxPeople: new FormControl("",[Validators.required,Validators.min(1)]),
      rentType: new FormControl("", [Validators.required]),
      facilityType: new FormControl("",[Validators.required]),
      standardRoom: new FormControl("",[Validators.required]),
      otherConvenience: new FormControl("",[Validators.required]),
      poolArea: new FormControl("",[Validators.required, Validators.min(0)]),
      numberOfFloors: new FormControl("",[Validators.required,Validators.min(1)]),
      freeFacility: new FormControl("",[Validators.required]),
      url: new FormControl("",Validators.required)
    })
  }

  getRentTypes() {
    this.rentTypeService.getAllRentTypes().subscribe(item => {
      this.rentTypes = item;
    })
  }

  getFacilityTypes() {
    this.facilityTypeService.getAllFacilityTypes().subscribe(item => {
      this.facilityTypes = item;
    })
  }
}
