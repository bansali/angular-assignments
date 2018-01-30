import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;
  constructor() { }

  printCount(state , count) {
    console.log(state + '  ========> ' + count);
  }
}
