import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack-overflow',
  templateUrl: './stack-overflow.component.html',
  styleUrls: ['./stack-overflow.component.css']
})
export class StackOverflowComponent implements OnInit {

  color: string = "#6c5ce7";
  API_URL = "https://api.stackexchange.com/2.2";

  constructor(public http: HttpClient) { }

  question_results: any[] = [];

  ngOnInit(): void {
    this.searchQuestions();
  }

  pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  searchString: string = "";
  accepted: boolean = false;
  closed: boolean = false;
  migrated: boolean = false;
  wiki: boolean = false;
  pagesize = 25;
  page = 1;
  views = 0;
  answers = 0;

  startDateValue;
  endDateValue;

  searchQuestions() {

    let params: HttpParams = new HttpParams()
      .set("order", "desc")
      .set("sort", "activity")
      .set("client_id", "19731")
      .set("site", "stackoverflow")
      .set("fromdate", this.startDateValue ? (this.startDateValue.getTime() + "").substr(0, 10) : "")
      .set("todate", this.endDateValue ? (this.endDateValue.getTime() + "").substr(0, 10) : "")

      // Hard coding for testing purposes only
      .set("key", "mZabwtt*ym5qRT8AoBy)fA((")

      .set("client_secret", "98Zbj3zbWzGl9YrWKZJ)EA((")
      .set("accepted", this.accepted + "")
      .set("migrated", this.migrated + "")
      .set("pagesize", this.pagesize + "")
      .set("closed", this.closed + "")
      .set("title", this.searchString)
      .set("body", this.searchString)
      .set("wiki", this.wiki + "")
      .set("page", this.page + "")
      .set("views", this.views + "")
      .set("answers", this.answers + "")

    this.http.get(this.API_URL + "/search/advanced", { params: params }).subscribe((res: any) => {
      this.question_results = res.items;
    });

  }


}
