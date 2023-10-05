import { Auth } from "./auth";

class ClientFacade {
  constructor() {
    this.auth = new Auth();
  }

  auth: Auth;
}

export const client = new ClientFacade();
