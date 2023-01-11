import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Photo } from '../../interfaces/Photo';

@Component({
  selector: 'app-enlarge-photo',
  templateUrl: './enlarge-photo.component.html',
  styleUrls: ['./enlarge-photo.component.scss'],
})
export class EnlargePhotoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public photo: Photo,
  ) { }

  ngOnInit(): void {
  }

}
