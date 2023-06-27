package currencyDenomCalculatorAPI.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import currencyDenomCalculatorAPI.dto.Dto;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Map;



@Service
public class FormServiceImpl implements FormService{

    //property containing denoms, should have same values as in frontend
    private double[] denoms = {200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01};

    @Override
    public Dto calculate(Dto dto) {
        //result becomes previous result
        int[] prevResult = dto.result.clone();

        // this part calculates the result
        int[] newResult = new int[this.denoms.length];
        int i =0;
        double rest = dto.total;
        for(double denom: denoms) {
            newResult[i] = (int)(rest / denom);
            rest = rest % denom;
            i++;
        }

        //calling calc difference method
        String[] difference = this.calculateDiff(newResult, prevResult);

        //returning Dto object response
        return new Dto(dto.total, newResult, difference);


    }

    @Override
    public String[] calculateDiff(int[] result, int[] previousResult) {
        String[] difference = new String[this.denoms.length];

        // calculates diff between current table cell and past table cell values, then depending on result, prefixes the int w appropriate sign string
        for(int i =0; i < difference.length; i++) {
            int diff = result[i] - previousResult[i];
            if (diff > 0) {
                difference[i] = ("+" + diff);
            } else if (diff < 0) {
                difference[i] = ("" + diff);
            } else if (diff == 0 && previousResult[i] != 0) {
                difference[i] = (" " + diff);
            }else if (diff == 0) {
                difference[i] = ("" + diff);
            }
        }
        //returns the difference
        return difference;
    }
}
