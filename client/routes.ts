import { Items } from './src/items/items.component';
import { Widgets } from './src/widgets/widgets.component';
import { Routes } from '@angular/router';
import { Analytics } from './src/analytics/analytics.component';

export const routes: Routes = [
  {path: '',            component: Items },
  {path: 'items',      component: Items},
  {path: 'widgets',    component: Widgets},
  {path: 'analytics',    component: Analytics},
  {path: '*',           component: Items }
];
