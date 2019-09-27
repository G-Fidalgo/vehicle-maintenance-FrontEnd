import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { vehiclesInfo } from "../../assets/mocks/vehicle-info.mock";

@Injectable({
  providedIn: "root"
})
export class VehiclesService {
  constructor(private http: HttpClient) {}

  public getVehicleInformation(): Array<any> {
    return vehiclesInfo;
  }

  async filterVehicleInformation(id) {
    // console.log(vehiclesInfo.filter(vehicle => vehicle.id === Number(id)));

    let payload = vehiclesInfo.filter(vehicle => vehicle.id === Number(id));

    return payload[0];
  }
}
