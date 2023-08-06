import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { InlineTemplateComponent } from "./Components/inline-template/inline-template.component";
import { InlineStyleComponent } from "./Components/inline-style/inline-style.component";
import { InlineStyleTemplateComponent } from "./Components/inline-style-template/inline-style-template.component";
import { UserAuthModuleModule } from "./Components/user-auth-module/user-auth-module.module";
import { HeaderComponent } from "./Components/header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import { TodoListComponent } from "./Components/todo-list/todo-list.component";
import { DataSharingParentChildComponent } from "./Components/data-sharing-parent-child/data-sharing-parent-child.component";
import { DataSharingChildParentComponent } from "./Components/data-sharing-child-parent/data-sharing-child-parent.component";
import { UsdToInrPipe } from "./Pipes/usd-to-inr.pipe";
import { RedElDirective } from "./Directives/red-el.directive";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { PostApiComponent } from "./Components/post-api/post-api.component";
import { AdminListComponent } from "./Components/admin-list/admin-list.component";
import { AdminLoginComponent } from "./Components/admin-login/admin-login.component";
import { AdminModule } from "./Modules/admin/admin.module";
import { UserListComponent } from "./Components/user-list/user-list.component";
import { UserLoginComponent } from "./Components/user-login/user-login.component";
import { UserModule } from "./Modules/user/user.module";

@NgModule({
	declarations: [
		AppComponent,
		InlineTemplateComponent,
		InlineStyleComponent,
		InlineStyleTemplateComponent,
		HeaderComponent,
		TodoListComponent,
		DataSharingParentChildComponent,
		DataSharingChildParentComponent,
		UsdToInrPipe,
		RedElDirective,
		PostApiComponent,
		AdminListComponent,
		AdminLoginComponent,
		UserListComponent,
		UserLoginComponent,
	],
	imports: [
		BrowserModule,
		UserAuthModuleModule,
		FormsModule,
		NgbModule,
		BrowserAnimationsModule,
		MatSlideToggleModule,
		MatButtonModule,
		MatBadgeModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		// While Using Lazy Loading We Should Not Include Module Directly Which Need To Be Loaded Lazy
		// AdminModule,
		// UserModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
