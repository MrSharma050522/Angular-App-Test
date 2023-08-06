import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-todo-list",
	templateUrl: "./todo-list.component.html",
	styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
	@ViewChild("task") task!: ElementRef<HTMLInputElement>;
	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		// console.log("this is pid", this.route.snapshot.paramMap.get("pId"));
		// console.log("this is rid", this.route.snapshot.paramMap.get("rId"));
	}

	updateValue: string = "";
	edit = false;
	todos: any = [];
	addTaskHandler = (text: string) => {
		if (text === "") return;

		this.todos.push(text);
		this.task.nativeElement.value = "";
	};
	deleteTaskHandler = (task: string) => {
		this.todos = this.todos.filter((el: string) => el !== task);
	};
	editTaskHandler = (todo: string) => {
		this.updateValue = todo;
		this.edit = true;
	};
	editTaskHandlerSubmit = (value: string) => {
		if (value === "") return;
		this.edit = false;
		this.todos = this.todos.map((el: string) =>
			el === this.updateValue ? value : el
		);
	};
}
