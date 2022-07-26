import {Category} from "../model/Models";
import axios from "axios";
import {DefaultRepository} from "./DefaultRepository";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CategoryRepository extends DefaultRepository{

  constructor() {
    super()
  }

  public addCategory(categoryName: string): void
  {
    let endpoint: string = `${this.baseUrl}/categories`
    axios.post(
      endpoint,
      {
        "name": categoryName
      },
      {
        headers: {
          'uuid': `${this.token}`,
          'Content-Type': 'application/json'
        },
      }
    )
  }

  public listCategory(): Promise<Array<Category>> {
    let endpoint: string = `${this.baseUrl}/categories`

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

  public deleteCategory(category: Category): void {
    let endpoint: string = `${this.baseUrl}/categories/${category.id}`

    axios.delete(
      endpoint,
      {
        headers: {
          'uuid': `${this.token}`
        }
      }
    )
  }



}
