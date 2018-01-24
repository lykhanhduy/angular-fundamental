import { ISession } from './../../event.model';
import { EventService } from './../../event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any;
  addMode = false;
  filterBy = 'all';
  sortBy = 'name';
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent
    (Number(this.route.snapshot.params['id']));
  }
  addSession() {
    this.addMode = true;
  }
  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
  cancelAddSession(event) {
    this.addMode = false;
    console.log('xxx');
  }
}
