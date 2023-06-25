import { Component } from '@angular/core';
import { DenomValues } from '../denom-values';
import { FormService } from 'src/app/services/form.service';



@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent {

  //Injecting the object for possible denominations + the object form service
  // and using parameter Properties to simultaneously define both as a property
  
  constructor(private denomValues: DenomValues,
              private formService: FormService) {};

  //Initial Map with denoms as keys and 0 as values for now

  private initialDenoms: Map<number, number> = this.denomValues.denomMap();
  
  result: Map<number, number> = new Map(this.denomValues.denomMap());

  previousResult: Map<number, number> = new Map(this.denomValues.denomMap());

  difference: Map<number, string> = new Map();



  ngOnInit() {
    this.formService.validAmount.subscribe( 
      amount => { 
       // this.result = 
          this.formService.calcResult( amount, this.result, this.previousResult);
      //  this.difference = 
          this.formService.calcResult( amount, this.result, this.previousResult);
      }
    );
  }

  
  



}
