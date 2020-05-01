package cplayer.recommended.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cplayer.recommended.app.model.Recommended;
import cplayer.recommended.app.service.RecommendedService;

@RestController                         //This annotation is applied to a class to mark it as a request handler.
@RequestMapping("/api/recom")           //We can use it with class definition to create the base URI
@CrossOrigin(value = "*")               // This annotation marks the annotated method or type as permitting cross origin requests
public class RecommendedController {

	@Autowired                          //This can be used to autowire bean on the setter method 
	private RecommendedService recommendedService;

	@GetMapping                         //Annotation for mapping HTTP GET requests onto specific handler methods.
	public ResponseEntity<?> getAllPlayers() {
		try {
			return new ResponseEntity<List<Recommended>>(recommendedService.getAllData(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("no", HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping                        // @PostMapping is a composed annotation that acts as a shortcut for @RequestMapping
	public ResponseEntity<String> addData(@RequestBody Recommended recoms) {
		try {
			if (recommendedService.addData(recoms)) {
				return new ResponseEntity<String>("ok", HttpStatus.CREATED);
			} else
				return new ResponseEntity<String>("no", HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			return new ResponseEntity<String>("no", HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping                     //@DeleteMapping to delete a resource
	public ResponseEntity<String> deleteData(@RequestParam("id") int id) {
		try {
			if (recommendedService.removeData(id)) {
				return new ResponseEntity<String>("ok", HttpStatus.OK);
			} else
				return new ResponseEntity<String>("no", HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			return new ResponseEntity<String>("no", HttpStatus.NOT_FOUND);

		}
	}

}