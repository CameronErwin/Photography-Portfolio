import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { GeneralService } from 'src/app/core/services/general.service';

import { GalleryCategory } from 'src/app/shared/interfaces/GalleryCategory';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  public categories$: Observable<GalleryCategory[]>;

  constructor(
    private generalService: GeneralService,
  ) { }

  ngOnInit(): void {
    this.categories$ = this.generalService.getGalleryCategories();
  }

}
