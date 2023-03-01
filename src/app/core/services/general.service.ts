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

  getHomePagePhoto(): Observable<Photo> {
    return this.http.get<{ photos: Photo[] }>(`${API_URL}/photos?limit=1&sort=+rand&filter=show_on_home_page`)
      .pipe(map(res => res.photos[0]));
  }

  getRecentPhotos(limit: number = 4): Observable<Photo[]> {
    return this.http.get<{ photos: Photo[] }>(`${API_URL}/photos?limit=${limit}&sort=-created_timestamp`)
      .pipe(map(res => res.photos));
  }

}
