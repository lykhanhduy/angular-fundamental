import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-sessions',
  templateUrl: './list-sessions.component.html',
  styleUrls: ['./list-sessions.component.css']
})
export class ListSessionsComponent implements OnInit {
  @Input() sessions;
  constructor() { }

  ngOnInit() {
  }

}
