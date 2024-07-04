import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private sharedUniData = new BehaviorSubject<any>(null);

  setSharedData(data:any){
    this.sharedUniData.next(data)
  }

  getSharedData(){
    return this.sharedUniData.asObservable();
  }
}
