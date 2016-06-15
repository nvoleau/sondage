
import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

import {BaCard} from '../../theme/components';
import {RouteConfig} from '@angular/router-deprecated';

require('leaflet-map');
require('leaflet.heat');
require('style-loader!leaflet/dist/leaflet.css');

//import * from 'leaflet-heat.js'



@Component({
  selector: 'leaflet-maps',
  pipes: [],
  providers: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./carto.scss')],
  template: require('./carto.html'),
})

export class Carto {

  constructor(private _elementRef:ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

    L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet';
    var map = L.map(el).setView([48.5400906,2.6126114], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

L.heatLayer([[48.543801,2.642103,1],
[48.543801,2.642103,1],
[48.543801,2.642103,1],
[48.543801,2.642103,1],
[48.543639,2.642128,1],
[48.543639,2.642128,1],
[48.543639,2.642128,1],
[48.543639,2.642128,1],
[48.543477,2.642169,1],
[48.543477,2.642169,1],
[48.543477,2.642169,1],
[48.543477,2.642169,1],
[48.543477,2.642169,1],
[48.543302,2.642204,1],
[48.543302,2.642204,1],
[48.543302,2.642204,1],
[48.543302,2.642204,1],
[48.543302,2.642204,1],
[48.543302,2.642204,1],
[48.543302,2.642204,1],
[48.543302,2.642204,1],
[48.543302,2.642204,1],
[48.543136,2.642244,1],
[48.543136,2.642244,1],
[48.543136,2.642244,1],
[48.543136,2.642244,1],
[48.543136,2.642244,1],
[48.543136,2.642244,1],
[48.54258,2.642215,1],
[48.542634,2.642204,1],
[48.542634,2.642204,1],
[48.542634,2.642204,1],
[48.544819,2.625043,1],
[48.544819,2.625043,1],
[48.54482,2.625135,1],
[48.544864,2.625142,1],
[48.544864,2.625142,1],
[48.54482,2.625229,1],
[48.54482,2.625318,1],
[48.54482,2.625318,1],
[48.54482,2.625405,1],
[48.544865,2.625403,1],
[48.544865,2.625403,1],
[48.544361,2.625931,1],
[48.544361,2.625931,1],
[48.544482,2.625931,1],
[48.544541,2.62593,1],
[48.544675,2.62593,1],
[48.544726,2.62593,1],
[48.544726,2.62593,1],
[48.544781,2.625931,1],
[48.544781,2.625931,1],
[48.544371,2.624962,1],
[48.544371,2.624962,1],
[48.54437,2.625134,1],
[48.54437,2.62522,1],
[48.544371,2.625323,1],
[48.544371,2.625323,1],
[48.544394,2.625412,1],
[48.544394,2.625412,1],
[48.54517,2.624952,1],
[48.545171,2.625047,1],
[48.545171,2.625047,1],
[48.54517,2.625124,1],
[48.545182,2.625211,1],
[48.545202,2.625277,1],
[48.545202,2.625277,1],
[48.545144,2.625282,1],
[48.545144,2.625282,1],
[48.545087,2.625827,1],
[48.545087,2.625827,1],
[48.545046,2.625827,1],
[48.545046,2.625731,1],
[48.545388,2.63602,1],
[48.545388,2.63602,1],
[48.545556,2.635849,1],
[48.545567,2.636581,1],
[48.545567,2.636581,1],
[48.545716,2.635826,1],
[48.54019,2.636706,1],
[48.54019,2.636706,1],
[48.540169,2.636778,1],
[48.540018,2.636881,1],
[48.540103,2.636911,1],
[48.540103,2.636911,1],
[48.539915,2.637087,1],
[48.539915,2.637087,1],
[48.539892,2.637209,1],
[48.539892,2.637209,1],
[48.539925,2.637251,1],
[48.539925,2.637251,1],
[48.540002,2.637351,1],
[48.540002,2.637351,1],
[48.540034,2.637234,1],
[48.541771,2.636394,1],
[48.541771,2.636394,1],
[48.541869,2.636373,1],
[48.541869,2.636373,1],
[48.541929,2.636453,1],
[48.541846,2.636503,1],
[48.541846,2.636503,1],
[48.541972,2.636509,1],
[48.542084,2.636658,1],
[48.542084,2.636658,1],
[48.542072,2.636778,1],
[48.541962,2.636797,1],
[48.541962,2.636797,1],
[48.545767,2.638794,1],
[48.545767,2.638794,1],
[48.545635,2.638913,1]],{radius: 25}).addTo(map);

   /**  L.marker([48.5400906,2.6126114]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();**/
  }

}
