import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ServiceService {
	constructor() {}
	userDummyData() {
		return [
			{
				name: "Sandeep Sharma",
				age: 23,
				skills: ["Java", "Html", "Css", "React", "Mern", "Mean"],
			},
			{
				name: "Shubham Maurya",
				age: 21,
				skills: ["Java", "Html", "Css", "Python", "Mern", "Mean"],
			},
			{
				name: "Ashish Maurya",
				age: 24,
				skills: ["Java", "Sql", "Css", "React", "Mern", "Mean"],
			},
			{
				name: "Deepak Pancholi",
				age: 25,
				skills: ["Java", "Html", "Css", "React", "Mern", "MeDjan"],
			},
			{
				name: "Shubham Maurya",
				age: 21,
				skills: ["Java", "Html", "Css", "Python", "Mern", "Mean"],
			},
			{
				name: "Ashish Maurya",
				age: 24,
				skills: ["Java", "Sql", "Css", "React", "Mern", "Mean"],
			},
			{
				name: "Deepak Pancholi",
				age: 25,
				skills: ["Java", "Html", "Css", "React", "Mern", "MeDjan"],
			},
		];
	}
}
