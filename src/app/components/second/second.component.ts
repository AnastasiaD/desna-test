import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { change, decrease, increase } from '../../counter.actions';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  secondComponentNegative$: Observable<number>;
  secondComponentPositive$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.secondComponentNegative$ = store.pipe(select('increaseCount'));
    this.secondComponentPositive$ = store.pipe(select('decreaseCount'));
  }

  ngOnInit() {
  }

  change(): void {
    setInterval(() => {
      this.store.dispatch(change());
    }, 1000);
  }

}
