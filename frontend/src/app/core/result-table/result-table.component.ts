import { Component } from '@angular/core';
import { DenomValues } from '../denom-values';


@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent {

  //Injecting the object for possible denominations
  // and using parameter Properties to simultaneously define it as a property
  constructor(private denomValues: DenomValues) {};

  //Initial Map with denoms as keys and 0 as values for now
  private initialDenoms: Map<number, number> = this.denomValues.denomMap();
  
  result: Map<number, number> = new Map(this.denomValues.denomMap());

  difference: Map<number, string> = new Map();

  private useBackend: boolean = false;


  ngOnInit(): void {
  }
  
  //Fills result Map with the amounts of notes and coins 
  calcResult(total: number) {

    if (this.useBackend) {
      
     }
    else {

      let previousResult = new Map(this.result);
      
      let rest: number = total;
      //for each currency denomination, calculates how many of them fit in the rest amount and fills result map
      for (let key of this.result.keys()) {
        let value: number = Math.floor(rest/key);
        this.result.set(key, value)

        rest = rest%key;
      }
      //calculating the difference
      if (previousResult.size > 0) {

      }

      
    }


    

  }


}
