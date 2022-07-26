import { Component, OnInit } from '@angular/core';
import { ScooterModel } from "../../model/Models";
import { ScooterRepository } from "../../repository/ScooterRepository";

@Component({
  selector: 'app-scooter-models',
  templateUrl: './scooter-models.component.html',
  styleUrls: ['./scooter-models.component.css']
})
export class ScooterModelsComponent implements OnInit {
  models: Array<ScooterModel> = [];

  constructor(
    private scooterRepository: ScooterRepository
  ) { }

  async ngOnInit(): Promise<void> {
    this.models = await this.scooterRepository.list()
    /*this.categories = [
      { id: 1, name:"Les pneus" },
      { id: 2, name:"Les pneus" },
      { id: 3, name:"Les pneus" },
      { id: 4, name:"Les pneus" },
    ]*/
  }

  async remove(model: ScooterModel): Promise<void> {
    // await this.categoryRepository.deleteCategory(category);
    this.models.splice(
      this.models.findIndex(item => item.id === model.id),
      1
    )
  }

}
