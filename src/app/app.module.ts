import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventService } from './event.service';


@NgModule({
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    EventsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
