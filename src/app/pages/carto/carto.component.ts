
import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

import {BaCard} from '../../theme/components';
import {RouteConfig} from '@angular/router-deprecated';

require('leaflet-map');
require('leaflet.heat');

//require('style-loader!leaflet.markercluster/dist/MarkerCluster.css');
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

getColor(b:number) {
    console.log(b);
    if(b > 100){return '#bd0026';}  
            else if(b > 80){return '#f03b20';}
             else if(b > 60){return '#fd8d3c';}
              else if(b > 40){return '#fecc5c';}
               else if(b > 20){return '#ffffb2';} else return '#fecc5c';
}

style(feature){
   return{fillColor: this.getColor(feature.properties.CHOMAGE_2012),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7}
}



  ngOnInit() {
 
  }


  ngAfterViewInit() {
     
        let el = this._elementRef.nativeElement.querySelector('.leaflet-maps');
     var map = L.map(el).setView([48.5400906,2.6126114], 13,[principale,sondage]);



    L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet';
    
    var principale = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

var baseMaps = {
    "Carte": principale
};

principale.addTo(map);

//L.control.zoom({ position: 'topright' }).addTo(map);

   /**  L.marker([48.5400906,2.6126114]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();**/
      var impot = L.geoJson({
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
    "COLOR":'#ffffb2',
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
    "COLOR":'#f03b20',
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
},{style:function(feature){
var test;

if(feature.properties.MENAGES_NON_IMPOSES_2010 > 101){test= '#bd0026';}  
            else if(feature.properties.MENAGES_NON_IMPOSES_2010 > 80){test='#f03b20';}
             else if(feature.properties.MENAGES_NON_IMPOSES_2010 > 60){test='#fd8d3c';}
              else if(feature.properties.MENAGES_NON_IMPOSES_2010 > 40){test='#fecc5c';}
               else if(feature.properties.MENAGES_NON_IMPOSES_2010 > 20){test='#ffffb2';};

  return{
    fillColor: test,
        weight: 2,
        opacity: 1,

        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7}
}}
  );//.addTo(map);



var sondage = L.heatLayer([[48.543801,2.642103,1],
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
[48.545635,2.638913,0.3]],{radius: 25});//.addTo(map);




var hommeIcon = L.icon({
    iconUrl: '/assets/img/1473255394_Map-Marker-Ball-Left-Azure.png',
    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
});
var femmeIcon = L.icon({
    iconUrl: '/assets/img/1473255385_Map-Marker-Ball-Left-Pink.png',
     iconSize:     [40, 40], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
});




var dixneufvingtcinq = L.layerGroup([L.marker([48.536262,2.62402],{icon: hommeIcon}),
L.marker([48.539145,2.623623], {icon: femmeIcon}),
L.marker([48.539615,2.622071], {icon: femmeIcon}),
L.marker([48.539615,2.622071], {icon: hommeIcon}),
L.marker([48.539538,2.623], {icon: hommeIcon}),
L.marker([48.535297,2.620797], {icon: femmeIcon}),
L.marker([48.538436,2.643579], {icon: femmeIcon}),
L.marker([48.537727,2.625809], {icon: hommeIcon}),
L.marker([48.539324,2.621889], {icon: femmeIcon}),
L.marker([48.539324,2.621889], {icon: femmeIcon}),
L.marker([48.538315,2.622285], {icon: femmeIcon}),
L.marker([48.537024,2.6211], {icon: hommeIcon}),
L.marker([48.537695,2.641745], {icon: hommeIcon}),
L.marker([48.535478,2.620816], {icon: femmeIcon}),
L.marker([48.537954,2.625458], {icon: hommeIcon}),
L.marker([48.539145,2.623623], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.539808,2.622543], {icon: femmeIcon}),
L.marker([48.538049,2.642603], {icon: femmeIcon}),
L.marker([48.538049,2.642603], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.540464,2.621557], {icon: femmeIcon}),
L.marker([48.540464,2.621557], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536055,2.624056], {icon: femmeIcon}),
L.marker([48.540384,2.621753], {icon: femmeIcon}),
L.marker([48.537695,2.641745], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.541879,2.638377], {icon: hommeIcon}),
L.marker([48.536075,2.624178], {icon: femmeIcon}),
L.marker([48.537334,2.626425], {icon: femmeIcon}),
L.marker([48.536055,2.624056], {icon: hommeIcon}),
L.marker([48.540176,2.621372], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536096,2.62402], {icon: femmeIcon}),
L.marker([48.536084,2.624169], {icon: femmeIcon}),
L.marker([48.536189,2.623942], {icon: femmeIcon}),
L.marker([48.537204,2.626631], {icon: hommeIcon}),
L.marker([48.537695,2.641745], {icon: hommeIcon}),
L.marker([48.535243,2.621227], {icon: femmeIcon}),
L.marker([48.537915,2.621306], {icon: femmeIcon}),
L.marker([48.535069,2.618443], {icon: femmeIcon}),
L.marker([48.535032,2.620303], {icon: hommeIcon}),
L.marker([48.535121,2.618419], {icon: femmeIcon}),
L.marker([48.537862,2.625607], {icon: femmeIcon}),
L.marker([48.537862,2.625607], {icon: femmeIcon}),
L.marker([48.535645,2.621485], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.537695,2.641745], {icon: femmeIcon}),
L.marker([48.54465,2.619197], {icon: hommeIcon}),
L.marker([48.54465,2.619197], {icon: hommeIcon}),
L.marker([48.537727,2.625809], {icon: hommeIcon}),
L.marker([48.538136,2.62516], {icon: femmeIcon}),
L.marker([48.538106,2.625209], {icon: hommeIcon}),
L.marker([48.538106,2.625209], {icon: hommeIcon}),
L.marker([48.535246,2.618522], {icon: femmeIcon}),
L.marker([48.536075,2.624178], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536138,2.620036], {icon: femmeIcon}),
L.marker([48.538706,2.624282], {icon: femmeIcon}),
L.marker([48.539385,2.622163], {icon: hommeIcon}),
L.marker([48.539385,2.622163], {icon: hommeIcon}),
L.marker([48.539385,2.622163], {icon: hommeIcon}),
L.marker([48.536568,2.623634], {icon: hommeIcon}),
L.marker([48.535326,2.62149], {icon: femmeIcon}),
L.marker([48.538633,2.623176], {icon: femmeIcon}),
L.marker([48.539577,2.622943], {icon: femmeIcon}),
L.marker([48.535243,2.621227], {icon: femmeIcon}),
L.marker([48.535243,2.621227], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.538207,2.643192], {icon: hommeIcon}),
L.marker([48.539084,2.621987], {icon: femmeIcon}),
L.marker([48.539084,2.621987], {icon: femmeIcon}),
L.marker([48.539084,2.621987], {icon: femmeIcon}),
L.marker([48.536093,2.624161], {icon: hommeIcon}),
L.marker([48.536093,2.624161], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.539672,2.621293], {icon: femmeIcon}),
L.marker([48.536606,2.62022], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.539564,2.621996], {icon: hommeIcon}),
L.marker([48.539564,2.621996], {icon: femmeIcon}),
L.marker([48.534991,2.618327], {icon: hommeIcon}),
L.marker([48.539145,2.623623], {icon: hommeIcon}),
L.marker([48.533339,2.635147], {icon: femmeIcon}),
L.marker([48.53885,2.622337], {icon: hommeIcon}),
L.marker([48.53885,2.622337], {icon: hommeIcon}),
L.marker([48.536088,2.624027], {icon: femmeIcon}),
L.marker([48.538633,2.623176], {icon: hommeIcon}),
L.marker([48.534373,2.617822], {icon: femmeIcon}),
L.marker([48.535371,2.618618], {icon: hommeIcon}),
L.marker([48.539681,2.622166], {icon: femmeIcon}),
L.marker([48.539681,2.622166], {icon: hommeIcon}),
L.marker([48.538611,2.623936], {icon: hommeIcon}),
L.marker([48.535371,2.618618], {icon: femmeIcon}),
L.marker([48.538611,2.623936], {icon: hommeIcon}),
L.marker([48.534618,2.618029], {icon: hommeIcon}),
L.marker([48.540289,2.621895], {icon: hommeIcon}),
L.marker([48.539254,2.621987], {icon: femmeIcon}),
L.marker([48.536084,2.624169], {icon: femmeIcon}),
L.marker([48.535243,2.621227], {icon: hommeIcon}),
L.marker([48.535633,2.621827], {icon: hommeIcon}),
L.marker([48.537692,2.622859], {icon: hommeIcon}),
L.marker([48.536174,2.623955], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536098,2.624157], {icon: hommeIcon}),
L.marker([48.537727,2.625809], {icon: hommeIcon}),
L.marker([48.538728,2.622463], {icon: hommeIcon}),
L.marker([48.538728,2.622463], {icon: femmeIcon}),
L.marker([48.536071,2.624041], {icon: hommeIcon}),
L.marker([48.536262,2.62402], {icon: hommeIcon}),
L.marker([48.536262,2.62402], {icon: femmeIcon}),
L.marker([48.536107,2.62415], {icon: hommeIcon}),
L.marker([48.53768,2.64456], {icon: hommeIcon}),
L.marker([48.53768,2.64456], {icon: hommeIcon}),
L.marker([48.539349,2.621844], {icon: femmeIcon}),
L.marker([48.533408,2.632685], {icon: hommeIcon}),
L.marker([48.536098,2.624157], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.539299,2.623361], {icon: hommeIcon}),
L.marker([48.539299,2.623361], {icon: hommeIcon}),
L.marker([48.537893,2.625557], {icon: femmeIcon}),
L.marker([48.538106,2.625209], {icon: hommeIcon}),
L.marker([48.536681,2.620864], {icon: femmeIcon}),
L.marker([48.536492,2.619937], {icon: hommeIcon}),
L.marker([48.537499,2.622745], {icon: hommeIcon}),
L.marker([48.537499,2.622745], {icon: hommeIcon}),
L.marker([48.537975,2.622079], {icon: femmeIcon}),
L.marker([48.53617,2.619269], {icon: femmeIcon}),
L.marker([48.53617,2.619269], {icon: hommeIcon}),
L.marker([48.537846,2.622045], {icon: femmeIcon}),
L.marker([48.539081,2.622898], {icon: femmeIcon}),
L.marker([48.536508,2.620032], {icon: hommeIcon}),
L.marker([48.537543,2.621558], {icon: hommeIcon}),
L.marker([48.536098,2.624157], {icon: femmeIcon}),
L.marker([48.536096,2.62402], {icon: femmeIcon}),
L.marker([48.536262,2.62402], {icon: hommeIcon}),
L.marker([48.539385,2.622429], {icon: hommeIcon}),
L.marker([48.539385,2.622429], {icon: hommeIcon}),
L.marker([48.538466,2.621706], {icon: hommeIcon}),
L.marker([48.535567,2.622109], {icon: femmeIcon}),
L.marker([48.537862,2.625607], {icon: femmeIcon}),
L.marker([48.535406,2.621658], {icon: femmeIcon}),
L.marker([48.535406,2.621658], {icon: hommeIcon}),
L.marker([48.537862,2.625607], {icon: femmeIcon}),
L.marker([48.538633,2.623176], {icon: hommeIcon}),
L.marker([48.538419,2.621886], {icon: hommeIcon}),
L.marker([48.538419,2.621886], {icon: hommeIcon}),
L.marker([48.539617,2.62288], {icon: hommeIcon}),
L.marker([48.539617,2.62288], {icon: femmeIcon}),
L.marker([48.538633,2.623176], {icon: hommeIcon}),
L.marker([48.535757,2.620712], {icon: femmeIcon}),
L.marker([48.535764,2.62115], {icon: hommeIcon}),
L.marker([48.539623,2.621303], {icon: hommeIcon}),
L.marker([48.539623,2.621303], {icon: hommeIcon}),
L.marker([48.539623,2.621303], {icon: hommeIcon}),
L.marker([48.538587,2.623075], {icon: femmeIcon}),
L.marker([48.538587,2.623075], {icon: hommeIcon}),
L.marker([48.538633,2.623176], {icon: hommeIcon}),
L.marker([48.536189,2.623942], {icon: hommeIcon}),
L.marker([48.536189,2.623942], {icon: hommeIcon}),
L.marker([48.536606,2.62022], {icon: hommeIcon}),
L.marker([48.539323,2.622461], {icon: femmeIcon}),
L.marker([48.537029,2.622664], {icon: hommeIcon}),
L.marker([48.537613,2.62293], {icon: femmeIcon}),
L.marker([48.534438,2.618601], {icon: femmeIcon}),
L.marker([48.534438,2.618601], {icon: hommeIcon}),
L.marker([48.535606,2.621545], {icon: hommeIcon}),
L.marker([48.534729,2.618119], {icon: hommeIcon}),
L.marker([48.538642,2.621883], {icon: hommeIcon}),
L.marker([48.537334,2.626425], {icon: femmeIcon}),
L.marker([48.536107,2.62415], {icon: hommeIcon}),
L.marker([48.536057,2.619809], {icon: hommeIcon}),
L.marker([48.536057,2.619809], {icon: hommeIcon}),
L.marker([48.536075,2.624178], {icon: hommeIcon}),
L.marker([48.536075,2.624178], {icon: hommeIcon}),
L.marker([48.537923,2.625507], {icon: femmeIcon}),
L.marker([48.536089,2.624165], {icon: hommeIcon}),
L.marker([48.539355,2.622413], {icon: femmeIcon}),
L.marker([48.537692,2.622859], {icon: femmeIcon}),
L.marker([48.537923,2.625507], {icon: hommeIcon}),
L.marker([48.53608,2.624174], {icon: femmeIcon}),
L.marker([48.536189,2.623942], {icon: femmeIcon}),
L.marker([48.536416,2.620473], {icon: femmeIcon}),
L.marker([48.535772,2.62129], {icon: femmeIcon}),
L.marker([48.537301,2.621285], {icon: hommeIcon}),
L.marker([48.537636,2.621633], {icon: hommeIcon}),
L.marker([48.535967,2.619905], {icon: hommeIcon}),
L.marker([48.539145,2.623623], {icon: femmeIcon}),
L.marker([48.53608,2.624174], {icon: femmeIcon}),
L.marker([48.538587,2.623075], {icon: hommeIcon}),
L.marker([48.537727,2.625809], {icon: femmeIcon}),
L.marker([48.537727,2.625809], {icon: hommeIcon}),
L.marker([48.537988,2.621888], {icon: hommeIcon}),
L.marker([48.537988,2.621888], {icon: femmeIcon}),
L.marker([48.537988,2.621888], {icon: femmeIcon}),
L.marker([48.537988,2.621888], {icon: femmeIcon}),
L.marker([48.537052,2.621865], {icon: hommeIcon}),
L.marker([48.535396,2.620325], {icon: femmeIcon}),
L.marker([48.536865,2.621632], {icon: femmeIcon}),
L.marker([48.539145,2.623623], {icon: femmeIcon}),
L.marker([48.536989,2.622558], {icon: hommeIcon}),
L.marker([48.535917,2.620091], {icon: hommeIcon}),
L.marker([48.53527,2.62087], {icon: hommeIcon}),
L.marker([48.53527,2.62087], {icon: femmeIcon}),
L.marker([48.537862,2.625607], {icon: femmeIcon}),
L.marker([48.537862,2.625607], {icon: femmeIcon}),
L.marker([48.537923,2.625507], {icon: femmeIcon}),
L.marker([48.536098,2.624157], {icon: femmeIcon}),
L.marker([48.536098,2.624157], {icon: femmeIcon}),
L.marker([48.537692,2.622859], {icon: hommeIcon}),
L.marker([48.536096,2.62402], {icon: femmeIcon}),
L.marker([48.538196,2.622174], {icon: femmeIcon}),
L.marker([48.538196,2.622174], {icon: femmeIcon}),
L.marker([48.538045,2.625308], {icon: femmeIcon}),
L.marker([48.536055,2.624056], {icon: hommeIcon}),
L.marker([48.536102,2.624153], {icon: femmeIcon}),
L.marker([48.536102,2.624153], {icon: femmeIcon}),
L.marker([48.536102,2.624153], {icon: hommeIcon}),
L.marker([48.537171,2.622021], {icon: femmeIcon}),
L.marker([48.539547,2.621892], {icon: femmeIcon}),
L.marker([48.537992,2.621437], {icon: femmeIcon}),
L.marker([48.537992,2.621437], {icon: hommeIcon}),
L.marker([48.535864,2.620881], {icon: femmeIcon}),
L.marker([48.535864,2.620881], {icon: hommeIcon}),
L.marker([48.536096,2.62402], {icon: hommeIcon}),
L.marker([48.535666,2.621329], {icon: femmeIcon}),
L.marker([48.53547,2.619021], {icon: hommeIcon}),
L.marker([48.53467,2.618133], {icon: hommeIcon}),
L.marker([48.53467,2.618133], {icon: hommeIcon}),
L.marker([48.538173,2.622247], {icon: hommeIcon}),
L.marker([48.536189,2.623942], {icon: femmeIcon}),
L.marker([48.539093,2.622812], {icon: hommeIcon}),
L.marker([48.536088,2.624027], {icon: hommeIcon}),
L.marker([48.537269,2.626527], {icon: hommeIcon}),
L.marker([48.536075,2.624178], {icon: femmeIcon}),
L.marker([48.536075,2.624178], {icon: femmeIcon}),
L.marker([48.536089,2.624165], {icon: hommeIcon}),
L.marker([48.537269,2.626527], {icon: hommeIcon}),
L.marker([48.537269,2.626527], {icon: femmeIcon}),
L.marker([48.537394,2.62246], {icon: femmeIcon}),
L.marker([48.537394,2.62246], {icon: hommeIcon}),
L.marker([48.537954,2.625458], {icon: hommeIcon}),
L.marker([48.537954,2.625458], {icon: femmeIcon}),
L.marker([48.538633,2.623176], {icon: femmeIcon}),
L.marker([48.538106,2.625209], {icon: hommeIcon}),
L.marker([48.537692,2.622859], {icon: hommeIcon}),
L.marker([48.536665,2.620265], {icon: hommeIcon}),
L.marker([48.537955,2.621531], {icon: femmeIcon}),
L.marker([48.537984,2.625407], {icon: femmeIcon}),
L.marker([48.53753,2.626116], {icon: hommeIcon})]);




