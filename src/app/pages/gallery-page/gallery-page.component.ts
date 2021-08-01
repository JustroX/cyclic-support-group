import { Component, OnInit } from '@angular/core';
import { Thumbnail } from 'src/app/components/gallery/gallery.component';
import { var_gallery } from 'src/app/vars/images';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
})
export class GalleryPageComponent implements OnInit {
  readonly images: Thumbnail[] = var_gallery;

  constructor() {}

  ngOnInit(): void {}
}
