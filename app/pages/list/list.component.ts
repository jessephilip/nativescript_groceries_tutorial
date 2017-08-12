import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "list",
  templateUrl: "pages/list/list.component.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent implements OnInit {
  public groceryList: Array<Object> = [];

  ngOnInit() {
    this.groceryList.push({ name: "Apples" });
    this.groceryList.push({ name: "Bananas" });
    this.groceryList.push({ name: "Oranges" });
  }
}