import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';
import {RouteConfig} from '@angular/router-deprecated';
import {GraphService} from './graph.service';

import {BaChartistChart} from '../../theme/components';


@Component({
  selector: 'result',
  pipes: [],
  providers: [GraphService],
  directives: [BaCard, BaChartistChart],
  styles: [require('chartist/dist/chartist.css'), require('./graph.scss')],
  template: require('./graph.html'),
})

export class Graph {

  data:any;

  constructor(private _graphService:GraphService) {
  }

  ngOnInit() {
      this.data = this._graphService.getAll();
  }

   getResponsive(padding, offset) {
    return this._graphService.getResponsive(padding, offset);
  }

}


