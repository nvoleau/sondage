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


import {SondageService} from '../../service/sondage.service';

@Component({
  selector: 'dashboard',
  pipes: [],
  providers: [ChartistJsService,SondageService],
  directives: [PopularApp, PieChart, TrafficChart, UsersMap, LineChart, Feed, Todo, Calendar, BaCard,BaChartistChart],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss'),require('chartist/dist/chartist.css'), require('./chartistJs.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

    data:any;
  classement_moi : string="0";
  classement_total : string="0";
  sonde_pourcent:string="0";
  sonde_total:string="0";
  sonde_pourcent_moi:string="0";
  sonde_total_moi:String="0";
  sonde_moy:string="0";

  private ref:any;
  total=0;

  constructor(private _chartistJsService:ChartistJsService, private _sondageService:SondageService) {

    this.total=0;
  }

ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }



  ngAfterViewInit() {
    console.log("************ avant 1");
var toto=[];
      this._sondageService.getAll().then(res => this.toto = res);
    console.log(this.toto);
    console.log("************ apres init1");
  }
}
