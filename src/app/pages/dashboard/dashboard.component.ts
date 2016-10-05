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

import {UIChart} from 'primeng/primeng';


import {SondageService} from '../../service/sondage.service';

@Component({
  selector: 'dashboard',
  pipes: [],
  providers: [ChartistJsService,SondageService,Auth],
  directives: [PopularApp, PieChart, TrafficChart, UsersMap, LineChart, Feed, Todo, Calendar, BaCard,BaChartistChart, UIChart],
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


dataPieQ1:any;
dataPieQ2:any;
dataPieQ3:any;
dataPieQ4:any;
dataLineAge:any;
dataPriorite1:any;
options:any;

  constructor(private _chartistJsService:ChartistJsService, private _sondageService:SondageService, private auth:Auth) {
    this._sondageService.db.child('enquete').on('child_added', data => {
      this.callTest(data.val());
    });
    //this.total=0;

this.dataPriorite1 = {
            labels: ['Emploi','Economie','Education','Service public','Sécurité','Immigration','Environnement'],
            datasets: [
                {
                    data: [650, 100,357,110,432,257,154],
                    backgroundColor: [
                        "#36A2EB",
                         "#FF6384",
                         "yellow",
                         "green",
                         "orange",
                         "blue",
                         "#FFEFD5"
                    ],
                    hoverBackgroundColor: [
                      "#36A2EB",
                         "#FF6384",
                         "yellow",
                         "green",
                         "orange",
                         "blue",
                         "#FFEFD5"
                    ]
                }]    
            };



        this.dataPieQ1 = {
            labels: ['Sondé','Non Sondé'],
            datasets: [
                {
                    data: [386, 1000],
                    backgroundColor: [
                        "#36A2EB",
                         "#FF6384"
                    ],
                    hoverBackgroundColor: [
                       "#36A2EB",
                         "#FF6384"
                    ]
                }]    
            };

            this.dataPieQ2 = {
            labels: ['Sondé','Non Sondé'],
            datasets: [
                {
                    data: [193, 900],
                    backgroundColor: [
                        "#36A2EB",
                         "#FF6384"
                    ],
                    hoverBackgroundColor: [
                       "#36A2EB",
                         "#FF6384"
                    ]
                }]    
            };

            this.dataPieQ3 = {
            labels: ['Sondé','Non Sondé'],
            datasets: [
                {
                    data: [212, 1000],
                    backgroundColor: [
                        "#36A2EB",
                         "#FF6384"
                    ],
                    hoverBackgroundColor: [
                       "#36A2EB",
                         "#FF6384"
                    ]
                }]    
            };

            this.dataPieQ4 = {
            labels: ['Sondé','Non Sondé'],
            datasets: [
                {
                    data: [300, 908],
                    backgroundColor: [
                        "#36A2EB",
                         "#FF6384"
                    ],
                    hoverBackgroundColor: [
                       "#36A2EB",
                         "#FF6384"
                    ]
                }]    
            };

             this.dataLineAge = {
            labels: ['18-25', '26-35', '36-40', '40-60', '60+'],
            datasets: [
                {
                    label: 'Quartier 1',
                    data: [132, 80, 120, 154, 200],
                    //fill: false,
                    backgroundColor: '#4bc0c0',
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Quartier 2',
                     data: [14, 22, 60, 14, 20],
                    //fill: false,
                    backgroundColor: 'yellow',
                    borderColor: 'yellow'
                },
                {
                    label: 'Quartier 3',
                     data: [74, 220, 178, 27, 176],
                     backgroundColor: '#532656',
                    borderColor: '#532656'
                },
                {
                    label: 'Quartier 4',
                     data: [34, 27, 138, 270, 16],
                     backgroundColor: 'green',
                    borderColor: 'green'
                },
                {
                    label: 'Quartier 5',
                     data: [95, 67, 234, 90, 78],
                     backgroundColor: 'red',
                    borderColor: 'red'
                }
            ]
        };
        
            this.options= {
        scales: {
            yAxes: [{
                stacked: true
            }],
             xAxes: [{
                stacked: true
            }]
        }
    }

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





  selectData(event) {
       // this.msgs = [];
        //this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
    }



}
