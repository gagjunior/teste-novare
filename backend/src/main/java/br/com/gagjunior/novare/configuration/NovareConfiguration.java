package br.com.gagjunior.novare.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import lombok.Data;
import lombok.NoArgsConstructor;

@Configuration
@ConfigurationProperties("config-service")
@Data
@NoArgsConstructor
public class NovareConfiguration {
    private Integer page;
    private Integer size;    
}
