import {environment} from "../../environments/environment";

export abstract class DefaultRepository{

  protected token: string;
  protected baseUrl: string;

  protected constructor() {
    this.token = environment.ADMIN_TOKEN
    this.baseUrl = environment.API_URL
  }

}
