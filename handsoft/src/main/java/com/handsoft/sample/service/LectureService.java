package com.handsoft.sample.service;

import java.util.List;

import com.handsoft.sample.domain.Lecture;
import com.handsoft.sample.domain.LectureRequest;

public interface LectureService {
    List<Lecture> getAllLectures();
    Lecture getLectureById(Long id);
    void insertLecture(LectureRequest request);
    void updateLecture(Lecture lecture);
    void deleteLecture(Long id);
}
