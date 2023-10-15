import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<any>('');
  public notify = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  // message contains the object of the pokemon selected to show on side nav
  changeMessage(message: number) {
    this.messageSource.next(message); 
  }

  notifyObservable$ = this.notify.asObservable();

  // notify side nav component to refresh in order to show the received pokemon profile details
  public notifyOther(refresh: any) {
    if (refresh) {
      this.notify.next(refresh);
    }
  }

}
