package br.com.gagjunior.novare.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.annotation.Configuration;

import lombok.Data;
import lombok.NoArgsConstructor;

@Configuration
@RefreshScope
@ConfigurationProperties("novare-service")
@Data
@NoArgsConstructor
public class NovareConfiguration {
    private Integer page;
    private Integer size;    
}
