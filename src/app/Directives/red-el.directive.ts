import { Directive, ElementRef } from "@angular/core";

@Directive({
	selector: "[appRedEl]",
})
export class RedElDirective {
	constructor(el: ElementRef) {
		el.nativeElement.style.color = "red";
		el.nativeElement.style.backgroundColor = "blue";
		el.nativeElement.style.borderRadius = "5px";
		el.nativeElement.style.padding = "5px";
		el.nativeElement.textContent = "Something Weird ";
	}
}
