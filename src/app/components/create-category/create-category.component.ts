import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryRepository} from "../../repository/CategoryRepository";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  activityForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryRepository: CategoryRepository,
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
    await this.categoryRepository.addCategory(name)
    // await this.router.navigate(['/categories']);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/categories']);
    });

  }

}
