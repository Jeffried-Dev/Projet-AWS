package com.aws.backend.config;

import com.aws.backend.service.AdministrateurService;
import com.aws.backend.service.EntrepriseService;
import com.aws.backend.service.UtilisateurService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Service
public class JwtFilter extends OncePerRequestFilter {

    private AdministrateurService administrateurService;
    private UtilisateurService utilisateurService;
    private EntrepriseService entrepriseService;
    private JwtService jwtService;

    public JwtFilter(UtilisateurService utilisateurService, AdministrateurService administrateurService, EntrepriseService entrepriseService, JwtService jwtService) {
        this.utilisateurService = utilisateurService;
        this.entrepriseService = entrepriseService;
        this.administrateurService = administrateurService;
        this.jwtService = jwtService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = null;
        String role = null;
        String username = null;
        boolean isTokenExpired = true;

        // Bearer eyJhbGciOiJIUzI1NiJ9.eyJub20iOiJBY2hpbGxlIE1CT1VHVUVORyIsImVtYWlsIjoiYWNoaWxsZS5tYm91Z3VlbmdAY2hpbGxvLnRlY2gifQ.zDuRKmkonHdUez-CLWKIk5Jdq9vFSUgxtgdU1H2216U
        final String authorization = request.getHeader("Authorization");

        if(authorization != null && authorization.startsWith("Bearer ")){
            token = authorization.substring(7);
            isTokenExpired = jwtService.isTokenExpired(token);
            username = jwtService.extractUsername(token);
            role = jwtService.extractRole(token);
        }
        System.out.println(isTokenExpired);
        System.out.println(username);
        System.out.println(role);
        System.out.println(token);
        if(!isTokenExpired && username != null && role!=null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = null;

            if(role.equals("ADMINISTRATEUR")){
                userDetails = administrateurService.loadUserByUsername(username);
            }else if(role.equals("ENTREPRISE")){
                userDetails = entrepriseService.loadUserByUsername(username);
            }else{
                userDetails = utilisateurService.loadUserByUsername(username);
            }
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        }

        filterChain.doFilter(request, response);
    }
}
