package com.aws.backend.service;

import com.aws.backend.domain.User;
import com.aws.backend.domain.dto.UserDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    List<UserDto> getUsers();
    UserDto signUp(UserDto userDto);
    UserDto login(User user, UserDto userDto);
    boolean validateToken(String token);
    UserDto refreshToken(String request);
    UserDto userUpdate(User user, UserDto userDto);
    ResponseEntity<?> userDelete(User user);
    User userGet(Long userId);
    User loadUserByUsername(String username);
    UserDto signUpComplete(User user);
    UserDto passwordRecover(User user);
    UserDto passwordRecoverComplete(User user,UserDto userDto);
}
