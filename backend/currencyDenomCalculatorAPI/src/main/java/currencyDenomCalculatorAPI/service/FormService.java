package currencyDenomCalculatorAPI.service;

import currencyDenomCalculatorAPI.dto.Dto;

public interface FormService {

    Dto calculate(Dto dto);

    String[] calculateDiff(int[] result, int[] previousResult);

}
