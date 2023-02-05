import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { ViewPhotosComponent } from './view-photos/view-photos.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    ViewAlbumComponent,
    ViewPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
