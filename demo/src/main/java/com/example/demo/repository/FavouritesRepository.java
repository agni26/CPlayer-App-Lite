package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Favourites;


public interface FavouritesRepository extends JpaRepository<Favourites, Integer> {


} // Player data stored in repository is accessed.
