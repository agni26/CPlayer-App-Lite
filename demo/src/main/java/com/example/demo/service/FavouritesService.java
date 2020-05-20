package com.example.demo.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Favourites;
import com.example.demo.repository.FavouritesRepository;

@Service
public class FavouritesService {

	@Autowired
	private FavouritesRepository favouritesRepository;

	public List<Favourites> getAllData() {
		List<Favourites> list = favouritesRepository.findAll();
		Collections.sort(list);
		Collections.reverse(list);
		return list;
	}

	public boolean addData(Favourites favs) {
		try {
			List<Favourites> list = favouritesRepository.findAll();
			for (Favourites favourites : list) {
				if(favourites.getPid() == favs.getPid()) {
					int oldcount = favourites.getCount();
					favouritesRepository.deleteById(favs.getPid());
					favs.setCount(oldcount+1);
					favouritesRepository.save(favs);
					return true;
				}
			}
			favs.setCount(1);
			favouritesRepository.save(favs);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	public boolean removeData(int id) {
		try {
			List<Favourites> list = favouritesRepository.findAll();
			for (Favourites temp : list) {
				if(temp.getPid() == id) {
					if(temp.getCount() > 1) {
						int oldcount = temp.getCount();
						Favourites tempnew = temp;
						tempnew.setCount(oldcount-1);
						favouritesRepository.deleteById(id);
						favouritesRepository.save(tempnew);
						return true;
					}
				}
			}
			favouritesRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			System.out.println("no");
			return false;
		}
	}
}
