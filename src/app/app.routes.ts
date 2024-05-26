import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'zoneless-with-signals',
    loadComponent: () =>
      import('./zoneless-with-signals/zoneless-with-signals.component'),
  },
];
