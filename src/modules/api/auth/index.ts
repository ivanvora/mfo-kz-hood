import { Service } from "../Service";
import { endpoints } from "../endpoints";
import { TLoginRequest } from "@/modules/models/api/auth";

export class Auth extends Service {
  public login(p: TLoginRequest) {
    return this.instance.post(endpoints.auth.login, p);
  }
  public getProfileInfo() {
    return this.instance.post(endpoints.auth.info);
  }
}
