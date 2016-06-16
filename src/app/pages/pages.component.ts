import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {BaPageTop, BaContentTop, BaSidebar, BaBackTop} from '../theme/components';

import {Dashboard} from './dashboard';
import {Ui} from './ui';
import {Maps} from './maps';
import {Charts} from './charts';
import {Forms} from './forms';
import {Tables} from './tables';
import {Sondage} from './sondage';
import {Carto} from './carto';
import {TableEnquete} from './table-enquete';

import {Auth} from './auth';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [BaPageTop, BaSidebar, BaContentTop, BaBackTop],
  providers:[Auth],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://www.pavillon30.com">Pavillon30</a> 2016</div>
       <!-- <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>-->
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
@RouteConfig([
  {
    name: 'Dashboard',
    component: Dashboard,
    path: '/dashboard',
    useAsDefault: true,
  },
  {
    name: 'TableEnquete',
    component: TableEnquete,
    path: '/tableenquete'
  },
  {
    name: 'Sondage',
    component: Sondage,
    path: '/sondage'
  },
  {
    name: 'Carto',
    component: Carto,
    path: '/carto'
  }
])
export class Pages {

  constructor(private auth:Auth) {
  }

  ngOnInit() {
  }
}
