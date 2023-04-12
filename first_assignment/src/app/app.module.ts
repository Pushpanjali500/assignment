import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PuzzlesQuizzesComponent } from './puzzles-quizzes/puzzles-quizzes.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    PuzzlesQuizzesComponent,
    UpcomingEventsComponent,
    VideoGalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
