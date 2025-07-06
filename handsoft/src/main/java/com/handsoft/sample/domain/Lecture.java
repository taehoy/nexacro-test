package com.handsoft.sample.domain;

import java.time.LocalDateTime;

public class Lecture {
	private Long id;
	private String name;
	private String professor;
	private String department;
	private int deleted;
	private LocalDateTime createAt;
	
    public Lecture() {
        // 기본 생성자
    }


	public Lecture(String name, String professor, String department) {
		this.name = name;
		this.professor = professor;
		this.department = department;
	}
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getProfessor() {
		return professor;
	}
	public void setProfessor(String professor) {
		this.professor = professor;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public int getDeleted() {
		return deleted;
	}
	public void setDeleted(int deleted) {
		this.deleted = deleted;
	}
	public LocalDateTime getCreateAt() {
		return createAt;
	}
	public void setCreateAt(LocalDateTime createAt) {
		this.createAt = createAt;
	}
	
}
