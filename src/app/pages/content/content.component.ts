import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  url: string = '';
  navigationSubscription;
  isActivation = false;
  activationLink: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.isActivation = this.route.snapshot.queryParams['ac'];
    this.activationLink = this.route.snapshot.queryParams['ac'];

    this.url = this.router.url.split('#')[0].split('?')[0];

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.url = this.router.url.split('#')[0].split('?')[0];
      }
    });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {}
}
