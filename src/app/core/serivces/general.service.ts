import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GalleryCategory } from 'src/app/shared/interfaces/GalleryCategory';
import { Photo } from 'src/app/shared/interfaces/Photo';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {

  private galleryCategories: GalleryCategory[] = [
    {
      id: 1,
      name: 'Cities',
      backgroundImageURL: '../assets/images/007-Rome.png',
    }, {
      id: 2,
      name: 'Culture',
      backgroundImageURL: '../assets/images/008-Rome.png',
    }, {
      id: 3,
      name: 'Landscapes',
      backgroundImageURL: '../assets/images/026-Furkapasse.png',
    }, {
      id: 4,
      name: 'Portraits',
      backgroundImageURL: '../assets/images/007-Rome.png',
    }, {
      id: 5,
      name: 'Europe',
      backgroundImageURL: '../assets/images/008-Rome.png',
    },
  ];

  private photos: Photo[] = [
    {
      id: 1,
      imageURL: '../assets/images/026-Furkapasse.png',
    }, {
      id: 1,
      imageURL: '../assets/images/008-Rome.png',
    }, {
      id: 1,
      imageURL: '../assets/images/007-Rome.png',
    }, {
      id: 1,
      imageURL: '../assets/images/026-Furkapasse.png',
    },
  ];

  constructor() { }

  getGalleryCategories(): Observable<GalleryCategory[]> {
    return of(this.galleryCategories);
  }

  getGalleryPhotos(categoryID: number): Observable<Photo[]> {
    return of(this.photos);
  }

}
