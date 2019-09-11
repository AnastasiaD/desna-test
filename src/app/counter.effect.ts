import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { increase, decrease } from './counter.actions';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions
  ) {}

  loadCounter$ = createEffect(() => this.actions$.pipe(
    ofType('[Counter Component] Change'),
    switchMap(() => [
      increase(),
      decrease(),
      decrease()
    ])
  ));
}
