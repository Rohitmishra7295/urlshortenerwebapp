
package com.rohitmishra.urlshortener.dtos;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;
}
