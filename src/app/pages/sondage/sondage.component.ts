import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';
import {MD_RADIO_DIRECTIVES, MdRadioDispatcher} from '@angular2-material/radio';

@Component({
  selector: 'result',
  pipes: [],
  styles: [],
  directives:[BaCard,MD_RADIO_DIRECTIVES],
  providers:[MdRadioDispatcher],
  template: require('./sondage.html'),
})
export class Sondage {
  sondage : Object={};
  sexe = [{label:'Masculin',value:'Masculin'}, {label:'Feminin',value:'Feminin'}];

  constructor() {
  }


 onSubmit() {
         console.log( this.sondage);

    }


}