import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VehiclesService } from "../Services/vehicles.service";
import { NgxSpinner } from "ngx-spinner/lib/ngx-spinner.enum";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-vehicle",
  templateUrl: "./vehicle.component.html",
  styleUrls: ["./vehicle.component.css"]
})
export class VehicleComponent implements OnInit {
  info: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private vehiclesService: VehiclesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();

    this.activatedRoute.params.subscribe(params => {
      // console.log(params);
      this.info = this.vehiclesService.filterVehicleInformation(params.idCoche);
      // console.log(
      //   this.vehiclesService.filterVehicleInformation(params.idCoche)
      // );
      this.spinner.hide();
    });
  }
}
