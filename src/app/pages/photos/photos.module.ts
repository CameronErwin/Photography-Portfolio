import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';


@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    MatDialogModule,
  ],
})
export class PhotosModule { }
