import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `<div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <event-thumbnail [event]="event1" (eventClick)="handleEventClicked($event)">
    </event-thumbnail>
  </div>`,
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    time: '10:00 am',
    price: 600,
  };

  handleEventClicked(data: any) {
    console.log(`recieved - ${data}`);
  }
}
