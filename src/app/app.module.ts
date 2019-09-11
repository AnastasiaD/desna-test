import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { increaseCounterReducer, decreaseCounterReducer } from './counter.reducer';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './counter.effect';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      increaseCount: increaseCounterReducer,
      decreaseCount: decreaseCounterReducer
    }),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
