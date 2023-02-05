import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { ViewPhotosComponent } from './view-photos/view-photos.component';

const routes: Routes = [

  {
    path: '',
    component: UserComponent
  },
  {
    path:'view-album/:userId/:userName',
    component:ViewAlbumComponent
  },
  {
    path:'view-post/:userId/:userName',
    component: PostComponent
  },
  {
    path: 'view-photos/:albumId/:title',
    component: ViewPhotosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
