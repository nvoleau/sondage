import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';
import {RouteConfig} from '@angular/router-deprecated';
//import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import {Router,RouteParams,CanActivate} from '@angular/router-deprecated';
import {UIChart} from 'primeng/primeng';


@Component({
  selector: 'bar-chart-demo',
  directives:[BaCard,UIChart],
  template: require('./graph-militant.html')

})

export class GraphMilitant {
data: any;
dataPieQ1:any;
dataPieQ2:any;
dataPieQ3:any;
dataPieQ4:any;
dataLineAge:any;
dataPriorite1:any;
options:any;

    
    //msgs: Message[];

    constructor() {
        this.data = {
            labels: ['Sem 01', 'Sem 02', 'Sem 03', 'Sem 04', 'Sem 05', 'Sem 06', 'Sem 07','Sem 08','Sem 09', 'Sem 10'],
            datasets: [
                {
                    label: 'Antoine',
                    data: [65, 80, 120, 90, 60, 20, 40,57,75,110],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Martine',
                    data: [95, 115, 130, 125, 115, 140, 150,145,137,169],
                    fill: false,
                    borderColor: 'yellow'
                },
                {
                    label: 'Alexandre',
                    data: [0, 14, 13, 32, 20, 42, 53,15,6,28],
                    fill: false,
                    borderColor: '#532656'
                },
                {
                    label: 'Bernard',
                    data: [10, 139, 175, 210, 215, 200, 210,215,262,228],
                    fill: false,
                    borderColor: 'green'
                },
                {
                    label: 'Paul',
                    data: [34, 58, 75, 100, 132, 118, 189,154,176,230],
                    fill: false,
                    borderColor: 'red'
                }
            ]
        };




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

    selectData(event) {
       // this.msgs = [];
        //this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
    }


 
}