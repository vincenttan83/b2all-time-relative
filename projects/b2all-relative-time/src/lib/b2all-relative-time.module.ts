import { NgModule } from '@angular/core';
import { DateAgoPipe } from './date-ago.pipe';
import { DateDueInPipe } from './date-due-in.pipe';



@NgModule({
  declarations: [
    DateAgoPipe,
    DateDueInPipe
  ],
  imports: [
  ],
  exports: [
    DateAgoPipe,
    DateDueInPipe,
  ]
})
export class B2allRelativeTimeModule { }
