package com.handsoft.sample.mapper;

import com.handsoft.sample.domain.Lecture;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LectureMapper {
	List<Lecture> findAll();
    Lecture findById(Long id);
    void insert(Lecture lecture);
    void update(Lecture lecture);
    void delete(Long id);
}
