import {Injectable} from '@angular/core';

import {BaThemeConfigProvider} from '../../theme';

@Injectable()
export class GraphService {

    private _data = {
    simpleLineOptions: {
      color: this._baConfig.get().colors.defaultText,
      fullWidth: true,
      height: '300px',
      chartPadding: {
        right: 40
      }
    },
    simpleLineData: {
      labels: ['19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','101','102','104'],
      series: [
        [29,99,93,117,90,119,115,98,107,118,117,117,119,95,108,124,108,107,96,99,78,87,61,77,83,94,96,80,99,75,85,99,109,109,104,108,86,116,100,90,108,110,94,94,108,95,87,81,83,95,77,61,52,52,50,39,34,49,31,46,56,55,48,42,39,38,38,26,24,36,32,20,17,12,12,12,10,14,1,4,2,2,2,1],
        [19,131,120,121,109,135,121,86,97,97,104,91,95,94,96,94,98,85,99,86,81,84,72,102,85,68,68,73,68,74,68,66,86,92,97,74,67,96,81,85,106,86,86,79,82,65,84,67,66,52,61,55,60,36,33,36,26,33,33,27,40,15,27,26,23,26,16,18,15,14,8,13,9,8,6,4,1,2,2,2,2,0,0,0]
      ]
    },
    areaLineData: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
      ]
    },
    areaLineOptions: {
      fullWidth: true,
      height: '300px',
      low: 0,
      showArea: true
    },
    biLineData: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      series: [
        [1, 2, 3, 1, -2, 0, 1],
        [-2, -1, -2, -1, -2.5, -1, -2],
        [0, 0, 0, 1, 2, 2.5, 2],
        [2.5, 2, 1, 0.5, 1, 0.5, -1]
      ]
    },

    biLineOptions: {
      height: '300px',
      high: 3,
      low: -3,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showGrid: false
      }
    },
    simpleBarData: {
      labels: ['Bur. 1', 'Bur. 2', 'Bur. 3', 'Bur. 4', 'Bur. 5', 'Bur. 6', 'Bur. 7', 'Bur. 8'],
      series: [
        [1386, 1093, 1212, 1208, 1176, 1603, 1568, 1669]
      ]
    },
    simpleBarOptions: {
      fullWidth: true,
      height: '300px'
    },
    multiBarData: {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
      series: [
        [5, 4, 3, 7],
        [3, 2, 9, 5],
        [1, 5, 8, 4],
        [2, 3, 4, 6],
        [4, 1, 2, 1]
      ]
    },
    multiBarOptions: {
      fullWidth: true,
      height: '300px',
      stackBars: true,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value.split(/\s+/).map(function (word) {
            return word[0];
          }).join('');
        }
      },
      axisY: {
        offset: 20
      }
    },
    multiBarResponsive: [
      ['screen and (min-width: 400px)', {
        reverseData: true,
        horizontalBars: true,
        axisX: {
          labelInterpolationFnc: (n) => n
        },
        axisY: {
          offset: 60
        }
      }],
      ['screen and (min-width: 700px)', {
        stackBars: false,
        reverseData: false,
        horizontalBars: false,
        seriesBarDistance: 15
      }]
    ],
    stackedBarData: {
      labels: ['Bur. 1', 'Bur. 2', 'Bur. 3', 'Bur. 4', 'Bur. 5', 'Bur. 6', 'Bur. 7', 'Bur. 8'],
      series: [
        [1246,	916,	1041,	1038,	982,	1336,	1164, 1306],
        [140,	177,	171,	170,	194,	271,	404, 363]
      ]
    },
    stackedBarOptions: {
      fullWidth: true,
      height: '300px',
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function (value) {
          return (value / 1000) + 'k';
        }
      }
    },
    simplePieData: {
      series: [5, 3, 4]
    },
    simplePieOptions: {
      fullWidth: true,
      height: '300px',
      weight: '300px',
      labelInterpolationFnc: function (value) {
        return Math.round(value / 12 * 100) + '%';
      }
    },
    labelsPieData: {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    },
    labelsPieOptions: {
      fullWidth: true,
      height: '300px',
      weight: '300px',
      labelDirection: 'explode',
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    },
    simpleDonutData: {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    },
    simpleDonutOptions: {
      fullWidth: true,
      donut: true,
      height: '300px',
      weight: '300px',
      labelDirection: 'explode',
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  };

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  public getAll() {
    return this._data;
  }

  public getResponsive(padding, offset) {
    return [
      ['screen and (min-width: 1550px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 1200px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 600px)', {
        chartPadding: 0,
        labelOffset: 0,
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }]
    ];
  
}