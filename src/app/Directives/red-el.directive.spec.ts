import { ElementRef } from "@angular/core";
import { RedElDirective } from "./red-el.directive";

describe("RedElDirective", () => {
	it("should create an instance", () => {
		const mockElementRef = {
			nativeElement: {}, // A minimal mock for ElementRef
		} as ElementRef;
		const directive = new RedElDirective(mockElementRef);
		expect(directive).toBeTruthy();
	});
});
