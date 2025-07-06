package com.handsoft.sample.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.handsoft.sample.domain.Lecture;
import com.handsoft.sample.domain.LectureRequest;
import com.handsoft.sample.service.LectureService;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataTypes;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.context.NexacroContext;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class LectureController {
	
	@Autowired
	private LectureService lectureService;

	
	@GetMapping(value = "/selectLectureList.do")
	public NexacroResult selectLectureList() {
		
		List<Lecture> lectureList = lectureService.getAllLectures();
		
	    DataSet ds = new DataSet("output1");
	    
	    ds.addColumn("id", DataTypes.LONG);
	    ds.addColumn("name", DataTypes.STRING);
	    ds.addColumn("professor", DataTypes.STRING);
	    ds.addColumn("department", DataTypes.STRING);
	    
	    for (Lecture lecture : lectureList) {
	    	int row = ds.newRow();
		    ds.set(row, "id", lecture.getId());
		    ds.set(row, "name", lecture.getName());
		    ds.set(row, "professor", lecture.getProfessor());
		    ds.set(row, "department", lecture.getDepartment());
	    }
	    


	    NexacroResult result = new NexacroResult();
	    result.addDataSet(ds);
	    return result;
	}
	
	@PostMapping(value = "/insertLecture.do")
	public NexacroResult insertLecture(@ParamDataSet(name = "input1") LectureRequest lectureRequest) {
		
		System.out.println("저장 이름 출력 : " + lectureRequest.getName());
		
		if (lectureRequest.getName() == null || lectureRequest.getName().equals("")) {
		    return new NexacroResult();
		}
	    lectureService.insertLecture(lectureRequest);
	    return new NexacroResult();

	}
	
	@PostMapping(value = "/deleteLecture.do")
	public NexacroResult deleteLecture(@ParamDataSet(name = "input1") Lecture lecture) {
		System.out.println("삭제 요청 ID : " + lecture.getId());

		Long id = lecture.getId();

	    lectureService.deleteLecture(id);
	    return new NexacroResult();
	}
	
	@PostMapping("/selectLectureDetail.do")
	public NexacroResult selectLectureDetail(@ParamVariable(name = "lectureId") Long lectureId) {
	    Lecture lecture = lectureService.getLectureById(lectureId);

	    DataSet ds = new DataSet("output1");
	    ds.addColumn("id", DataTypes.LONG, 256);
	    ds.addColumn("name", DataTypes.STRING, 256);
	    ds.addColumn("professor", DataTypes.STRING, 256);
	    ds.addColumn("department", DataTypes.STRING, 256);

	    int row = ds.newRow();
	    ds.set(row, "id", lecture.getId());
	    ds.set(row, "name", lecture.getName());
	    ds.set(row, "professor", lecture.getProfessor());
	    ds.set(row, "department", lecture.getDepartment());

	    NexacroResult result = new NexacroResult();
	    result.addDataSet(ds);
	    return result;
	}
	
	@PostMapping("/updateLecture.do")
	public NexacroResult updateLecture(@ParamDataSet(name = "input1") Lecture lecture) {
		 // 입력값 확인 로그 출력
	    System.out.println("🔍 [Lecture 수정 요청]");
	    System.out.println("이름: " + lecture.getName());
	    System.out.println("교수명: " + lecture.getProfessor());
	    System.out.println("학과: " + lecture.getDepartment());	    
	    lectureService.updateLecture(lecture);
	    return new NexacroResult();
	}
}
