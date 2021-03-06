import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './components/profile/login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventService } from './event.service';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { CreateSessionComponent } from './components/create-session/create-session.component';
import { ListSessionsComponent } from './components/list-sessions/list-sessions.component';
import { CollapsibleWellComponent } from './components/common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './duration.pipe';
import { UpvoteComponent } from './components/list-sessions/upvote/upvote.component';
import { VoterService } from './components/list-sessions/voter.service';
import { LocationValidatorDirective } from './components/common/location-validator.directive';



@NgModule({
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    EventsListComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent,
    PageNotFoundComponent,
    CreateSessionComponent,
    ListSessionsComponent,
    CollapsibleWellComponent,
    DurationPipe,
    UpvoteComponent,
    LocationValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, CanDeactivateGuard, AuthService, VoterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
