package cplayer.user.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cplayer.user.app.model.User;
import cplayer.user.app.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public Optional<User> getUser(String username) {
		return userRepository.findById(username);
	}

	@Override
	public boolean updateUser(User user, String username) {
		try {
			userRepository.deleteById(username);
			userRepository.save(user);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public boolean deleteUser(String username) {
		try {
			if (userRepository.existsById(username)) {
				userRepository.deleteById(username);
				return true;
			}
			return false;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public boolean addUser(User u) {
		try {
			if (!userRepository.existsById(u.getUsername())) {
				userRepository.insert(u);
				return true;
			}
			return false;
		} catch (Exception e) {
			return false;
		}
	}

}
