import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDueIn'
})
export class DateDueInPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      let seconds = Math.floor((+new Date() - +new Date(new Date(value).setHours(0, 0, 0, 0))) / 1000);

      let isFuture: boolean;
      if (seconds < 0) {
        // future
        isFuture = true;
        seconds = seconds * -1;
      }

      // if (seconds > 0) {
      //   return 'Over due';
      // }

      // if (seconds < 29) { // less than 30 seconds ago will show as 'Just now'
      //   return 'Just now';
      // }
      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };
      let counter;
      for (const i of Object.keys(intervals)) {
        counter = Math.floor(seconds / intervals[i]);
        // console.log(`seconds ${seconds}, counter: ${counter}, i: ${i}`);
        if (counter > 0) {
          if (counter === 1) {
            if (isFuture) {
              return 'Due in ' + counter + ' ' + i; // singular (1 day ago)
            } else {
              return 'Over due ' + counter + ' ' + i + ' ago'; // singular (1 day ago)
            }
          } else {
            if (isFuture) {
              return 'Due in ' + counter + ' ' + i + 's'; // plural (2 days ago)
            } else {
              return 'Over due ' + counter + ' ' + i + 's ago'; // plural (2 days ago)
            }

          }
        }
      }
    }
    return value;
  }

}
