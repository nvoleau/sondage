import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Router} from '@angular/router-deprecated';

import {BaCard} from '../../theme/components';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {EnqueteService} from '../../service/enqueteservice';
import {Afaire} from '../../service/afaire';

@Component({
  selector: 'result',
  pipes: [],
  styles: [],
  directives:[BaCard],
  providers:[EnqueteService,HTTP_PROVIDERS],
  template: require('./tableenquete.html'),
})
export class TableEnquete {

 todos:Afaire[];

    constructor(private enqueteService: EnqueteService,private router: Router) { }

    ngOnInit() {
       // this.enqueteService.getAllRue().then(rues => this.rues = rues);
       this.enqueteService.getTodo().then(todos=>this.todos=todos);
    }

  selectTodo(todo: any) {
      console.log(todo);
      console.log(this.router);
        this.router.parent.navigate(['Sondage',{nom: todo.nom, adresse: todo.adresse}]);
       // this.msgs = [];
       // this.msgs.push({severity:'info', summary:'Car Select', detail:'Vin: ' + car.vin});
    }


}