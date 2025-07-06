package com.handsoft.sample.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.handsoft.sample.domain.Lecture;
import com.handsoft.sample.mapper.LectureMapper;

@Repository
public class LectureRepositoryImpl implements LectureRepository{
	
	private final LectureMapper lectureMapper;
	
	public LectureRepositoryImpl(LectureMapper lectureMapper) {
        this.lectureMapper = lectureMapper;
    }

	@Override
	public List<Lecture> findAll() {
		// TODO Auto-generated method stub
		return lectureMapper.findAll();
	}

	@Override
	public Lecture findById(Long id) {
		// TODO Auto-generated method stub
		return lectureMapper.findById(id);
	}

	@Override
	public void save(Lecture lecture) {
		// TODO Auto-generated method stub
		lectureMapper.insert(lecture);
	}

	@Override
	public void update(Lecture lecture) {
		// TODO Auto-generated method stub
		lectureMapper.update(lecture);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		lectureMapper.delete(id);
	}
	
}
