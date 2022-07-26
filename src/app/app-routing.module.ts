import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./components/users/users.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { CreateCategoryComponent } from "./components/create-category/create-category.component";
import {ScooterModelsComponent} from "./components/scooter-models/scooter-models.component";
import {CreateScooterModelComponent} from "./components/create-scooter-model/create-scooter-model.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'create-category', component: CreateCategoryComponent},
  { path: 'scooter-models', component: ScooterModelsComponent},
  { path: 'create-scooter-model', component: CreateScooterModelComponent},
  { path: '', redirectTo: 'users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
