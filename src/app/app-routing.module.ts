import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementComponent } from './pages/agreement/agreement.component';
import { ContentComponent } from './pages/content/content.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'gallery',
    component: GalleryPageComponent,
  },
  {
    path: 'agreement',
    component: AgreementComponent,
  },
  {
    path: 'view',
    children: [
      {
        path: '**',
        component: ContentComponent,
        runGuardsAndResolvers: 'always',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
