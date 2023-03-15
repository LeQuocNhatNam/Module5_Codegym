import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../../service/facility/facility.service";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FacilityType} from "../../../model/facility/facility-type";
import {RentTypeService} from "../../../service/facility/rent-type.service";
import {RentType} from "../../../model/facility/rent-type";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityForm?: FormGroup;
  id: number;
  facilityTypes: FacilityType[];
  rentTypes: RentType[];

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get("id");
    })
    this.facilityTypeService.getAllFacilityTypes().subscribe(facilityTypes => {
      this.facilityTypes = facilityTypes;
      this.rentTypeService.getAllRentTypes().subscribe(rentTypes => {
        this.rentTypes = rentTypes;
      })
      this.facilityService.findFacilityById(this.id).subscribe(facility => {
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
        facility.rentType = this.rentTypes.filter(item => item.id === facility.rentType.id)[0];
        facility.facilityType = this.facilityTypes.filter(item => item.id === facility.facilityType.id)[0];
        this.facilityForm.patchValue(facility);
        // this.facilityForm = new FormGroup({
        //   name: new FormControl(facility.name, [Validators.required, Validators.pattern('^[^0-9]+$')]),
        //   area: new FormControl(facility.area, [Validators.min(10), Validators.required]),
        //   cost: new FormControl(facility.cost, [Validators.required, Validators.min(100000)]),
        //   maxPeople: new FormControl(facility.maxPeople, [Validators.required, Validators.min(1)]),
        //   rentType: new FormControl(this.rentTypes.find(item => item.id === facility.rentType.id), [Validators.required]),
        //   facilityType: new FormControl(facilityTypes.find(item => item.id === facility.facilityType.id), [Validators.required]),
        //   standardRoom: new FormControl(facility.standardRoom, [Validators.required]),
        //   otherConvenience: new FormControl(facility.otherConvenience, [Validators.required]),
        //   poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.min(0)]),
        //   numberOfFloors: new FormControl(facility.numberOfFloors, [Validators.required, Validators.min(1)]),
        //   freeFacility: new FormControl(facility.freeFacility, [Validators.required]),
        //   url: new FormControl(facility.url, Validators.required),
        // });
      })
    })
  }


}
