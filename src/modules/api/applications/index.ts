import { TDataWrapper } from "@/modules/models/api/util";
import { Service } from "../Service";
import { endpoints } from "../endpoints";
import {
  TApplicationResponse,
  TApplicationsResponse,
} from "@/modules/models/api/applications";
import { TCustommerResponse } from "@/modules/models/api/customers";

export class Applications extends Service {
  public getApplications() {
    return this.instance.get<TDataWrapper<TApplicationsResponse>>(
      endpoints.applications.getApplications
    );
  }
  public getApplication(id: number) {
    return this.instance.get<TDataWrapper<TApplicationResponse>>(
      `${endpoints.applications.getApplications}/${id}`
    );
  }
  public getCustomer(id: number) {
    return this.instance.get<TDataWrapper<TCustommerResponse>>(
      `${endpoints.customers.getCustomer}/${id}`
    );
  }
}
