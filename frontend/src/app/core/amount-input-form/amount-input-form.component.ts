import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormService } from 'src/app/services/form.service';



@Component({
  selector: 'app-amount-input-form',
  templateUrl: './amount-input-form.component.html',
  styleUrls: ['./amount-input-form.component.css']
})


export class AmountInputFormComponent {

  constructor(private formBuilder: FormBuilder,
    private formService: FormService) {}


  inputForm!: FormGroup;

  get amount() {
    return this.inputForm.get('amount')!;
  }
  

  //Create the form structure with the validation
  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      amount: new FormControl('', [Validators.required, 
                                   Validators.pattern("^\\d+([\\.,][0-9]{1,2})?$")])
    });  //js the backslash has to be escaped
  }
    

    //behaviour of submit button => if validation is passed 
    //=> amount published to observer (tables)  via the injected service
  onSubmit() {
    if (this.inputForm.valid) {
      console.log("submitted (valid)");
      this.formService.useBackend = false;
      this.formService.validAmount.next(this.amount.value); 
    }
    
  }

  

}


