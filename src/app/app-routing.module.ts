import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SumCardHolderComponent } from "./sum-card-holder/sum-card-holder.component";
import { VehicleComponent } from "./vehicle/vehicle.component";

const routes: Routes = [
  { path: "", component: SumCardHolderComponent },
  { path: "vehicle/:idCoche", component: VehicleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
