package currencyDenomCalculatorAPI.dto;


//DTO class to define object being received and sent back via http post req w frontend
public class Dto {
    public double total;
    public int[] result;
    public String[] difference;

    public Dto(double total, int[] result, String[] difference) {
        this.total = total;
        this.result = result;
        this.difference = difference;
    }


    @Override
    public String toString() {

        return "Dto{" +
                "total=" + total +
                ", result=" + result +
                ", difference=" + difference +
                '}';
    }
}
