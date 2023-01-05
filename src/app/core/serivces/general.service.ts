import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GalleryCategory } from 'src/app/shared/interfaces/GalleryCategory';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private galleryCategories: GalleryCategory[] = [
    {
      title: 'Cities',
      backgroundImageURL: '../assets/images/007-Rome.png',
    }, {
      title: 'Culture',
      backgroundImageURL: '../assets/images/008-Rome.png',
    }, {
      title: 'Landscapes',
      backgroundImageURL: '../assets/images/026-Furkapasse.png',
    },
  ];

  constructor() { }

  getGalleryCategories(): Observable<GalleryCategory[]> {
    return of(this.galleryCategories);
  }

}
