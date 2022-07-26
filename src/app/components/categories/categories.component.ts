import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/Models";
import {CategoryRepository} from "../../repository/CategoryRepository";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: [
    './categories.component.css'
  ]
})
export class CategoriesComponent implements OnInit {
  categories: Array<Category> = [];

  constructor(
    private categoryRepository: CategoryRepository
  ) { }

  async ngOnInit(): Promise<void> {
    this.categories = await this.categoryRepository.listCategory()
    /*this.categories = [
      { id: 1, name:"Les pneus" },
      { id: 2, name:"Les pneus" },
      { id: 3, name:"Les pneus" },
      { id: 4, name:"Les pneus" },
    ]*/
  }

  async remove(category: Category): Promise<void> {
    // await this.categoryRepository.deleteCategory(category);
    this.categories.splice(
      this.categories.findIndex(item => item.id === category.id),
      1
    )
  }

}
