import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GalleryCategory } from 'src/app/shared/interfaces/GalleryCategory';
import { Photo } from 'src/app/shared/interfaces/Photo';

import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {

  constructor(
    private http: HttpClient,
  ) { }

  getGalleryCategories(): Observable<GalleryCategory[]> {
    return this.http.get<{ categories: GalleryCategory[] }>(`${API_URL}/categories`)
      .pipe(map(res => res.categories));
  }

  getGalleryPhotos(categoryID: number): Observable<Photo[]> {
    return this.http.get<{ photos: Photo[] }>(`${API_URL}/categories/${categoryID}`)
      .pipe(map(res => res.photos));
  }

  getRecentPhotos(limit: number = 5): Observable<Photo[]> {
    return this.http.get<{ photos: Photo[] }>(`${API_URL}/photos?limit=${limit}`)
      .pipe(map(res => res.photos));
  }

}
