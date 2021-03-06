import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class DestroyObservable implements OnDestroy {
  public destroy$ = new Subject();

  ngOnDestroy(): void {
    this.destroy$.next([]);
    this.destroy$.complete;
  }
}
