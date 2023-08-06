import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceService } from "src/app/Services/service.service";
import { UsersDataService } from "src/app/Services/users-data.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	usersApiData: any = [];
	objectArray: any = [];
	constructor(
		private route: ActivatedRoute,
		private serviceData: ServiceService,
		private userDataApi: UsersDataService
	) {
		// console.log(serviceData.userDummyData());
		this.objectArray = serviceData.userDummyData();
		userDataApi.users().subscribe((data) => {
			this.objectArray = data;
		});
	}
	ngOnInit(): void {
		// console.log("this is sid", this.route.snapshot.paramMap.get("sId"));
		// console.log("this is did", this.route.snapshot.paramMap.get("dId"));
	}
}
