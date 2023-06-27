package currencyDenomCalculatorAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class CurrencyDenomCalculatorApiApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application)
	{
		return application.sources(CurrencyDenomCalculatorApiApplication.class);
	}
	public static void main(String[] args) {

		SpringApplication.run(CurrencyDenomCalculatorApiApplication.class, args);
	}

}
