import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { GeneralService } from 'src/app/core/services/general.service';
import { Photo } from 'src/app/shared/interfaces/Photo';
import { EnlargePhotoComponent } from 'src/app/shared/dialogs/enlarge-photo/enlarge-photo.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {

  public photos$: Observable<Photo[]>;

  private categoryID: number;

  constructor(
    private generalService: GeneralService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
  ) {
    this.categoryID = Number(this.route.snapshot.paramMap.get('categoryID'));
  }

  ngOnInit(): void {
    this.photos$ = this.generalService.getGalleryPhotos(this.categoryID);
  }

  expandPhoto(photo: Photo): void {
    this.dialog.open(EnlargePhotoComponent, {
      data: photo,
      maxHeight: '70vh',
      maxWidth: '70vw',
      panelClass: 'no-padding-dialog',
    });
  }

}
