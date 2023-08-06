import { Component } from "@angular/core";
import { UsersDataService } from "src/app/Services/users-data.service";

@Component({
	selector: "app-post-api",
	templateUrl: "./post-api.component.html",
	styleUrls: ["./post-api.component.css"],
})
export class PostApiComponent {
	constructor(private userDataApi: UsersDataService) {}
	getUserFormData(data: any) {
		this.userDataApi.saveData(data).subscribe((res) => {
			console.log("res",res);
		});
	}
}
