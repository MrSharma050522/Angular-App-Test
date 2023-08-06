import {
	Component,
	ComponentFactoryResolver,
	ViewContainerRef,
} from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { ServiceService } from "./Services/service.service";
import {
	UsersDataService,
	dataTypeOfUserData,
} from "./Services/users-data.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	title = "Angular App";

	// ------------------------
	// LAZY LOADING COMPONENT
	// constructor(
	// 	private viewContainer: ViewContainerRef,
	// 	private componentFtrReslvr: ComponentFactoryResolver
	// ) {}

	// async loadAdminHandler() {
	// 	this.viewContainer.clear();
	// 	const { AdminListComponent } = await import(
	// 		"../app/Components/admin-list/admin-list.component"
	// 	);
	// 	this.viewContainer.createComponent(
	// 		this.componentFtrReslvr.resolveComponentFactory(AdminListComponent)
	// 	);
	// }
	// async loadUserHandler() {
	// 	this.viewContainer.clear();
	// 	const { UserListComponent } = await import(
	// 		"../app/Components/user-list/user-list.component"
	// 	);
	// 	this.viewContainer.createComponent(
	// 		this.componentFtrReslvr.resolveComponentFactory(UserListComponent)
	// 	);
	// }

	// ------------------------
	// MODAL
	// getDataForModal() {
	// 	const user: dataTypeOfUserData = {
	// 		name: "Sandeep Sharma",
	// 		age: 24,
	// 		indian: true,
	// 		address: "HSR Layout",
	// 	};
	// 	return user;
	// }

	// ------------------------
	// API CALLING
	// usersApiData: any = [];
	// constructor(private userDataApi: UsersDataService) {
	// 	userDataApi.users().subscribe((data) => {
	// 		console.log(data);
	// 		this.usersApiData = data;
	// 	});
	// }

	// ------------------------
	// SERVICES
	// constructor(private serviceData: ServiceService) {
	// 	console.log(serviceData.userDummyData());
	// 	this.objectArray = serviceData.userDummyData();
	// }

	// ------------------------
	// REACTIVE FORM & VALIDATIONS
	// reactiveLoginForm = new FormGroup({
	// 	user: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]+$")]), //[Validators.required,Validators.email]
	// 	password: new FormControl("",[Validators.required,Validators.minLength(5)]),
	// });
	// submitFormHandler(){
	// 	console.log(this.reactiveLoginForm.value );
	// }
	// get userValidation(){
	// 	return this.reactiveLoginForm.get("user")
	// }
	// get passwordValidation(){
	// 	return this.reactiveLoginForm.get("password")
	// }

	// ------------------------
	// TEMPLATE FORM
	// userLogin(item: any) {
	// 	console.log(item);
	// }

	// ------------------------
	// today = Date();
	// user = {
	// 	name: "Sandeep Sharma",
	// 	age: 23,
	// };

	// variable1 = "";
	// variable2 = "";

	// ------------------------
	// BASIC TYPESCRIPT FOR ANGULAR
	// STRING, NUMBER, BOOLEAN, OBJECT
	// data: { name: string; age: number; skill: string[] } = {
	// 	name: "Sandeep",
	// 	age: 123,
	// 	skill: ["java", "js"],
	// };
	// getItem(item: string[]) {
	// 	console.log(item);
	// }
	// printItme() {
	// 	this.getItem(["js", "java", "number"]);
	// }

	// ------------------------

	// sharingData: any = 100;
	// updateDataHandler = (value: any) => {
	// 	console.log(value);
	// 	this.sharingData = value;
	// };

	// ------------------------

	// itemList: any = [];
	// addTaskHandler = (item: string) => {
	// 	this.itemList.push({ id: this.itemList.length, item: item });
	// };
	// deleteTaskHandler = (id: number) => {
	// 	this.itemList = this.itemList.filter((el: any) => el.id !== id);
	// };

	// ------------------------

	// userData: any = [];
	// formSubmitHandler(data: NgForm) {
	// 	console.log(data);
	// 	this.userData.push(data);
	// }

	// ------------------------

	// array = [1, 2, 3, 4, 5];
	// objectArray: any = [
	// 	{
	// 		name: "Sandeep Sharma",
	// 		age: 23,
	// 		skills: ["Java", "Html", "Css", "React", "Mern", "Mean"],
	// 	},
	// 	{
	// 		name: "Shubham Maurya",
	// 		age: 21,
	// 		skills: ["Java", "Html", "Css", "Python", "Mern", "Mean"],
	// 	},
	// 	{
	// 		name: "Ashish Maurya",
	// 		age: 24,
	// 		skills: ["Java", "Sql", "Css", "React", "Mern", "Mean"],
	// 	},
	// 	{
	// 		name: "Deepak Pancholi",
	// 		age: 25,
	// 		skills: ["Java", "Html", "Css", "React", "Mern", "MeDjan"],
	// 	},
	// ];

	// ------------------------

	// color = "red";
	// colorToggleHandler() {
	// 	this.color === "red"
	// 		? (this.color = "blue")
	// 		: this.color === "green"
	// 		? (this.color = "yellow")
	// 		: this.color == "blue"
	// 		? (this.color = "green")
	// 		: this.color == "yellow"
	// 		? (this.color = "orange")
	// 		: (this.color = "red");
	// }

	// ------------------------

	// disable = "yes";
	// disableToggleHandler() {
	// 	this.disable === "yes" ? (this.disable = "no") : (this.disable = "yes");
	// }

	// ------------------------

	// name = "";
	// getNameValue(value: string) {
	// 	console.log(value);
	// 	this.name = value;
	// }

	// ------------------------

	// getData() {
	// 	console.warn("Data is fetched");
	// }
	// inputEventHandler(value: string) {
	// 	console.log(value);
	// }

	// -------------------------------

	// count = 0;
	// countHandler(type: string) {
	// 	type === "+" ? this.count++ : this.count--;
	// }
	// incrementHandler() {
	// 	if (this.count >= 1000) {
	// 		return;
	// 	}
	// 	this.count++;
	// 	// this.count += 1;
	// }
	// decrementHandler() {
	// 	if (this.count === 0) {
	// 		return;
	// 	}
	// 	this.count--;
	// 	// this.count -= 1;
	// }
	// promptHandler(value: string, num: number) {
	// 	alert(`Mai Danger se nhi darta ${value} ${num} bhi pass kia`);
	// }
}
