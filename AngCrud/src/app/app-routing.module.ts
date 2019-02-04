import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerListComponent } from "src/app/customer-list/customer-list.component";
import { CustomerComponent } from "src/app/customer/customer.component";

const routes: Routes = [
  { path: "", redirectTo: "header", pathMatch: "full" },
  { path: "**", redirectTo: "header" },
  { path: "custumer-list", component: CustomerListComponent },
  { path: "form", component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
