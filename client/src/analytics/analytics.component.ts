import {Observable} from "rxjs/Observable";
import {Store} from '@ngrx/store';
import {Component, OnInit} from '@angular/core'
import {AppStore} from "../common/models/appstore.model";

@Component({
  selector: 'widgets',
  template: `
    <h2>App analytics</h2>
    <div>items: {{(analytics | async).items}}</div>
    <div>widgets: {{(analytics | async).widgets}}</div>
    <div>cancel clicks: {{(analytics | async).cancelClicks}}</div>
    <div>save clicks: {{(analytics | async).saveClicks}}</div>
  `,
  styles: [],
  providers: []
})
export class Analytics implements OnInit {
  analytics;
  items: Observable<{}>;

  constructor(private store: Store<AppStore>) {
    this.analytics = store.select('analytics');
    this.items = store.select('items');
  }

  ngOnInit() {
    this.store.dispatch({type: 'INIT', payload:
      {
        items: 1,
        widgets: 2,
        cancelClicks: 3,
        saveClicks: 4
      }
    })
  }

}
