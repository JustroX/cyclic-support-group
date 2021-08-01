import { Component, OnInit } from '@angular/core';
import { Thumbnail } from 'src/app/components/gallery/gallery.component';
import { var_gallery } from 'src/app/vars/images';
import { var_members } from 'src/app/vars/members';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly images: Thumbnail[] = var_gallery.slice(0, 6);
  readonly members = var_members;
  constructor() {}

  ngOnInit(): void {}
}