var vingtsixquarante= L.layerGroup([L.marker([48.538633,2.623176], {icon: hommeIcon}),
L.marker([48.535406,2.621658], {icon: hommeIcon}),
L.marker([48.533365,2.632518], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.539434,2.645573], {icon: hommeIcon}),
L.marker([48.537727,2.625809], {icon: femmeIcon}),
L.marker([48.535772,2.62129], {icon: hommeIcon}),
L.marker([48.535772,2.62129], {icon: hommeIcon}),
L.marker([48.535772,2.62129], {icon: hommeIcon}),
L.marker([48.535772,2.62129], {icon: hommeIcon}),
L.marker([48.54722,2.625347], {icon: femmeIcon}),
L.marker([48.537269,2.626527], {icon: femmeIcon}),
L.marker([48.537269,2.626527], {icon: femmeIcon}),
L.marker([48.535432,2.621725], {icon: femmeIcon}),
L.marker([48.536055,2.624056], {icon: hommeIcon}),
L.marker([48.539547,2.621892], {icon: hommeIcon}),
L.marker([48.539547,2.621892], {icon: hommeIcon}),
L.marker([48.537727,2.625809], {icon: hommeIcon}),
L.marker([48.53529,2.621352], {icon: hommeIcon}),
L.marker([48.539349,2.621844], {icon: femmeIcon}),
L.marker([48.537024,2.6211], {icon: femmeIcon}),
L.marker([48.535569,2.618947], {icon: femmeIcon}),
L.marker([48.535823,2.621217], {icon: hommeIcon}),
L.marker([48.538315,2.622285], {icon: hommeIcon}),
L.marker([48.536303,2.638249], {icon: femmeIcon}),
L.marker([48.537024,2.6211], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536245,2.63548], {icon: femmeIcon}),
L.marker([48.536245,2.63548], {icon: hommeIcon}),
L.marker([48.536245,2.63548], {icon: femmeIcon}),
L.marker([48.536245,2.63548], {icon: hommeIcon}),
L.marker([48.536245,2.63548], {icon: femmeIcon}),
L.marker([48.536245,2.63548], {icon: hommeIcon}),
L.marker([48.536245,2.63548], {icon: hommeIcon}),
L.marker([48.536245,2.63548], {icon: hommeIcon}),
L.marker([48.537269,2.626527], {icon: femmeIcon}),
L.marker([48.535478,2.620816], {icon: hommeIcon}),
L.marker([48.535478,2.620816], {icon: femmeIcon}),
L.marker([48.536055,2.624056], {icon: hommeIcon}),
L.marker([48.535585,2.622156], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.537727,2.625809], {icon: femmeIcon}),
L.marker([48.539027,2.622015], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.53942,2.623181], {icon: hommeIcon}),
L.marker([48.538045,2.625308], {icon: femmeIcon}),
L.marker([48.53942,2.623181], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536107,2.62415], {icon: femmeIcon}),
L.marker([48.538633,2.623176], {icon: femmeIcon}),
L.marker([48.536788,2.620401], {icon: femmeIcon}),
L.marker([48.535624,2.62226], {icon: hommeIcon}),
L.marker([48.539154,2.622778], {icon: hommeIcon}),
L.marker([48.539154,2.622778], {icon: femmeIcon}),
L.marker([48.539154,2.622778], {icon: hommeIcon}),
L.marker([48.537393,2.622633], {icon: hommeIcon}),
L.marker([48.537393,2.622633], {icon: hommeIcon}),
L.marker([48.537393,2.622633], {icon: hommeIcon}),
L.marker([48.534942,2.618344], {icon: femmeIcon}),
L.marker([48.534942,2.618344], {icon: femmeIcon}),
L.marker([48.539324,2.621889], {icon: hommeIcon}),
L.marker([48.539324,2.621889], {icon: femmeIcon}),
L.marker([48.539324,2.621889], {icon: hommeIcon}),
L.marker([48.536174,2.623955], {icon: hommeIcon}),
L.marker([48.537465,2.62622], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.531713,2.616086], {icon: femmeIcon}),
L.marker([48.538587,2.624403], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.537695,2.641745], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.54006,2.622238], {icon: hommeIcon}),
L.marker([48.537297,2.643842], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.540176,2.621372], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.537596,2.626014], {icon: femmeIcon}),
L.marker([48.536189,2.623942], {icon: femmeIcon}),
L.marker([48.537915,2.621306], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.537204,2.626631], {icon: hommeIcon}),
L.marker([48.537893,2.625557], {icon: femmeIcon}),
L.marker([48.534233,2.626091], {icon: femmeIcon}),
L.marker([48.533331,2.626098], {icon: hommeIcon}),
L.marker([48.536262,2.62402], {icon: femmeIcon}),
L.marker([48.537695,2.641745], {icon: hommeIcon}),
L.marker([48.535069,2.618443], {icon: hommeIcon}),
L.marker([48.535069,2.618443], {icon: hommeIcon}),
L.marker([48.537715,2.620924], {icon: femmeIcon}),
L.marker([48.537269,2.626527], {icon: hommeIcon}),
L.marker([48.536405,2.638626], {icon: femmeIcon}),
L.marker([48.536405,2.638626], {icon: hommeIcon}),
L.marker([48.535456,2.620399], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.539057,2.621964], {icon: femmeIcon}),
L.marker([48.536093,2.624161], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.538706,2.624282], {icon: hommeIcon}),
L.marker([48.535645,2.621485], {icon: femmeIcon}),
L.marker([48.535628,2.618817], {icon: femmeIcon}),
L.marker([48.535628,2.618817], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536107,2.62415], {icon: femmeIcon}),
L.marker([48.539695,2.622764], {icon: femmeIcon}),
L.marker([48.536958,2.621779], {icon: hommeIcon}),
L.marker([48.536958,2.621779], {icon: hommeIcon}),
L.marker([48.539695,2.622764], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.535483,2.621857], {icon: femmeIcon}),
L.marker([48.535483,2.621857], {icon: femmeIcon}),
L.marker([48.534532,2.618024], {icon: femmeIcon}),
L.marker([48.537695,2.641745], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.54006,2.622238], {icon: femmeIcon}),
L.marker([48.538136,2.62516], {icon: hommeIcon}),
L.marker([48.534482,2.617928], {icon: hommeIcon}),
L.marker([48.536262,2.62402], {icon: hommeIcon}),
L.marker([48.537695,2.641745], {icon: femmeIcon}),
L.marker([48.53272,2.63091], {icon: hommeIcon}),
L.marker([48.53272,2.63091], {icon: hommeIcon}),
L.marker([48.542333,2.644433], {icon: hommeIcon}),
L.marker([48.542333,2.644433], {icon: hommeIcon}),
L.marker([48.542333,2.644433], {icon: femmeIcon}),
L.marker([48.536075,2.624178], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.538106,2.625209], {icon: femmeIcon}),
L.marker([48.538706,2.624282], {icon: femmeIcon}),
L.marker([48.538706,2.624282], {icon: femmeIcon}),
L.marker([48.537393,2.622376], {icon: femmeIcon}),
L.marker([48.538587,2.623075], {icon: hommeIcon}),
L.marker([48.536421,2.620651], {icon: hommeIcon}),
L.marker([48.537692,2.622859], {icon: femmeIcon}),
L.marker([48.538724,2.621658], {icon: hommeIcon}),
L.marker([48.538724,2.621658], {icon: hommeIcon}),
L.marker([48.538724,2.621658], {icon: femmeIcon}),
L.marker([48.538724,2.621658], {icon: femmeIcon}),
L.marker([48.53495,2.620217], {icon: hommeIcon}),
L.marker([48.539028,2.62291], {icon: femmeIcon}),
L.marker([48.537476,2.62268], {icon: femmeIcon}),
L.marker([48.537613,2.62293], {icon: hommeIcon}),
L.marker([48.537888,2.621206], {icon: hommeIcon}),
L.marker([48.537024,2.6211], {icon: femmeIcon}),
L.marker([48.537613,2.62293], {icon: hommeIcon}),
L.marker([48.538015,2.625358], {icon: hommeIcon}),
L.marker([48.537193,2.621146], {icon: femmeIcon}),
L.marker([48.537193,2.621146], {icon: hommeIcon}),
L.marker([48.536477,2.619852], {icon: hommeIcon}),
L.marker([48.536055,2.624056], {icon: hommeIcon}),
L.marker([48.539726,2.622671], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536096,2.62402], {icon: hommeIcon}),
L.marker([48.536096,2.62402], {icon: hommeIcon}),
L.marker([48.537385,2.621646], {icon: femmeIcon}),
L.marker([48.537596,2.626014], {icon: hommeIcon}),
L.marker([48.537893,2.625557], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536262,2.62402], {icon: femmeIcon}),
L.marker([48.537971,2.642604], {icon: hommeIcon}),
L.marker([48.539084,2.621987], {icon: femmeIcon}),
L.marker([48.539084,2.621987], {icon: hommeIcon}),
L.marker([48.537695,2.641745], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.535953,2.628714], {icon: hommeIcon}),
L.marker([48.535953,2.628714], {icon: hommeIcon}),
L.marker([48.537695,2.641745], {icon: hommeIcon}),
L.marker([48.537695,2.641745], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.538106,2.625209], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536189,2.623942], {icon: femmeIcon}),
L.marker([48.534991,2.618327], {icon: femmeIcon}),
L.marker([48.534991,2.618327], {icon: femmeIcon}),
L.marker([48.534991,2.618327], {icon: hommeIcon}),
L.marker([48.539145,2.623623], {icon: hommeIcon}),
L.marker([48.534844,2.619282], {icon: femmeIcon}),
L.marker([48.534844,2.619282], {icon: femmeIcon}),
L.marker([48.534844,2.619282], {icon: hommeIcon}),
L.marker([48.534844,2.619282], {icon: femmeIcon}),
L.marker([48.536098,2.624157], {icon: hommeIcon}),
L.marker([48.538191,2.624677], {icon: hommeIcon}),
L.marker([48.53677,2.621545], {icon: femmeIcon}),
L.marker([48.539086,2.621968], {icon: femmeIcon}),
L.marker([48.534361,2.631372], {icon: femmeIcon}),
L.marker([48.534361,2.631372], {icon: femmeIcon}),
L.marker([48.534361,2.631372], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.537695,2.641745], {icon: femmeIcon}),
L.marker([48.539503,2.621828], {icon: hommeIcon}),
L.marker([48.539458,2.621761], {icon: hommeIcon}),
L.marker([48.53885,2.622337], {icon: femmeIcon}),
L.marker([48.540017,2.622293], {icon: femmeIcon}),
L.marker([48.538388,2.624506], {icon: femmeIcon}),
L.marker([48.538388,2.624506], {icon: femmeIcon}),
L.marker([48.536462,2.619778], {icon: femmeIcon}),
L.marker([48.537502,2.622184], {icon: hommeIcon}),
L.marker([48.537502,2.622184], {icon: femmeIcon}),
L.marker([48.534373,2.617822], {icon: femmeIcon}),
L.marker([48.534618,2.618029], {icon: femmeIcon}),
L.marker([48.539681,2.622166], {icon: hommeIcon}),
L.marker([48.539027,2.622015], {icon: femmeIcon}),
L.marker([48.539681,2.622166], {icon: hommeIcon}),
L.marker([48.539027,2.622015], {icon: femmeIcon}),
L.marker([48.539027,2.622015], {icon: hommeIcon}),
L.marker([48.539027,2.622015], {icon: femmeIcon}),
L.marker([48.53753,2.626116], {icon: femmeIcon}),
L.marker([48.540289,2.621895], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.535633,2.621827], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.538819,2.634587], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.537695,2.641745], {icon: hommeIcon}),
L.marker([48.537692,2.622859], {icon: femmeIcon}),
L.marker([48.537695,2.641745], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.537204,2.626631], {icon: femmeIcon}),
L.marker([48.537692,2.622859], {icon: hommeIcon}),
L.marker([48.537692,2.622859], {icon: hommeIcon}),
L.marker([48.537954,2.625458], {icon: femmeIcon}),
L.marker([48.538136,2.62516], {icon: femmeIcon}),
L.marker([48.535381,2.621594], {icon: hommeIcon}),
L.marker([48.536071,2.624041], {icon: hommeIcon}),
L.marker([48.539984,2.622352], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536978,2.632366], {icon: femmeIcon}),
L.marker([48.533331,2.626098], {icon: femmeIcon}),
L.marker([48.537893,2.625557], {icon: hommeIcon}),
L.marker([48.545419,2.638084], {icon: hommeIcon}),
L.marker([48.538136,2.62516], {icon: femmeIcon}),
L.marker([48.53825,2.624833], {icon: hommeIcon}),
L.marker([48.537893,2.625557], {icon: femmeIcon}),
L.marker([48.535456,2.620399], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.538315,2.622285], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.533408,2.632685], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: hommeIcon}),
L.marker([48.538507,2.621645], {icon: femmeIcon}),
L.marker([48.536809,2.639738], {icon: femmeIcon}),
L.marker([48.537984,2.625407], {icon: femmeIcon}),
L.marker([48.536174,2.623955], {icon: hommeIcon}),
L.marker([48.539299,2.623361], {icon: hommeIcon}),
L.marker([48.539299,2.623361], {icon: femmeIcon}),
L.marker([48.539299,2.623361], {icon: femmeIcon}),
L.marker([48.539299,2.623361], {icon: femmeIcon}),
L.marker([48.538136,2.62516], {icon: femmeIcon}),
L.marker([48.538587,2.623075], {icon: hommeIcon}),
L.marker([48.535966,2.622443], {icon: hommeIcon}),
L.marker([48.537923,2.625507], {icon: femmeIcon}),
L.marker([48.536794,2.62089], {icon: hommeIcon}),
L.marker([48.536093,2.624161], {icon: hommeIcon}),
L.marker([48.538136,2.62516], {icon: femmeIcon}),
L.marker([48.537465,2.62622], {icon: femmeIcon}),
L.marker([48.537727,2.625809], {icon: hommeIcon}),
L.marker([48.538492,2.622015], {icon: hommeIcon}),
L.marker([48.537023,2.622681], {icon: femmeIcon}),
L.marker([48.539043,2.62205], {icon: hommeIcon}),
L.marker([48.535624,2.62226], {icon: femmeIcon}),
L.marker([48.537893,2.625557], {icon: femmeIcon}),
L.marker([48.538164,2.624603], {icon: femmeIcon}),
L.marker([48.535318,2.621421], {icon: hommeIcon}),
L.marker([48.535318,2.621421], {icon: femmeIcon}),
L.marker([48.535318,2.621421], {icon: femmeIcon}),
L.marker([48.537107,2.621989], {icon: hommeIcon}),
L.marker([48.537107,2.621989], {icon: femmeIcon}),
L.marker([48.536055,2.624056], {icon: hommeIcon}),
L.marker([48.538106,2.625209], {icon: femmeIcon}),
L.marker([48.538106,2.625209], {icon: femmeIcon}),
L.marker([48.537954,2.625458], {icon: hommeIcon}),
L.marker([48.536385,2.620769], {icon: hommeIcon}),
L.marker([48.536385,2.620769], {icon: hommeIcon}),
L.marker([48.536741,2.621057], {icon: femmeIcon}),
L.marker([48.538136,2.62516], {icon: femmeIcon}),
L.marker([48.537846,2.622045], {icon: hommeIcon}),
L.marker([48.537893,2.625557], {icon: femmeIcon}),
L.marker([48.53597,2.620831], {icon: femmeIcon}),
L.marker([48.538633,2.623176], {icon: hommeIcon}),
L.marker([48.535723,2.622475], {icon: femmeIcon}),
L.marker([48.535723,2.622475], {icon: femmeIcon}),
L.marker([48.535396,2.619203], {icon: femmeIcon}),
L.marker([48.536098,2.624157], {icon: femmeIcon}),
L.marker([48.537923,2.625507], {icon: hommeIcon}),
L.marker([48.536508,2.620032], {icon: hommeIcon}),
L.marker([48.536402,2.619453], {icon: hommeIcon}),
L.marker([48.537613,2.62293], {icon: hommeIcon}),
L.marker([48.534306,2.618217], {icon: femmeIcon}),
L.marker([48.534306,2.618217], {icon: femmeIcon}),
L.marker([48.537613,2.62293], {icon: hommeIcon}),
L.marker([48.538587,2.623075], {icon: hommeIcon}),
L.marker([48.538587,2.623075], {icon: femmeIcon}),
L.marker([48.538587,2.623075], {icon: hommeIcon}),
L.marker([48.536262,2.62402], {icon: femmeIcon}),
L.marker([48.539385,2.622429], {icon: femmeIcon}),
L.marker([48.535629,2.619967], {icon: hommeIcon}),
L.marker([48.535629,2.619967], {icon: hommeIcon}),
L.marker([48.535874,2.622536], {icon: hommeIcon}),
L.marker([48.536507,2.619799], {icon: femmeIcon}),
L.marker([48.536189,2.623942], {icon: femmeIcon}),
L.marker([48.535211,2.62096], {icon: hommeIcon}),
L.marker([48.538466,2.621706], {icon: femmeIcon}),
L.marker([48.538466,2.621706], {icon: femmeIcon}),
L.marker([48.535567,2.622109], {icon: hommeIcon}),
L.marker([48.537984,2.625407], {icon: femmeIcon}),
L.marker([48.535629,2.619967], {icon: femmeIcon}),
L.marker([48.538587,2.623075], {icon: femmeIcon}),
L.marker([48.536189,2.623942], {icon: femmeIcon}),
L.marker([48.538633,2.623176], {icon: femmeIcon}),
L.marker([48.537334,2.626425], {icon: femmeIcon}),
L.marker([48.537727,2.625809], {icon: femmeIcon}),
L.marker([48.539617,2.62288], {icon: hommeIcon}),
L.marker([48.536288,2.619033], {icon: hommeIcon}),
L.marker([48.536477,2.619852], {icon: femmeIcon}),
L.marker([48.538633,2.623176], {icon: femmeIcon}),
L.marker([48.535757,2.620712], {icon: hommeIcon}),
L.marker([48.535757,2.620712], {icon: hommeIcon}),
L.marker([48.535757,2.620712], {icon: hommeIcon}),
L.marker([48.537269,2.626527], {icon: femmeIcon}),
L.marker([48.537269,2.626527], {icon: femmeIcon}),
L.marker([48.537727,2.625809], {icon: femmeIcon}),
L.marker([48.538754,2.621605], {icon: femmeIcon}),
L.marker([48.539057,2.622868], {icon: femmeIcon}),
L.marker([48.539057,2.622868], {icon: hommeIcon}),
L.marker([48.536289,2.619239], {icon: femmeIcon}),
L.marker([48.539323,2.622461], {icon: femmeIcon}),
L.marker([48.536071,2.624041], {icon: hommeIcon}),
L.marker([48.539323,2.622461], {icon: hommeIcon}),
L.marker([48.539323,2.622461], {icon: hommeIcon}),
L.marker([48.539323,2.622461], {icon: femmeIcon}),
L.marker([48.536893,2.622691], {icon: hommeIcon}),
L.marker([48.537029,2.622664], {icon: femmeIcon}),
L.marker([48.537029,2.622664], {icon: hommeIcon}),
L.marker([48.537692,2.622859], {icon: hommeIcon}),
L.marker([48.537613,2.62293], {icon: femmeIcon}),
L.marker([48.537204,2.626631], {icon: femmeIcon}),
L.marker([48.535606,2.621545], {icon: hommeIcon}),
L.marker([48.535606,2.621545], {icon: femmeIcon}),
L.marker([48.537613,2.62293], {icon: femmeIcon}),
L.marker([48.537692,2.622859], {icon: hommeIcon}),
L.marker([48.537846,2.622045], {icon: hommeIcon}),
L.marker([48.537596,2.626014], {icon: femmeIcon}),
L.marker([48.538315,2.622285], {icon: hommeIcon}),
L.marker([48.538315,2.622285], {icon: femmeIcon}),
L.marker([48.536525,2.619301], {icon: hommeIcon}),
L.marker([48.538642,2.621883], {icon: femmeIcon}),
L.marker([48.538642,2.621883], {icon: femmeIcon}),
L.marker([48.537269,2.626527], {icon: hommeIcon}),
L.marker([48.538834,2.622306], {icon: hommeIcon}),
L.marker([48.538834,2.622306], {icon: femmeIcon}),
L.marker([48.536093,2.624161], {icon: hommeIcon}),
L.marker([48.536098,2.624157], {icon: femmeIcon}),
L.marker([48.537692,2.622859], {icon: hommeIcon}),
L.marker([48.537893,2.625557], {icon: hommeIcon}),
L.marker([48.536539,2.619486], {icon: hommeIcon}),
L.marker([48.537828,2.622136], {icon: hommeIcon}),
L.marker([48.537923,2.625507], {icon: femmeIcon}),
L.marker([48.538106,2.625209], {icon: hommeIcon}),
L.marker([48.536437,2.6204], {icon: hommeIcon}),
L.marker([48.535371,2.619176], {icon: hommeIcon}),
L.marker([48.537984,2.625407], {icon: hommeIcon}),
L.marker([48.534868,2.619975], {icon: femmeIcon}),
L.marker([48.534868,2.619975], {icon: hommeIcon}),
L.marker([48.534704,2.618996], {icon: femmeIcon}),
L.marker([48.534868,2.619975], {icon: hommeIcon}),
L.marker([48.537955,2.621333], {icon: hommeIcon}),
L.marker([48.537955,2.621333], {icon: femmeIcon}),
L.marker([48.537955,2.621333], {icon: femmeIcon}),
L.marker([48.539503,2.621828], {icon: femmeIcon}),
L.marker([48.537561,2.620959], {icon: hommeIcon}),
L.marker([48.537561,2.620959], {icon: femmeIcon}),
L.marker([48.534352,2.617809], {icon: hommeIcon}),
L.marker([48.542105,2.625214], {icon: femmeIcon}),
L.marker([48.537893,2.625557], {icon: femmeIcon}),
L.marker([48.537984,2.625407], {icon: femmeIcon}),
L.marker([48.535381,2.621594], {icon: femmeIcon}),
L.marker([48.535913,2.621971], {icon: hommeIcon}),
L.marker([48.538315,2.622285], {icon: femmeIcon}),
L.marker([48.536373,2.619295], {icon: hommeIcon}),
L.marker([48.538106,2.625209], {icon: femmeIcon}),
L.marker([48.537613,2.62293], {icon: femmeIcon}),
L.marker([48.53749,2.622568], {icon: femmeIcon}),
L.marker([48.53749,2.622568], {icon: femmeIcon}),
L.marker([48.536093,2.624161], {icon: femmeIcon}),
L.marker([48.536088,2.624027], {icon: femmeIcon}),
L.marker([48.537176,2.621372], {icon: femmeIcon}),
L.marker([48.539727,2.621144], {icon: femmeIcon}),
L.marker([48.539727,2.621144], {icon: femmeIcon}),
L.marker([48.536262,2.62402], {icon: femmeIcon}),
L.marker([48.538144,2.621654], {icon: femmeIcon}),
L.marker([48.535967,2.619905], {icon: femmeIcon}),
L.marker([48.535967,2.619905], {icon: femmeIcon}),
L.marker([48.53629,2.621312], {icon: hommeIcon}),
L.marker([48.539477,2.621357], {icon: femmeIcon}),
L.marker([48.539477,2.621357], {icon: hommeIcon}),
L.marker([48.539477,2.621357], {icon: hommeIcon}),
L.marker([48.538587,2.623075], {icon: femmeIcon}),
L.marker([48.537727,2.625809], {icon: femmeIcon}),
L.marker([48.536568,2.623634], {icon: hommeIcon}),
L.marker([48.538136,2.62516], {icon: femmeIcon}),
L.marker([48.539145,2.623623], {icon: hommeIcon}),
L.marker([48.539145,2.623623], {icon: hommeIcon}),
L.marker([48.539984,2.622352], {icon: hommeIcon}),
L.marker([48.538101,2.622402], {icon: hommeIcon}),
L.marker([48.537376,2.622801], {icon: hommeIcon}),
L.marker([48.537204,2.626631], {icon: femmeIcon}),
L.marker([48.537893,2.625557], {icon: femmeIcon}),
L.marker([48.537269,2.626527], {icon: femmeIcon}),
L.marker([48.537988,2.621888], {icon: hommeIcon}),
L.marker([48.536089,2.624165], {icon: femmeIcon}),
L.marker([48.535874,2.622536], {icon: femmeIcon}),
L.marker([48.538045,2.625308], {icon: femmeIcon}),
L.marker([48.537984,2.625407], {icon: femmeIcon}),
L.marker([48.535558,2.621616], {icon: hommeIcon}),
L.marker([48.536087,2.622326], {icon: hommeIcon}),
L.marker([48.536093,2.624161], {icon: hommeIcon}),
L.marker([48.537954,2.625458], {icon: femmeIcon}),
L.marker([48.536865,2.621632], {icon: femmeIcon}),
L.marker([48.536865,2.621632], {icon: femmeIcon}),
L.marker([48.539145,2.623623], {icon: femmeIcon}),
L.marker([48.536989,2.622558], {icon: femmeIcon}),
L.marker([48.534962,2.620084], {icon: hommeIcon}),
L.marker([48.536989,2.622558], {icon: femmeIcon}),
L.marker([48.537613,2.62293], {icon: femmeIcon}),
L.marker([48.534862,2.620472], {icon: femmeIcon}),
L.marker([48.53527,2.62087], {icon: femmeIcon}),
L.marker([48.538633,2.623176], {icon: femmeIcon}),
L.marker([48.53527,2.62087], {icon: hommeIcon}),
L.marker([48.538633,2.623176], {icon: hommeIcon}),
L.marker([48.536189,2.623942], {icon: femmeIcon}),
L.marker([48.536093,2.624161], {icon: hommeIcon}),
L.marker([48.537692,2.622859], {icon: femmeIcon}),
L.marker([48.535489,2.619897], {icon: hommeIcon}),
L.marker([48.535489,2.619897], {icon: femmeIcon}),
L.marker([48.539028,2.62291], {icon: hommeIcon}),
L.marker([48.537893,2.625557], {icon: femmeIcon}),
L.marker([48.538753,2.62242], {icon: femmeIcon}),
L.marker([48.536262,2.62402], {icon: femmeIcon}),
L.marker([48.536911,2.621713], {icon: femmeIcon}),
L.marker([48.536911,2.621713], {icon: femmeIcon}),
L.marker([48.537692,2.622859], {icon: femmeIcon}),
L.marker([48.537692,2.622859], {icon: hommeIcon}),
L.marker([48.535819,2.62275], {icon: hommeIcon}),
L.marker([48.536551,2.620052], {icon: femmeIcon}),
L.marker([48.536551,2.620052], {icon: femmeIcon}),
L.marker([48.536096,2.62402], {icon: femmeIcon}),
L.marker([48.536096,2.62402], {icon: femmeIcon}),
L.marker([48.536096,2.62402], {icon: femmeIcon}),
L.marker([48.538587,2.623075], {icon: femmeIcon}),
L.marker([48.537503,2.62227], {icon: hommeIcon}),
L.marker([48.5375,2.622022], {icon: femmeIcon}),
L.marker([48.538106,2.625209], {icon: hommeIcon}),
L.marker([48.537828,2.622136], {icon: femmeIcon}),
L.marker([48.536262,2.62402], {icon: hommeIcon}),
L.marker([48.537171,2.622021], {icon: hommeIcon}),
L.marker([48.536741,2.621057], {icon: hommeIcon}),
L.marker([48.536075,2.624178], {icon: femmeIcon}),
L.marker([48.536507,2.619284], {icon: femmeIcon}),
L.marker([48.536507,2.619284], {icon: femmeIcon}),
L.marker([48.536096,2.62402], {icon: femmeIcon}),
L.marker([48.536551,2.620052], {icon: femmeIcon}),
L.marker([48.536129,2.619194], {icon: femmeIcon}),
L.marker([48.536129,2.619194], {icon: hommeIcon}),
L.marker([48.537204,2.626631], {icon: femmeIcon}),
L.marker([48.537135,2.621348], {icon: hommeIcon}),
L.marker([48.537135,2.621348], {icon: femmeIcon}),
L.marker([48.539479,2.622024], {icon: hommeIcon}),
L.marker([48.536093,2.624161], {icon: femmeIcon}),
L.marker([48.539808,2.622543], {icon: femmeIcon}),
L.marker([48.535864,2.620881], {icon: hommeIcon}),
L.marker([48.535864,2.620881], {icon: femmeIcon}),
L.marker([48.537954,2.625458], {icon: hommeIcon}),
L.marker([48.537271,2.622094], {icon: femmeIcon}),
L.marker([48.539308,2.622548], {icon: hommeIcon}),
L.marker([48.539308,2.622548], {icon: hommeIcon}),
L.marker([48.539003,2.62211], {icon: femmeIcon}),
L.marker([48.538015,2.625358], {icon: femmeIcon}),
L.marker([48.535445,2.620868], {icon: femmeIcon}),
L.marker([48.539726,2.622671], {icon: hommeIcon}),
L.marker([48.535445,2.620868], {icon: femmeIcon}),
L.marker([48.535445,2.620868], {icon: hommeIcon}),
L.marker([48.535666,2.621329], {icon: hommeIcon}),
L.marker([48.536262,2.62402], {icon: hommeIcon}),
L.marker([48.539726,2.622671], {icon: hommeIcon}),
L.marker([48.539726,2.622671], {icon: femmeIcon}),
L.marker([48.53467,2.618133], {icon: femmeIcon}),
L.marker([48.538173,2.622247], {icon: hommeIcon}),
L.marker([48.538106,2.625209], {icon: femmeIcon}),
L.marker([48.535882,2.62021], {icon: hommeIcon}),
L.marker([48.538106,2.625209], {icon: femmeIcon}),
L.marker([48.536075,2.624178], {icon: hommeIcon}),
L.marker([48.53608,2.624034], {icon: femmeIcon}),
L.marker([48.539385,2.622163], {icon: femmeIcon}),
L.marker([48.535763,2.622296], {icon: femmeIcon}),
L.marker([48.536118,2.620005], {icon: femmeIcon}),
L.marker([48.537465,2.62622], {icon: hommeIcon}),
L.marker([48.534303,2.617909], {icon: femmeIcon}),
L.marker([48.535558,2.621616], {icon: femmeIcon}),
L.marker([48.536089,2.624165], {icon: hommeIcon}),
L.marker([48.536189,2.623942], {icon: hommeIcon}),
L.marker([48.538106,2.625209], {icon: hommeIcon}),
L.marker([48.538106,2.625209], {icon: hommeIcon}),
L.marker([48.537476,2.62268], {icon: hommeIcon}),
L.marker([48.536782,2.621076], {icon: hommeIcon}),
L.marker([48.536782,2.621076], {icon: hommeIcon}),
L.marker([48.538136,2.62516], {icon: femmeIcon}),
L.marker([48.536782,2.621076], {icon: femmeIcon}),
L.marker([48.537023,2.622681], {icon: hommeIcon}),
L.marker([48.53608,2.624174], {icon: femmeIcon}),
L.marker([48.537394,2.62246], {icon: femmeIcon}),
L.marker([48.537394,2.62246], {icon: hommeIcon}),
L.marker([48.537394,2.62246], {icon: hommeIcon}),
L.marker([48.539766,2.622605], {icon: femmeIcon}),
L.marker([48.538633,2.623176], {icon: hommeIcon}),
L.marker([48.538633,2.623176], {icon: hommeIcon}),
L.marker([48.536088,2.624027], {icon: femmeIcon}),
L.marker([48.536055,2.624056], {icon: femmeIcon}),
L.marker([48.536107,2.62415], {icon: femmeIcon}),
L.marker([48.536841,2.620924], {icon: femmeIcon}),
L.marker([48.537463,2.622478], {icon: hommeIcon}),
L.marker([48.537775,2.620889], {icon: hommeIcon}),
L.marker([48.536639,2.621727], {icon: hommeIcon}),
L.marker([48.536639,2.621727], {icon: femmeIcon}),
L.marker([48.537954,2.625458], {icon: hommeIcon}),
L.marker([48.537984,2.625407], {icon: femmeIcon}),
L.marker([48.537596,2.621601], {icon: femmeIcon}),
L.marker([48.537087,2.621315], {icon: femmeIcon}),
L.marker([48.537775,2.620889], {icon: femmeIcon}),
L.marker([48.538793,2.622363], {icon: femmeIcon}),
L.marker([48.538793,2.622363], {icon: hommeIcon}),
L.marker([48.538793,2.622363], {icon: hommeIcon}),
L.marker([48.537692,2.622859], {icon: hommeIcon}),
L.marker([48.536402,2.619453], {icon: femmeIcon}),
L.marker([48.53938,2.622375], {icon: femmeIcon}),
L.marker([48.539749,2.622192], {icon: femmeIcon}),
L.marker([48.539749,2.622192], {icon: hommeIcon}),
L.marker([48.539749,2.622192], {icon: femmeIcon}),
L.marker([48.538744,2.62249], {icon: femmeIcon}),
L.marker([48.539867,2.621157], {icon: hommeIcon}),
L.marker([48.53753,2.626116], {icon: femmeIcon}),
L.marker([48.536071,2.624041], {icon: femmeIcon}),
L.marker([48.538587,2.623075], {icon: hommeIcon}),
L.marker([48.537613,2.62293], {icon: femmeIcon})]);

var overlayMaps = {
    "MENAGES NON IMPOSES 2010": impot,
    "SONDAGE":sondage,
    "19 - 25 ans":dixneufvingtcinq,
    "26 - 40 ans":vingtsixquarante
};  
L.control.layers(baseMaps, overlayMaps).addTo(map);

  var legend = L.control({position: 'topright'});
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
      div.innerHTML = '% Menages non imposés 2010<br>';
        div.innerHTML +='<i style="background:#bd0026"></i>100% à 80% <br>';   
        div.innerHTML +='<i style="background:#f03b20"></i>80% à 60% <br>';
          div.innerHTML +='<i style="background:#fecc5c"></i>60% à 40% <br>';
            div.innerHTML +='<i style="background:#fecc5c"></i>40% à 20% <br>';
              div.innerHTML +='<i style="background:#ffffb2"></i>20% à 0% <br>';
    return div;
};

legend.addTo(map);

  //map.addLayer(sondageCluster);

  }



}


