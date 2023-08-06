import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserLoginComponent } from "./user-login.component";

describe("UserLoginComponent", () => {
	let component: UserLoginComponent;
	let fixture: ComponentFixture<UserLoginComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [UserLoginComponent],
		});
		fixture = TestBed.createComponent(UserLoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should have component ", () => {
		expect(component.componentName).toBe("user-login");
	});

	it("should return sum() ", () => {
		expect(component.sum()).toBe(22);
	});
});
