import { Applications } from "./applications";
import { Auth } from "./auth";

class ClientFacade {
  constructor() {
    this.auth = new Auth();
    this.applications = new Applications();
  }
  applications: Applications;
  auth: Auth;
}

export const client = new ClientFacade();
