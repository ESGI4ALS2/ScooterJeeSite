import { ScooterModel } from "../model/Models";
import axios from "axios";
import {DefaultRepository} from "./DefaultRepository";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ScooterRepository extends DefaultRepository {

  constructor() {
    super()
  }

  public add(modelName: string) {
    let endpoint: string = `${this.baseUrl}/models`
    axios.post(
      endpoint,
      {
        "name": modelName
      },
      {
        headers: {
          'uuid': `${this.token}`,
          'Content-Type': 'application/json'
        },
      }
    )
  }

  public list(): Promise<Array<ScooterModel>> {
    let endpoint: string = `${this.baseUrl}/models`

    return axios.get(
      endpoint,
      {
        headers: {
          'uuid': `${this.token}`
        }
      }
    ).then((response) => {

      return response.data
    })
  }

}
