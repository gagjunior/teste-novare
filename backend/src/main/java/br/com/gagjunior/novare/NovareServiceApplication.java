package br.com.gagjunior.novare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class NovareServiceApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(NovareServiceApplication.class, args);
	}

}
