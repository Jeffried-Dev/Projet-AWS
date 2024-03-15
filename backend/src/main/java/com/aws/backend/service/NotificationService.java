package com.aws.backend.service;

import com.aws.backend.domain.User;

public interface NotificationService {
   void envoyer(User user);
   int test ();
}
