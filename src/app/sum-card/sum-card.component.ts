import { Component, OnInit, Input } from "@angular/core";
import { VehiclesService } from "../Services/vehicles.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sum-card",
  templateUrl: "./sum-card.component.html",
  styleUrls: ["./sum-card.component.css"]
})
export class SumCardComponent implements OnInit {
  @Input() sumCard: any;

  constructor(
    private vehicleService: VehiclesService,
    private router: Router
  ) {}

  redirect() {
    this.router.navigate(["/vehicle", this.sumCard.id]);
  }

  ngOnInit() {
    console.log(this.sumCard);
  }
}
