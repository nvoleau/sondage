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

import {tokenNotExpired} from 'angular2-jwt';
import {Auth} from '../auth/auth.service';


import {SondageService} from '../../service/sondage.service';

@Component({
  selector: 'dashboard',
  pipes: [],
  providers: [ChartistJsService,SondageService,Auth],
  directives: [PopularApp, PieChart, TrafficChart, UsersMap, LineChart, Feed, Todo, Calendar, BaCard,BaChartistChart],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss'),require('chartist/dist/chartist.css'), require('./chartistJs.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

    data:any;
  classement_moi : number=0;
  classement_total : number=0;
  sonde_pourcent:number=0;
  sonde_total:number=0;
  sonde_pourcent_moi:number=0;
  sonde_total_moi:number=0;
  sonde_moy:number=0;

  private ref:any;
  militants = [];
  militants_nb = [];
  militants_nb_tmp=[];

  constructor(private _chartistJsService:ChartistJsService, private _sondageService:SondageService, private auth:Auth) {
    this._sondageService.db.child('enquete').on('child_added', data => {
      this.callTest(data.val());
    });
    //this.total=0;
  }

ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  callTest(data:any){
    console.log(data);

    this.sonde_total +=1;

    if(this.militants.indexOf(data.owner)===-1) {
      this.militants.push(data.owner);
      this.militants_nb.push(0);
    }

    //pour le classement par militant
    this.militants_nb[this.militants.indexOf(data.owner)]+=1;
    //en quelle place sommes nous dans le tableau
    var n = this.militants.indexOf(data.owner);
    //notre valeur
    var x = this.militants_nb[n];
    //on classe l'array

    this.militants_nb_tmp = this.militants_nb;
    console.log(this.militants_nb);
    this.militants_nb_tmp.sort();
    console.log(this.militants_nb);
    console.log(this.militants_nb_tmp);
    // quelle est maintenant notre place dans l'array
    this.classement_moi = this.militants_nb_tmp.indexOf(x);

   // console.log(this.militants_nb);

    if(data.owner == this.auth.user.nickname){
      this.sonde_total_moi+=1;
    }

    this.sonde_pourcent_moi = (this.sonde_total_moi / this.sonde_total)*100;
    this.sonde_pourcent = (this.sonde_total / 10915)*100;
    this.classement_total = this.militants.length;
    this.sonde_moy = this.sonde_total/this.classement_total;

  }


  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }


}
