import axios from "axios";
import {User} from "../model/Models";
import {DefaultRepository} from "./DefaultRepository";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserRepository extends DefaultRepository{
    private readonly banRoleId = 2;
    constructor() {
      super()
    }

    public getUser(userId: string): Promise<User> {
        let endpoint = `${this.baseUrl}/users/${userId}`

        return axios.get(endpoint, {
            headers: {
              'uuid': `${this.token}`
            }
        });
    }

    public getUsers(): Promise<Array<User>>
    {
      let endpoint = `${this.baseUrl}/users/`

      return axios.get(endpoint, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((response) => {
        let users: Array<User> = response.data;

        users.forEach((user: User) => {
          user.isBanned = user.roles.findIndex((role) => {
            return role.name == "banned"
          }) != -1;
        })

        return users
      })
    }

    public banUser(user: User): void
    {
      let endpoint: string = `${this.baseUrl}/users/${user.email}/roles/${this.banRoleId}`

      axios.post(
        endpoint,
        {
          headers: {
            'uuid': `${this.token}`
          }
        }
      ).catch((reason) => {
        console.error(reason)
        //Afficher une erreur pour l'utilisateur
      })
      user.isBanned = true;

    }

    public restore(user: User): void
    {
      let endpoint: string = `${this.baseUrl}/users/${user.email}/roles/${this.banRoleId}`

      axios.delete(
        endpoint,
        {
          headers: {
            'uuid': `${this.token}`
          }
        }
      ).catch((reason) => {
        console.error(reason)
        //Afficher une erreur pour l'utilisateur
      })

      user.isBanned = false;
    }

}
