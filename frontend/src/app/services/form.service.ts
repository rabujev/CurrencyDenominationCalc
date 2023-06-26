import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dto } from '../common/dto';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  //this is a Subject (multicastable Observable) others can subscribe to receive its value whenever updated.
  submittedForm: Subject<[number, boolean]> = new Subject<[number, boolean]>;
  //useBackend: boolean = true; //hopefully same instance injected everywhere    

  constructor(private httpClient: HttpClient) { }

  //Fills result Map with the amounts of notes and coins 

  updateTables(total: number, previousTotal: number | null, result: Map<number, number>,
    previousResult: Map<number, number>,
    useBackend: boolean,
    difference: Map<number, string>) : void {

      if (useBackend) {
        this.calcBackend(total, result, previousResult, difference);
      } else {
        this.calcFrontend(total, previousTotal, result, previousResult, difference);
        // xc console.log(previousTotal);
      }
  }

  //Gives back result + difference  Maps in an array  from backend 

  calcBackend(total: number, result: Map<number, number>,
    previousResult: Map<number, number>,
    difference: Map<number, string>): void {

      console.log("using backend");
      let url = "http://localhost:5000";
      let dto = new Dto(total, result, previousResult, difference);
     
      //let response = this.httpClient.post<Dto>(url,dto).subscribe(
      //  dto =>
        //{
          // result = dto.result;
           //previousResult = dto.previousResult;
           //difference = dto.difference;
        //}
      //); 
      
      
      // result = result of call . 0   etc.   so no need for return type 
      // difference = result of call . 1
  }


  calcFrontend(total: number,previousTotal: number | null, result: Map<number, number>,
    previousResult: Map<number, number>,
    difference: Map<number, string>) : void  // : Map<any, any>[] lets try no return
  {
    previousResult = new Map(result);   //current Result becomes past result



    let rest: number = total;
    //for each currency denomination, calculates how many of them fit in the rest amount and fills result map
    for (let key of result.keys()) {
      let value: number = Math.floor(rest / key);
      result.set(key, value);  //should modify result as a side effect 

      rest = rest % key;
    }
    //calculating the difference
    if (previousTotal != null) 
      this.calcFrontDifference(result, previousResult, difference);
    


  }

  calcFrontDifference(result: Map<number, number>,
    previousResult: Map<number, number>,
    difference: Map<number, string>) : void 
  {
    console.log('dd')
    for (let key of result.keys()) {

      let diff: number = result.get(key)! - previousResult.get(key)!;

      if (diff > 0) {
        difference.set(key, ('+' + diff));
      } else if (diff < 0) {
        difference.set(key, ('' + diff));
      } else if (diff == 0 && previousResult.get(key) != 0) {
        difference.set(key, (' ' + diff)); 
      }else if (diff == 0) {
        difference.set(key, ('' + diff));
      }

    }

  }


}
