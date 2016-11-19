import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';
import {RouteConfig} from '@angular/router-deprecated';
//import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import {Router,RouteParams,CanActivate} from '@angular/router-deprecated';
import {UIChart} from 'primeng/primeng';


@Component({
  selector: 'bar-chart-demo',
  directives:[BaCard,UIChart],
  template: require('./graph.html')

})


export class Graph {

  dataElection:any;
  ObjectURLOptions:any;
  SVGMetadataElement:any;

  constructor() {

     this.dataElection = {
            labels: ['Mairie', 'Camus','Fenez','Plein Ciel', 'Charny','Lantien', 'Racine', 'Giono'],
            datasets: [
                {
                    label: 'Droite 2007',
                    data: [58.56, 52.56, 52.09, 56.68, 52.16, 43.13, 40.86, 42.60, 49.10],
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)'
                },
                {
                    label: 'Droite 2012',
                    data: [50.66, 39.98, 43.65, 49.28, 42.91, 35.32, 31.30, 32.61, 40.12],
                    backgroundColor: 'rgba(179,181,255,0.2)',
                    borderColor: 'rgba(179,181,198,2)',
                    pointBackgroundColor: 'rgba(179,181,198,82)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,82)'
                },
                {
                    label: 'Gauche 2007',
                    data: [41.44, 47.44, 47.91, 43.32, 47.84, 56.87, 59.14, 57.40, 50.90],
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                },
                {
                    label: 'Gauche 2012',
                    data: [ 49.34, 60.02, 56.35, 50.72, 57.09, 64.68, 68.70, 67.39, 59.88],
                    backgroundColor: 'rgba(255,99,182,0.2)',
                    borderColor: 'rgba(255,99,132,81)',
                    pointBackgroundColor: 'rgba(255,99,132,81)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,81)',
                }
               
            ]
        };


        this.data = {
            labels: ['2007 1er Tour', '2007 2ieme Tour', '1er Tour 2012', '2ieme Tour 2012'],
            datasets: [
                {
                    label: 'Mairie - PS',
                    data: [272, 465, 288, 527],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Mairie - UMP',
                    data: [392, 657, 312, 541],
                    fill: false,
                    borderColor: 'yellow'
                },
                {
                    label: 'Camus - PS',
                    data: [243, 399, 297, 494],
                    fill: false,
                    borderColor: '#532656'
                },
                {
                    label: 'Camus - UMP',
                    data: [261, 442, 165, 329],
                    fill: false,
                    borderColor: 'green'
                },
                {
                    label: 'Fenez - PS',
                     data: [306, 505, 238, 510],
                    fill: false,
                    borderColor: 'red'
                }
                ,
                {
                    label: 'Fenez - UMP',
                     data: [346, 549, 213, 395],
                    fill: false,
                    borderColor: 'blue'
                }
            ]
        };

         this.dataPieQ1 = {
            labels: ['Joly','Le Pen', 'Sarkozy','Mélanchon','Poutou','Arthaud','Cheminade','Bayrou','Dupont-Aignan','Hollande'],
            datasets: [
                {
                    data: [20, 173, 312,127,7,5,2,103,24,288],
                    backgroundColor: [
                        "#36A2EB",
                        "#FF6600",
                         "#FF6384",
                         "#660099",
                         "#99FF00",
                         "#CCFF00",
                         "#EABFFE",
                         "#FFCC00",
                         "#80FFFE",
                         "#FE9980"
                    ],
                    hoverBackgroundColor: [
                       "#36A2EB",
                        "#FF6600",
                         "#FF6384",
                         "#660099",
                         "#99FF00",
                         "#CCFF00",
                         "#EABFFE",
                         "#FFCC00",
                         "#80FFFE",
                         "#FE9980"
                    ]
                }]    
            };
        
        this.dataPieQ2 = {
            labels: ['Joly','Le Pen', 'Sarkozy','Mélanchon','Poutou','Arthaud','Cheminade','Bayrou','Dupont-Aignan','Hollande'],
            datasets: [
                {
                    data: [16,155,165,108,10,4,2,46,13,297],
                    backgroundColor: [
                        "#36A2EB",
                        "#FF6600",
                         "#FF6384",
                         "#660099",
                         "#99FF00",
                         "#CCFF00",
                         "#EABFFE",
                         "#FFCC00",
                         "#80FFFE",
                         "#FE9980"
                    ],
                    hoverBackgroundColor: [
                       "#36A2EB",
                        "#FF6600",
                         "#FF6384",
                         "#660099",
                         "#99FF00",
                         "#CCFF00",
                         "#EABFFE",
                         "#FFCC00",
                         "#80FFFE",
                         "#FE9980"
                    ]
                }]    
            };
        
    }

     selectData(event) {
       // this.msgs = [];
        //this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
    }

  }

 




