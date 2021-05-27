import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Asia',
      data: [5, 6, 80, 9, 14, 36, 52]
    }, {
      name: 'Africa',
      data: [5, 6, 80, 9, 14, 36, 52]
    }, {
      name: 'Europe',
      data: [5, 6, 80, 9, 14, 36, 52]
    }, {
      name: 'America',
      data: [5, 6, 80, 9, 14, 36, 52]
    }, {
      name: 'Oceania',
      data: [5, 6, 80, 9, 14, 36, 52]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }
}
