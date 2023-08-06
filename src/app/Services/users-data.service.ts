import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// MODAL
export interface dataTypeOfUserData {
	name: string;
	age: number;
	indian: boolean;
	address: any;
}
@Injectable({
	providedIn: "root",
})
export class UsersDataService {
	url = "https://jsonplaceholder.typicode.com/users";
	constructor(private http: HttpClient) {}

	users() {
		return this.http.get(this.url);
	}
	saveData(data: any) {
		return this.http.post(this.url, data);
	}
}
