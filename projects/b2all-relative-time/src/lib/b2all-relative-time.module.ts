import { NgModule } from '@angular/core';
import { B2allRelativeTimeComponent } from './b2all-relative-time.component';
import { DateAgoPipe } from './date-ago.pipe';
import { DateDueInPipe } from './date-due-in.pipe';



@NgModule({
  declarations: [
    B2allRelativeTimeComponent,
    DateAgoPipe,
    DateDueInPipe
  ],
  imports: [
  ],
  exports: [
    B2allRelativeTimeComponent,
    DateAgoPipe,
    DateDueInPipe,
  ]
})
export class B2allRelativeTimeModule { }
