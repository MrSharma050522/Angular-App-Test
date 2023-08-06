import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminListComponent } from "src/app/Components/admin-list/admin-list.component";
import { AdminLoginComponent } from "src/app/Components/admin-login/admin-login.component";

const routes: Routes = [
	// Routing Module Path
	{
		path: "admin-login",
		component: AdminLoginComponent,
	},
	{
		path: "admin-list",
		component: AdminListComponent,
	},

	// Group Routing Module Path
	// {
	// 	path: "admin",
	// 	children: [
	// 		{
	// 			path: "login",
	// 			component: AdminLoginComponent,
	// 		},
	// 		{
	// 			path: "list",
	// 			component: AdminListComponent,
	// 		},
	// 	],
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
