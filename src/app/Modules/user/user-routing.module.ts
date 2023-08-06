import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "src/app/Components/user-list/user-list.component";
import { UserLoginComponent } from "src/app/Components/user-login/user-login.component";

const routes: Routes = [
	// Routing Module Path
	{
		path: "user-login",
		component: UserLoginComponent,
	},{
		path: "user-list",
		component: UserListComponent,
	},

	// Group Routing Module Path
	// {
	// 	path: "user",
	// 	children: [
	// 		{
	// 			path: "login",
	// 			component: UserLoginComponent,
	// 		},
	// 		{
	// 			path: "list",
	// 			component: UserListComponent,
	// 		},
	// 	],
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserRoutingModule {}
