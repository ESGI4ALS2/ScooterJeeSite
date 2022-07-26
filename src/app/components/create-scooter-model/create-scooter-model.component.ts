import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ScooterRepository} from "../../repository/ScooterRepository";

@Component({
  selector: 'app-create-scooter-model',
  templateUrl: './create-scooter-model.component.html',
  styleUrls: ['./create-scooter-model.component.css']
})
export class CreateScooterModelComponent implements OnInit {

  activityForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private scooterRepository: ScooterRepository,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.activityForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    })
  }

  async onSubmitForm() {
    const {name} = this.activityForm.value;
    await this.scooterRepository.add(name)
    await this.router.navigate(['/scooter-models']);
  }

}
