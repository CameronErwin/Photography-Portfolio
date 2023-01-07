import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { GeneralService } from 'src/app/core/serivces/general.service';
import { Photo } from 'src/app/shared/interfaces/Photo';

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
    private route: ActivatedRoute,
  ) {
      this.categoryID = Number(this.route.snapshot.paramMap.get('categoryID'));
  }

  ngOnInit(): void {
    this.photos$ = this.generalService.getGalleryPhotos(this.categoryID);
  }

}
