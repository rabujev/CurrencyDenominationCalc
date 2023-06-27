package currencyDenomCalculatorAPI.controller;

import currencyDenomCalculatorAPI.dto.Dto;
import currencyDenomCalculatorAPI.service.FormService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class FormController {

    //setting up field for constructor dependency injection of the form Service handling all the logic
    private FormService formService;

    //Injecting the Form Service
    public FormController(FormService formService) {
        this.formService = formService;
    }

    //Unique Mapping, processes the form data and returns the result, using a dto pattern
    @PostMapping("/processFormData")
    public Dto processFormData(@RequestBody Dto dto) {
        Dto dtoResponse = formService.calculate(dto);
        return dtoResponse;
    }
}
