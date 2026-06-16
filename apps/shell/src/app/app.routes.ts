import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'mfeAdmin',
    loadChildren: () =>
      import('mfeAdmin/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: 'mfeHelpdesk',
    loadChildren: () =>
      import('mfeHelpdesk/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: 'mfeFinance',
    loadChildren: () =>
      import('mfeFinance/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: 'mfeHr',
    loadChildren: () =>
      import('mfeHr/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
