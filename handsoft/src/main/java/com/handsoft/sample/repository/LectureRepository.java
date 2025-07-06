package com.handsoft.sample.repository;

import java.util.List;

import com.handsoft.sample.domain.Lecture;

public interface LectureRepository {
    List<Lecture> findAll();
    Lecture findById(Long id);
    void save(Lecture lecture);
    void update(Lecture lecture);
    void delete(Long id);
}
