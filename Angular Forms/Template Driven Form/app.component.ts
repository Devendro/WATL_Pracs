// src/app/app.component.ts

import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  onSubmitTemplateDriven(formData: any) {
    console.log("Template-Driven Form Data:", formData);
  }
}
