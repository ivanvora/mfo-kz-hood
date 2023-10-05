import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import { envs } from "../config/app";

export abstract class Service {
  constructor(config?: CreateAxiosDefaults) {
    this.instance = axios.create({
      baseURL: envs.hosts.auth,
      timeout: 90000,
      ...config,
    });
  }
  instance: AxiosInstance;
}
