import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { AutoUnsubscribe } from '../decorator/auto-unsubscribe.decorator';



@Component({
  selector: 'app-auto-unsubscribe',
  templateUrl: './auto-unsubscribe.component.html',
  styleUrls: ['./auto-unsubscribe.component.scss']
})

@AutoUnsubscribe
export class AutoUnsubscribeComponent implements OnInit {
  public subscription!: Subscription;
  public count: number = 0;

  ngOnInit() {
    this.subscription = interval(1000).subscribe(() => {
      this.count++;
      console.log('called');
    });
  }

/*   ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('CounterComponent destroyed');
  } */
}
