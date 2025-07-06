package com.handsoft.sample.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.handsoft.sample.domain.Lecture;
import com.handsoft.sample.domain.LectureRequest;
import com.handsoft.sample.repository.LectureRepository;

@Service
public class LectureServiceImpl implements LectureService {
	private final LectureRepository lectureRepository;

	public LectureServiceImpl(LectureRepository lectureRepository) {
		// TODO Auto-generated constructor stub
		this.lectureRepository = lectureRepository;
	}

	@Override
	public List<Lecture> getAllLectures() {
		return lectureRepository.findAll();
	}

	@Override
	public Lecture getLectureById(Long id) {
		return lectureRepository.findById(id);
	}

	@Override
	public void updateLecture(Lecture lecture) {
		lectureRepository.update(lecture);
	}

	@Override
	public void deleteLecture(Long id) {
		lectureRepository.delete(id);
	}

	@Override
	public void insertLecture(LectureRequest request) {
		Lecture lecture = new Lecture(request.getName(), request.getProfessor(), request.getDepartment());

		lectureRepository.save(lecture);
	}
}
