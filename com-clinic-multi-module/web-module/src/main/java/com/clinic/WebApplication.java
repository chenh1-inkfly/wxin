package com.clinic;

import org.springframework.boot.Banner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ImportResource;

import com.alibaba.dubbo.config.ApplicationConfig;
import com.alibaba.dubbo.config.ConsumerConfig;
import com.alibaba.dubbo.config.RegistryConfig;

@SpringBootApplication
@ImportResource("classpath:applicationContext.xml")
public class WebApplication {
	@Bean(name="defaultConsumer")
    public ConsumerConfig providerConfig(ApplicationConfig applicationConfig, RegistryConfig registryConfig) {
        ConsumerConfig providerConfig = new ConsumerConfig();
        // 手动注入，不再由spring容器去根据类名
        // (com.alibaba.dubbo.config.ApplicationConfig)去获取对应的值
        providerConfig.setApplication(applicationConfig);
        providerConfig.setRegistry(registryConfig);
        return providerConfig;
    }
	public static void main(String[] args) {
		new SpringApplicationBuilder()
			.bannerMode(Banner.Mode.CONSOLE)
			.sources( WebApplication.class)
			.run(args);
	}

}