import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SumCardComponent } from "./sum-card/sum-card.component";
import { SumCardHolderComponent } from "./sum-card-holder/sum-card-holder.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { VehicleComponent } from "./vehicle/vehicle.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    SumCardComponent,
    SumCardHolderComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
