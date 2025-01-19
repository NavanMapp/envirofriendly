package com.enviro.assessment.grad001.navanmaphalala;

import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@org.springframework.context.annotation.Configuration
public class Configuration {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("https:localhost:3000")
                        .allowedOrigins("GET", "POST", "PUT", "DELETE")
                        .allowedOrigins("*");
            }
        };
    }
}
