import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { GeneralService } from 'src/app/core/serivces/general.service';

import { Photo } from 'src/app/shared/interfaces/Photo';
import { EnlargePhotoComponent } from 'src/app/shared/dialogs/enlarge-photo/enlarge-photo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public homePhoto$: Observable<Photo>;
  public photos$: Observable<Photo[]>;

  constructor(
    private generalService: GeneralService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.homePhoto$ = this.generalService.getHomePagePhoto();
    this.photos$ = this.generalService.getRecentPhotos();
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
