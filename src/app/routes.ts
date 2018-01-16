import { CreateSessionComponent } from './components/create-session/create-session.component';
import { Routes } from '@angular/router';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './can-deactivate.guard';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'event/new', component: CreateEventComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: 'user', loadChildren: 'app/components/profile/profile.module#ProfileModule' },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
