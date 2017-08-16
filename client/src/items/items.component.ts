import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from '@ngrx/store';
import {ItemsService} from '../common/services/items.service.ts';
import {AppStore} from '../common/models/appstore.model';
import {Item} from '../common/models/item.model';
import {ItemsList} from './items-list.component';
import {ItemDetail} from './item-detail.component';
import {Gadget} from '../common/models/gadget.model';
import {GadgetService} from '../common/services/gadget.service.ts'

@Component({
  selector: 'items',
  template: `
  <div class="mdl-grid items">
    <div class="mdl-cell mdl-cell--6-col">
      <items-list 
        [items]="items | async"
        (selected)="selectItem($event)" (deleted)="deleteItem($event)">
      </items-list>
    </div>
    <div class="mdl-cell mdl-cell--6-col">
      <item-detail
        [analytics]="analytics | async"
        (saved)="saveItem($event)" (cancelled)="resetItem($event)"
        [item]="selectedItem | async">Select an Item</item-detail>
    </div>
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="analyticsClick()">click me</button>
  </div>
  `,
  styles: [`
    .items {
      padding: 20px;
    }
  `],
  providers: [ItemsService],
  directives: [ItemsList, ItemDetail]
})
export class Items {
  items: Observable<{}>;
  selectedItem: Observable<{}>;
  gadget: Observable<Gadget>;
  analytics: Observable<{}>;

  constructor(private itemsService: ItemsService,
              private gadgetService: GadgetService,
              private store: Store<AppStore>)
  {
    this.items = itemsService.items;
    this.analytics = itemsService.analytics;
    this.selectedItem = store.select('selectedItem');
    this.selectedItem.subscribe(v => console.log(v));
    this.gadget = gadgetService.gadget;
    itemsService.loadItems();
  }

  resetItem() {
    let emptyItem = {id: null, name: '', description: ''};
    this.store.dispatch({type: 'SELECT_ITEM', payload: emptyItem});
  }

  selectItem(item: Item) {
    this.store.dispatch({type: 'SELECT_ITEM', payload: item});
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item);
    this.resetItem();
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item);
    this.resetItem();
  }

  analyticsClick() {
    this.itemsService.analyticsClick();
  }
}
