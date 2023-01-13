import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { GalleryCategory } from 'src/app/shared/interfaces/GalleryCategory';
import { Photo } from 'src/app/shared/interfaces/Photo';

import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {

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

  constructor(
    private http: HttpClient,
  ) { }

  getGalleryCategories(): Observable<GalleryCategory[]> {
    return this.http.get<{ categories: GalleryCategory[] }>(`${API_URL}/categories`)
      .pipe(map(res => res.categories));
  }

  getGalleryPhotos(categoryID: number): Observable<Photo[]> {
    return of(this.photos);
  }

}
