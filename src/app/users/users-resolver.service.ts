import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class UsersResolver implements Resolve<{ id: number; name: string }[]> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | { id: number; name: string }[]
    | Observable<{ id: number; name: string }[]>
    | Promise<{ id: number; name: string }[]> {
    return Promise.resolve([
      { id: 1, name: 'Ahmed' },
      { id: 2, name: 'Osama' },
      { id: 3, name: 'Aya' },
    ]);
  }
}
