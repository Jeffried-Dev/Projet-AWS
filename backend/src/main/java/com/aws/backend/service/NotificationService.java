package com.aws.backend.service;

import com.aws.backend.domain.User;

public interface NotificationService {
    public void envoyer(User user);
}
