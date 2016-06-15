import {Component, ViewEncapsulation} from '@angular/core';

import {PopularApp} from './popularApp';
import {PieChart} from './pieChart';
import {TrafficChart} from './trafficChart';
import {UsersMap} from './usersMap';
import {LineChart} from './lineChart';
import {Feed} from './feed';
import {Todo} from './todo';
import {Calendar} from './calendar';
import {BaCard} from '../../theme/components';

import {ChartistJsService} from './chartistJs.service';
import {BaChartistChart} from '../../theme/components';


@Component({
  selector: 'dashboard',
  pipes: [],
  providers: [ChartistJsService],
  directives: [PopularApp, PieChart, TrafficChart, UsersMap, LineChart, Feed, Todo, Calendar, BaCard,BaChartistChart],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss'),require('chartist/dist/chartist.css'), require('./chartistJs.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

    data:any;

  constructor(private _chartistJsService:ChartistJsService) {
  }

ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
  
}
