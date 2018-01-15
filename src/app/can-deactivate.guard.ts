import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CreateEventComponent } from './components/create-event/create-event.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CreateEventComponent> {
  constructor () {}
  canDeactivate(
    component: CreateEventComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (component.isDirty) {
        return window.confirm('Do you want to cancle when do not save data?');
      }
      return true;
  }
}

