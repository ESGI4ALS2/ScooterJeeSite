import { Component, OnInit } from '@angular/core';
import {User} from "../../model/Models";
import {UserRepository} from "../../repository/UserRepository";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userRepository: UserRepository) { }

  async ngOnInit(): Promise<void> {
    this.users = await this.userRepository.getUsers();
  }

  async banUser(user: User): Promise<void> {
    await this.userRepository.banUser(user);
  }

  async restoreUser(user: User): Promise<void> {
    await this.userRepository.restore(user);
  }
}
