import { Component, ViewEncapsulation, Inject } from "@angular/core";
@Component({
  selector: "app-root",
  styleUrls: ["app.component.css"],
  templateUrl: "app.component.html",
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public date: Object = new Date();

  public start: Date = new Date("10/07/2017");
  public end: Date = new Date("11/25/2017");

  constructor() {}
}
