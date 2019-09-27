import { Component, OnInit } from "@angular/core";
import { VehiclesService } from "../Services/vehicles.service";

@Component({
  selector: "app-sum-card-holder",
  templateUrl: "./sum-card-holder.component.html",
  styleUrls: ["./sum-card-holder.component.css"]
})
export class SumCardHolderComponent implements OnInit {
  sumCardList: Array<any>;
  constructor(private vehicleService: VehiclesService) {}

  ngOnInit() {
    this.sumCardList = this.vehicleService.getVehicleInformation();
  }
}
