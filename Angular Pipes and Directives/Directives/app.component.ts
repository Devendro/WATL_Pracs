// src/app/app.component.ts

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showElement = true; // Set to true or false based on your condition
  items = ["Item 1", "Item 2", "Item 3"];
  isRed = true; // Set to true or false based on your condition
  isBold = false; // Set to true or false based on your condition
}
