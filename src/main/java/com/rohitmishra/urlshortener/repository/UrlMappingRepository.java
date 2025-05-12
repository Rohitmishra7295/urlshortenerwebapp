
package com.rohitmishra.urlshortener.repository;

import com.rohitmishra.urlshortener.modals.UrlMapping;
import com.rohitmishra.urlshortener.modals.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UrlMappingRepository extends JpaRepository<UrlMapping, Long> {
    UrlMapping findByShortUrl(String shortUrl);
    List<UrlMapping> findByUser(User user);
}
