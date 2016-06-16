import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Sondés',
        stats: '1000',
        pourcentage: '10',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Par Moi',
        stats: '250',
        pourcentage : '20',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Active Users',
        stats: '178,391',
        pourcentage: '50',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Returned',
        stats: '32,592',
        pourcentage: '60',
        icon: 'refresh',
      }
    ];
  }
}
