import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './pages/content/content.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationItemComponent } from './components/navigation-item/navigation-item.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { ViewerComponent } from './components/viewer/viewer.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavigationComponent,
    NavigationItemComponent,
    SafeHTMLPipe,
    ViewerComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    GalleryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LightgalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
