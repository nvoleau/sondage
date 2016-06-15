import {Component} from '@angular/core';
import {BaCard} from '../../theme/components';
import {Router,RouteParams,CanActivate} from '@angular/router-deprecated';  
import {MD_RADIO_DIRECTIVES, MdRadioDispatcher} from '@angular2-material/radio';
import {InputText,Dropdown,Button,InputSwitch,SelectButton,Rating,InputTextarea} from 'primeng/primeng';
import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';

@Component({
  selector: 'result',
  pipes: [],
  styles: [],
  directives:[BaCard,MD_RADIO_DIRECTIVES,SelectButton,Button,TabPanel,TabPanel,Rating],
  providers:[MdRadioDispatcher],
  template: require('./sondage.html'),
})
export class Sondage {
  sondage : Object={};
  sexe = [{label:'Masculin',value:'Masculin'}, {label:'Feminin',value:'Feminin'}];
    priorite = [{label:'Emploi', value:'Emploi'},{label:'Economie',value:'Economie'}, {label:'Education',value:'Education'}
    , {label:'Service public',value:'Service public'}
    , {label:'Sécurité',value:'Sécurité'}
    , {label:'Immigration',value:'Immigration'}
    , {label:'Environnement',value:'Environnement'}];
  ouinon = [{label:'Oui',value:'oui'}, {label:'Non',value:'non'}];
   open = [{label:'ouvre',value:'ouvre'}, {label:'ouvre pas',value:'ouvre pas'}, {label:'pas interressé',value:'pas interressé'}];

 

  constructor(routeParams: RouteParams) {
    this.sondage.nom = routeParams.get('nom');
    this.sondage.rue = routeParams.get('adresse');
    console.log( routeParams.get('nom'));
  }


 onSubmit() {
         console.log( this.sondage);

    }


}