import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {
  
  private go = new BehaviorSubject<any>([' First Goal','Second Goal']);
	
  newvar = this.go.asObservable();

  constructor() { }

  changeGoal(newvar){
  	//this.go.next(this.newvar);
  }
}