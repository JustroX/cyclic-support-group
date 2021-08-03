import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss'],
})
export class AgreementComponent implements OnInit {
  isReady: boolean = false;
  id: string = '';

  readonly time = ~~((857 / 250) * 50);
  // readonly time = 3;

  flags = {
    agree_framework: false,
    agree_guidelines: false,
    agree_coc: false,
    isLoading: false,
  };

  async agree() {
    const isCheckedAll =
      this.flags.agree_framework &&
      this.flags.agree_guidelines &&
      this.flags.agree_coc;

    if (!isCheckedAll) {
      alert('Please agree to the guidelines to continue.');
      return;
    }

    this.flags.isLoading = true;
    try {
      const url = '/api/wait_hook';
      await this.http
        .post(url, {
          id: this.id,
          value: {},
        })
        .pipe(take(1))
        .toPromise();
      this.router.navigateByUrl('/view/onboarding/success');
    } catch (err) {
      console.log('Error', err);
    }
    this.flags.isLoading = false;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.queryParams['t'];
    const key = 'agreement_time_left';
    const prev_time = parseInt(localStorage.getItem(key) ?? this.time + '');
    let time_left = this.time;
    if (!isNaN(prev_time)) time_left = prev_time;

    this.isReady = time_left <= 0;
    const interval = setInterval(() => {
      time_left -= 1;
      localStorage.setItem(key, time_left + '');
      if (time_left <= 0) {
        this.isReady = true;
        clearInterval(interval);
      }
    }, 1000);
  }

  ngOnInit(): void {}
}
