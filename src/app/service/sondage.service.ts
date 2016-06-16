
import {Injectable} from '@angular/core';

@Injectable()
export class SondageService {
    public db: any;
    constructor() {
        this.db = firebase.database().ref('/');
        console.log(this.db);
    }


getNbBy(child:string,childNode:string, recherche:string){
        var ref = this.db.child(child);
        var nb = 0;
        ref.orderByChild(childNode).equalTo(recherche).on("child_added", function(snapshot) {
        //console.log(snapshot.key);
        nb+=1;
        });
        return nb;
 }


  getAll(){
    //console.log(this._sondageService.nb_total);
    let ref = this.db.child("enquete");
    ref.orderByChild("owner").on("child_added").then((snapshot)=> {
      return snapshot.val();
    });
  }

}


