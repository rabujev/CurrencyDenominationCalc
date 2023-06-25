import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  //this is a Subject (multicastable Observable) others can subscribe to receive its value whenever updated.
  validAmount: Subject<number> = new Subject<number>;
  useBackend: boolean = true; //hopefully same instance injected everywhere    

  constructor() { }

    //Fills result Map with the amounts of notes and coins 
    calcResult(total: number, result: Map<number, number>,
       previousResult: Map<number, number>): Map<any, any>[]  
    {

      let newResult = new Map();
      
      if (this.useBackend) {
        console.log("using backend calculate IF");
        this.callBackEnd(total, result);
        return [newResult, previousResult];
       }
      else {        
        
        let rest: number = total;
        //for each currency denomination, calculates how many of them fit in the rest amount and fills result map
        for (let key of result.keys()) {
          let value: number = Math.floor(rest/key);
          result.set(key, value);  //should modify result as a side effect 

          rest = rest%key;
        }
        //calculating the difference
        

        return [newResult, this.calcDifference(newResult, previousResult)];
        
      }
  
    }

    calcDifference(result: Map<number, number>, 
                   previousResult: Map<number, number>): Map<number, string> {

      if (previousResult.size > 0) {
  
      }
      return new Map<number, string>;
    }

    //gives back result + difference  Maps in an array  from backend 
    callBackEnd(total: number, result: Map<number, number>): Map<any, any>[]  {
      return [];
    }
}
