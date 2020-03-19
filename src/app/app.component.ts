import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CountState } from './reducers/count/count.reducer';
import { Observable } from 'rxjs';
import { selectCount, selectUpdatedAt } from './reducers/count/count.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public counter$: Observable<number> = this.store$.pipe(select(selectCount));
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));

  constructor(private store$: Store<CountState>) {}
  
  increase() {

  }

  decrease() {

  }

  clear() {

  }
}
