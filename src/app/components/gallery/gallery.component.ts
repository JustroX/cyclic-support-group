import { Component, Input, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

export interface Thumbnail {
  image: string;
  title: string;
  type: string;
  creator: string;
  iframe?: boolean;
  external: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() images: Thumbnail[] = [];
  readonly settings = {
    zoom: true,
    thumbnail: true,
    enableZoomAfter: 1000,
    exThumbImage: 'src',
    plugins: [lgVideo, lgZoom, lgThumbnail],
  };
  constructor() {}
  ngOnInit(): void {}
}
