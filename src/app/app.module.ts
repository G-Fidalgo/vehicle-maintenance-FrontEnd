import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SumCardComponent } from './sum-card/sum-card.component';
import { SumCardHolderComponent } from './sum-card-holder/sum-card-holder.component';

@NgModule({
  declarations: [AppComponent, SumCardComponent, SumCardHolderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
