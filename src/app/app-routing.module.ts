import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InlineStyleComponent } from "./Components/inline-style/inline-style.component";
import { InlineStyleTemplateComponent } from "./Components/inline-style-template/inline-style-template.component";
import { InlineTemplateComponent } from "./Components/inline-template/inline-template.component";
import { TodoListComponent } from "./Components/todo-list/todo-list.component";
import { LoginComponent } from "./Components/user-auth-module/login/login.component";

const routes: Routes = [
	// STATIC ROUTING
	// { path: "inline-style", component: InlineStyleComponent },
	// { path: "inline-style-template", component: InlineStyleTemplateComponent },
	// { path: "inline-template", component: InlineTemplateComponent },
	// { path: "todo-list", component: TodoListComponent },
	// { path: "user-auth", component: LoginComponent },

	// STATIC ROUTING WITH TITLE
	{
		path: "inline-style",
		component: InlineStyleComponent,
		title: "App - Inline Style",
	},
	{
		path: "inline-style-template",
		component: InlineStyleTemplateComponent,
		title: "App - Inline Style Template",
	},
	{
		path: "inline-template",
		component: InlineTemplateComponent,
		title: "App - Inline Template",
	},
	{ path: "todo-list", component: TodoListComponent, title: "App - Todo List" },
	{
		path: "user-auth",
		component: LoginComponent,
		title: "App - Login Component",
	},

	// DYNAMIC ROUTING
	// { path: "home/:sId", component: LoginComponent },
	// { path: "about/:rId", component: TodoListComponent },
	// { path: "login/:dId", component: LoginComponent },
	// { path: "contact/:pId", component: TodoListComponent },

	// CHILD ROUTING
	// {
	// 	path: "childrouting",
	// 	component: TodoListComponent,
	// 	children: [
	// 		{ path: "about-style", component: InlineStyleComponent },
	// 		{ path: "about-template", component: InlineTemplateComponent },
	// 	],
	// },

	// LAZY LOADING
	// {
	// 	path: "admin",
	// 	loadChildren: () =>
	// 		import("../app/Modules/admin/admin.module").then(
	// 			(module) => module.AdminModule
	// 		),
	// },
	// {
	// 	path: "user",
	// 	loadChildren: () =>
	// 		import("../app/Modules/user/user.module").then(
	// 			(module) => module.UserModule
	// 		),
	// },

	// 404 ROUTING
	// { path: "**", redirectTo: "inline-style" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
