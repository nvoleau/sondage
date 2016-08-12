
import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

import {BaCard} from '../../theme/components';
import {RouteConfig} from '@angular/router-deprecated';

require('leaflet-map');
require('leaflet.heat');
require('style-loader!leaflet/dist/leaflet.css');
//var geo = require('./meesurseine.geojson');


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

getColor(d) {
    console.log(d);
    return  d > 100 ? '#bd0026' :
            d > 80 ? '#f03b20' :
           d > 60  ? '#fd8d3c' :
           d > 40  ? '#fecc5c' :
           d > 20  ? '#ffffb2' :
                      '#ffffb2';
}

  style(feature) {
  
    return {
        //fillColor: this.getColor(45),
        fillColor: '#f03b20',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
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
[48.539925,2.637251,0.3],
[48.539925,2.637251,0.3],
[48.540002,2.637351,0.3],
[48.540002,2.637351,0.3],
[48.540034,2.637234,0.3],
[48.541771,2.636394,0.3],
[48.541771,2.636394,0.3],
[48.541869,2.636373,0.3],
[48.541869,2.636373,0.3],
[48.541929,2.636453,0.3],
[48.541846,2.636503,0.3],
[48.541846,2.636503,0.3],
[48.541972,2.636509,0.3],
[48.542084,2.636658,0.3],
[48.542084,2.636658,0.3],
[48.542072,2.636778,0.3],
[48.541962,2.636797,0.3],
[48.541962,2.636797,0.3],
[48.545767,2.638794,0.3],
[48.545767,2.638794,0.3],
[48.545635,2.638913,0.3]],{radius: 25}).addTo(map);

   /**  L.marker([48.5400906,2.6126114]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();**/
      L.geoJson({
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "GID": 255331,
        "DEPCOM": 77285,
        "NOM_COM": "Le M\u00e9e-sur-Seine",
        "IRIS": "0103",
        "DCOMIRIS": 772850103,
        "NOM_IRIS": "COURTILLERAIES EST SUD",
        "TYP_IRIS": "H",
        "ORIGINE": null,
        "NOM_LONG": "Le M\u00e9e-sur-seine - Courtilleraies Est Sud",
        "DEP": 77,
        "NOM_POSTE": "LE MEE SUR SEINE",
        "CP": 77350,
        "LIBELLE": "LE MEE SUR SEINE",
		"MENAGES_NON_IMPOSES_2010":"38",
		"CHOMAGE_2012":10.4
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              2.6315937,
              48.5428407
            ],
            [
              2.6312098,
              48.539646
            ],
            [
              2.6295413,
              48.5380486
            ],
            [
              2.626201,
              48.5391626
            ],
            [
              2.6288093,
              48.5419504
            ],
            [
              2.6262605,
              48.5441194
            ],
            [
              2.6260983,
              48.545972
            ],
            [
              2.6211112,
              48.5461451
            ],
            [
              2.6211175,
              48.5462914
            ],
            [
              2.6236875,
              48.5462641
            ],
            [
              2.6238864,
              48.5484374
            ],
            [
              2.6250126,
              48.5481186
            ],
            [
              2.6294022,
              48.5443091
            ],
            [
              2.6318119,
              48.5445685
            ],
            [
              2.6315937,
              48.5428407
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "GID": 255332,
        "DEPCOM": 77285,
        "NOM_COM": "Le M\u00e9e-sur-Seine",
        "IRIS": "0101",
        "DCOMIRIS": 772850101,
        "NOM_IRIS": "COURTILLERAIES OUEST",
        "TYP_IRIS": "H",
        "ORIGINE": null,
        "NOM_LONG": "Le M\u00e9e-sur-seine - Courtilleraies Ouest",
        "DEP": 77,
        "NOM_POSTE": "LE MEE SUR SEINE",
        "CP": 77350,
        "LIBELLE": "LE MEE SUR SEINE",
		"MENAGES_NON_IMPOSES_2010":"43.3",
		"CHOMAGE_2012":16.2
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              2.6295413,
              48.5380486
            ],
            [
              2.621815,
              48.5349837
            ],
            [
              2.6194096,
              48.5341934
            ],
            [
              2.6179563,
              48.53396
            ],
            [
              2.6145163,
              48.5354583
            ],
            [
              2.6114346,
              48.5366396
            ],
            [
              2.6096769,
              48.5410257
            ],
            [
              2.6110966,
              48.5424939
            ],
            [
              2.6176666,
              48.5470926
            ],
            [
              2.621078,
              48.5462918
            ],
            [
              2.6211175,
              48.5462914
            ],
            [
              2.6211112,
              48.5461451
            ],
            [
              2.6171125,
              48.5464202
            ],
            [
              2.6189997,
              48.5440064
            ],
            [
              2.626201,
              48.5391626
            ],
            [
              2.6295413,
              48.5380486
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "GID": 255333,
        "DEPCOM": 77285,
        "NOM_COM": "Le M\u00e9e-sur-Seine",
        "IRIS": "0104",
        "DCOMIRIS": 772850104,
        "NOM_IRIS": "BOIS DE MARCHE MARAIS",
        "TYP_IRIS": "D",
        "ORIGINE": null,
        "NOM_LONG": "Le M\u00e9e-sur-seine - Bois De Marche Marais",
        "DEP": 77,
        "NOM_POSTE": "LE MEE SUR SEINE",
        "CP": 77350,
        "LIBELLE": "LE MEE SUR SEINE",
		"MENAGES_NON_IMPOSES_2010":"100",
		"CHOMAGE_2012":0
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              2.6401444,
              48.5484442
            ],
            [
              2.6350676,
              48.547853
            ],
            [
              2.6328548,
              48.5465418
            ],
            [
              2.6318119,
              48.5445685
            ],
            [
              2.6294022,
              48.5443091
            ],
            [
              2.6250126,
              48.5481186
            ],
            [
              2.6238864,
              48.5484374
            ],
            [
              2.6239013,
              48.5486011
            ],
            [
              2.6228241,
              48.5505906
            ],
            [
              2.6281113,
              48.5513905
            ],
            [
              2.6293686,
              48.5532615
            ],
            [
              2.6401556,
              48.5500835
            ],
            [
              2.6414573,
              48.5493693
            ],
            [
              2.6416021,
              48.5493235
            ],
            [
              2.6415614,
              48.5492671
            ],
            [
              2.6417162,
              48.5484129
            ],
            [
              2.6401444,
              48.5484442
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "GID": 255334,
        "DEPCOM": 77285,
        "NOM_COM": "Le M\u00e9e-sur-Seine",
        "IRIS": "0102",
        "DCOMIRIS": 772850102,
        "NOM_IRIS": "COURTILLERAIES CENTRE",
        "TYP_IRIS": "H",
        "ORIGINE": null,
        "NOM_LONG": "Le M\u00e9e-sur-seine - Courtilleraies Centre",
        "DEP": 77,
        "NOM_POSTE": "LE MEE SUR SEINE",
        "CP": 77350,
        "LIBELLE": "LE MEE SUR SEINE",
		"MENAGES_NON_IMPOSES_2010":"54.3",
		"CHOMAGE_2012":20.9
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              2.626201,
              48.5391626
            ],
            [
              2.6189997,
              48.5440064
            ],
            [
              2.6171125,
              48.5464202
            ],
            [
              2.6211112,
              48.5461451
            ],
            [
              2.6260983,
              48.545972
            ],
            [
              2.6262605,
              48.5441194
            ],
            [
              2.6288093,
              48.5419504
            ],
            [
              2.626201,
              48.5391626
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "GID": 255335,
        "DEPCOM": 77285,
        "NOM_COM": "Le M\u00e9e-sur-Seine",
        "IRIS": "0301",
        "DCOMIRIS": 772850301,
        "NOM_IRIS": "VILLAGE",
        "TYP_IRIS": "H",
        "ORIGINE": null,
        "NOM_LONG": "Le M\u00e9e-sur-seine - Village",
        "DEP": 77,
        "NOM_POSTE": "LE MEE SUR SEINE",
        "CP": 77350,
        "LIBELLE": "LE MEE SUR SEINE",
		"MENAGES_NON_IMPOSES_2010":"22.8",
		"CHOMAGE_2012":9
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              2.641411,
              48.5395602
            ],
            [
              2.6485646,
              48.5394107
            ],
            [
              2.648754,
              48.5393938
            ],
            [
              2.6486484,
              48.5388732
            ],
            [
              2.6512089,
              48.5381932
            ],
            [
              2.6514421,
              48.5372858
            ],
            [
              2.6472644,
              48.5361986
            ],
            [
              2.6441175,
              48.5346415
            ],
            [
              2.6409991,
              48.5329407
            ],
            [
              2.6373764,
              48.5303059
            ],
            [
              2.6319772,
              48.5275948
            ],
            [
              2.6279527,
              48.5316028
            ],
            [
              2.6248799,
              48.5292115
            ],
            [
              2.6162065,
              48.5269598
            ],
            [
              2.6087286,
              48.5307776
            ],
            [
              2.6182681,
              48.5338242
            ],
            [
              2.6179563,
              48.53396
            ],
            [
              2.6194096,
              48.5341934
            ],
            [
              2.621815,
              48.5349837
            ],
            [
              2.6295413,
              48.5380486
            ],
            [
              2.6366302,
              48.5393928
            ],
            [
              2.641411,
              48.5395602
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "GID": 255336,
        "DEPCOM": 77285,
        "NOM_COM": "Le M\u00e9e-sur-Seine",
        "IRIS": "0204",
        "DCOMIRIS": 772850204,
        "NOM_IRIS": "CROIX BLANCHE-PLEIN CIEL-SUD-EST",
        "TYP_IRIS": "H",
        "ORIGINE": null,
        "NOM_LONG": "Le M\u00e9e-sur-seine - Croix Blanche-plein Ciel-sud-est",
        "DEP": 77,
        "NOM_POSTE": "LE MEE SUR SEINE",
        "CP": 77350,
        "LIBELLE": "LE MEE SUR SEINE",
		"MENAGES_NON_IMPOSES_2010":"41.5",
		"CHOMAGE_2012":18.2
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              2.6402439,
              48.5438117
            ],
            [
              2.6438718,
              48.5442274
            ],
            [
              2.6449256,
              48.5446624
            ],
            [
              2.6460348,
              48.5449175
            ],
            [
              2.646522,
              48.545
            ],
            [
              2.6475235,
              48.5451559
            ],
            [
              2.6477304,
              48.5451913
            ],
            [
              2.6477837,
              48.5451799
            ],
            [
              2.6469425,
              48.5412054
            ],
            [
              2.6487862,
              48.5395527
            ],
            [
              2.648754,
              48.5393938
            ],
            [
              2.6485646,
              48.5394107
            ],
            [
              2.641411,
              48.5395602
            ],
            [
              2.6402439,
              48.5438117
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "GID": 255337,
        "DEPCOM": 77285,
        "NOM_COM": "Le M\u00e9e-sur-Seine",
        "IRIS": "0201",
        "DCOMIRIS": 772850201,
        "NOM_IRIS": "CROIX BLANCHE-PLEIN CIEL-NORD-OUEST",
        "TYP_IRIS": "H",
        "ORIGINE": null,
        "NOM_LONG": "Le M\u00e9e-sur-seine - Croix Blanche-plein Ciel-nord-ouest",
        "DEP": 77,
        "NOM_POSTE": "LE MEE SUR SEINE",
        "CP": 77350,
        "LIBELLE": "LE MEE SUR SEINE",
		"MENAGES_NON_IMPOSES_2010":"43.8",
		"CHOMAGE_2012":19
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              2.6402439,
              48.5438117
            ],
            [
              2.6315937,
              48.5428407
            ],
            [
              2.6318119,
              48.5445685
            ],
            [
              2.6328548,
              48.5465418
            ],
            [
              2.6350676,
              48.547853
            ],
            [
              2.6401444,
              48.5484442
            ],
            [
              2.6395309,
              48.547021
            ],
            [
              2.6402439,
              48.5438117
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "GID": 255338,
        "DEPCOM": 77285,
        "NOM_COM": "Le M\u00e9e-sur-Seine",
        "IRIS": "0202",
        "DCOMIRIS": 772850202,
        "NOM_IRIS": "CROIX BLANCHE-PLEIN CIEL-NORD EST",
        "TYP_IRIS": "H",
        "ORIGINE": null,
        "NOM_LONG": "Le M\u00e9e-sur-seine - Croix Blanche-plein Ciel-nord Est",
        "DEP": 77,
        "NOM_POSTE": "LE MEE SUR SEINE",
        "CP": 77350,
        "LIBELLE": "LE MEE SUR SEINE",
		"MENAGES_NON_IMPOSES_2010":"36.9",
		"CHOMAGE_2012":17.5
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              2.6416021,
              48.5493235
            ],
            [
              2.6434447,
              48.5487408
            ],
            [
              2.6444355,
              48.5467977
            ],
            [
              2.6476425,
              48.5452101
            ],
            [
              2.6477304,
              48.5451913
            ],
            [
              2.6475235,
              48.5451559
            ],
            [
              2.646522,
              48.545
            ],
            [
              2.6460348,
              48.5449175
            ],
            [
              2.6449256,
              48.5446624
            ],
            [
              2.6438718,
              48.5442274
            ],
            [
              2.6402439,
              48.5438117
            ],
            [
              2.6395309,
              48.547021
            ],
            [
              2.6401444,
              48.5484442
            ],
            [
              2.6417162,
              48.5484129
            ],
            [
              2.6415614,
              48.5492671
            ],
            [
              2.6416021,
              48.5493235
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "GID": 255339,
        "DEPCOM": 77285,
        "NOM_COM": "Le M\u00e9e-sur-Seine",
        "IRIS": "0203",
        "DCOMIRIS": 772850203,
        "NOM_IRIS": "CROIX BLANCHE-PLEIN CIEL-SUD-OUEST",
        "TYP_IRIS": "H",
        "ORIGINE": null,
        "NOM_LONG": "Le M\u00e9e-sur-seine - Croix Blanche-plein Ciel-sud-ouest",
        "DEP": 77,
        "NOM_POSTE": "LE MEE SUR SEINE",
        "CP": 77350,
        "LIBELLE": "LE MEE SUR SEINE",
		"MENAGES_NON_IMPOSES_2010":"38.7",
		"CHOMAGE_2012":18.7
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              2.6315937,
              48.5428407
            ],
            [
              2.6402439,
              48.5438117
            ],
            [
              2.641411,
              48.5395602
            ],
            [
              2.6366302,
              48.5393928
            ],
            [
              2.6295413,
              48.5380486
            ],
            [
              2.6312098,
              48.539646
            ],
            [
              2.6315937,
              48.5428407
            ]
          ]
        ]
      }
    }
  ]
},{style: this.style}).addTo(map);

  }




}
