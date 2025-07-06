(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "INT","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"},{"id" : "professor","type" : "STRING","size" : "256"},{"id" : "department","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lecture", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "INT","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"},{"id" : "professor","type" : "STRING","size" : "256"},{"id" : "department","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "INT","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"},{"id" : "professor","type" : "STRING","size" : "256"},{"id" : "department","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid00","171","164","559","270",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"name\"/><Cell col=\"2\" text=\"professor\"/><Cell col=\"3\" text=\"department\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:professor\"/><Cell col=\"3\" text=\"bind:department\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("button00","290","96","62","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddLecture","372","96","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("강의 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteLecture","522","96","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpdateLecture","452","96","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static_editTitle","860","156","100","24",null,null,null,null,null,null,this);
            obj.set_text("강의 수정");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static_label_name","790","206","60","20",null,null,null,null,null,null,this);
            obj.set_text("강의명");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static_label_professor","790","236","60","20",null,null,null,null,null,null,this);
            obj.set_text("교수명");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static_label_department","790","266","60","20",null,null,null,null,null,null,this);
            obj.set_text("학부");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","860","206","140","20",null,null,null,null,null,null,this);
            obj.getSetter("bind").set("bind:name");
            obj.set_visible("false");
            obj.set_border("1px solid #888888");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_professor","860","236","140","20",null,null,null,null,null,null,this);
            obj.getSetter("bind").set("bind:professor");
            obj.set_visible("false");
            obj.set_border("1px solid #888888");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_department","860","266","140","20",null,null,null,null,null,null,this);
            obj.getSetter("bind").set("bind:department");
            obj.set_visible("false");
            obj.set_border("1px solid #888888");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","790","306","100","30",null,null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_visible("false");
            obj.set_border("1px solid #888888");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","900","306","100","30",null,null,null,null,null,null,this);
            obj.set_text("취소");
            obj.set_visible("false");
            obj.set_border("1px solid #888888");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        //조회버튼 클릭시
        this.Button00_onclick = function(obj,e)
        {
          this.fnSearch();
        };

        //추가버튼 클릭시
        this.btnAddLecture_onclick = function(obj, e)
        {
            this.fnOpenLectureAddForm();
        };
        this.btnAddLecture.addEventHandler("onclick", this.btnAddLecture_onclick, this);

        this.fnOpenLectureAddForm = function()
        {
            var sPopupId = "popup_addLecture";
            var sUrl = "Base::Lecture_Add.xfdl";
            var oParent = this.getOwnerFrame();
            var oArgs = null;
            var sOption = "width=600,height=400";

            // ChildFrame 생성
            var popup = new nexacro.ChildFrame();
            popup.init(sPopupId, 100, 100, 600, 400, null, null, sUrl);
            popup.set_dragmovetype("all");
            popup.set_titletext("강의 추가");

            // 팝업 showModal
            popup.showModal(oParent, oArgs, this, "fnPopupCallback");
        };

        this.fnPopupCallback = function(popupId, returnValue)
        {
            trace("팝업에서 받은 값: " + returnValue);

        	this.fnSearch();
        };

        // 수정 로직
        this.btnUpdateLecture_onclick = function(obj, e)
        {
            this.fnStartEdit();
        };

        // 선택된 항목을 ds_detail로 복사
        this.fnStartEdit = function()
        {
            var row = this.ds_list.rowposition;
            if (row < 0) {
                this.alert("수정할 항목을 선택하세요.");
                return;
            }

        	trace("복사 행 출력 = " + row);

            this.ds_detail.clearData();
            var newRow = this.ds_detail.addRow();

            this.ds_detail.copyRow(newRow, this.ds_list, row);

        	trace("복사한 이름 출력 = " + this.ds_detail.getColumn(0,"name"));
        	this.edt_name.set_value(this.ds_detail.getColumn(row, "name"));
            this.edt_professor.set_value(this.ds_detail.getColumn(row, "professor"));
            this.edt_department.set_value(this.ds_detail.getColumn(row, "department"));

        	trace("이름 입력값 = " + this.edt_name.value);
        	trace("교수명 입력값 = " + this.edt_professor.value);
            // 수정 폼 보이기
            this.fnToggleEditForm(true);
        };


        this.fnToggleEditForm = function(visible)
        {
            this.Static_editTitle.set_visible(visible);
        	this.Static_label_name.set_visible(visible);
            this.Static_label_professor.set_visible(visible);
            this.Static_label_department.set_visible(visible);
            this.edt_name.set_visible(visible);
            this.edt_professor.set_visible(visible);
            this.edt_department.set_visible(visible);
            this.btn_save.set_visible(visible);
            this.btn_cancel.set_visible(visible);
        };

        this.btn_save_onclick = function(obj, e)
        {

        	var row = this.ds_detail.rowposition;
            if (row < 0) {
                this.alert("수정할 데이터가 없습니다.");
                return;
            }

        	// Edit 값 → ds_detail 데이터셋에 저장
            this.ds_detail.setColumn(row, "name", this.edt_name.value);
            this.ds_detail.setColumn(row, "professor", this.edt_professor.value);
            this.ds_detail.setColumn(row, "department", this.edt_department.value);

        	trace("✔️ 수정된 데이터 저장됨");
            trace(this.ds_detail.saveXML()); // 저장 확인용 전체 출력

            var strSvcId = "updateLecture";
            var strSvcUrl = "svc::updateLecture.do";
            var inData = "input1=ds_detail";
            var outData = "";
            var strArg = "";
            var callbackFnc = "fnCallback";
            var isAsync = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callbackFnc, isAsync);
        };

        this.btnCancel_onclick = function(obj, e)
        {
            this.fnToggleEditForm(false); // 폼 닫기
        };


        //처리콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
          // 에러 시 화면 처리 내역
          if(errorCode != 0)
          {
            this.alert(errorCode+"\n"+errorMsg);
            return;
          }

          trace("조회 성공: " + this.ds_list.getRowCount() + "건");

          switch(svcID)
          {
        	case "search":
        	  if(this.ds_list.rowcount < 1){
        		this.alert("조회된 결과가 없습니다.");
        	  }

              break;

        	 case "deleteLecture":
        			this.alert("삭제가 완료되었습니다.");
        			this.fnSearch(); // ✅ 삭제 후 리스트 재조회
        			break;

        	case "updateLecture":
                    this.alert("수정이 완료되었습니다.");
                    this.fnSearch(); // 리스트 재조회
                    this.fnToggleEditForm(false); // 폼 닫기
                    break;
          }
        };


        //데이터 조회 트랜잭션
        this.fnSearch = function ()
        {

          var strSvcId    = "search";
          var strSvcUrl   = "svc::selectLectureList.do";
          var inData      = "";
          var outData     = "ds_list=output1";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;
          trace(strSvcUrl);

          this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
              strSvcUrl ,       // trabsaction을 요청할 주소
              inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
              outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
              strArg,         // 입력값으로 보낼 arguments, a=b
              callBackFnc,       // transaction의 결과를 받을 Function 이름
              isAsync);         // 비동기통신 여부 [생략가능]
        };



        // 삭제 로직 구현
        this.btnDeleteLecture_onclick = function(obj, e)
        {
            var row = this.ds_list.rowposition; // 현재 선택된 행
        	trace("삭제할 row = ", row);

            if (row < 0) {
                this.alert("삭제할 항목을 선택하세요.");
                return;
            }



            var confirmDelete = this.confirm("선택한 강의를 삭제하시겠습니까?");
            if (!confirmDelete) return;

        //     // 1. Dataset에서 삭제
        //     this.ds_list.deleteRow(row);

            // 2. 서버로 삭제 요청도 하려면 아래 주석 해제하고 트랜잭션 호출


        	var lectureId = this.ds_list.getColumn(row, "id");

        	this.ds_lecture.clearData();
        	var row = this.ds_lecture.addRow();
        	this.ds_lecture.setColumn(row, "id", lectureId);

            var strSvcId = "deleteLecture";
            var strSvcUrl = "svc::deleteLecture.do";
            var inData = "input1=ds_lecture";
            var outData = "";
            var strArg = "";
            var callbackFnc = "fnCallback";

        	if (lectureId == null) {
        		this.alert("선택한 항목의 ID가 없습니다.");
        		return;
        	}


        	trace("삭제할 ID = ", lectureId);
        	trace("전송할 strArg: " + strArg); // 기대 결과: lectureId=3 같은 형태


            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callbackFnc, true);

        };

        // 그리드 셀에 바인딩된 컬럼아이디를 얻어오는 함수
        this.getBindColumnIDByIndex = function(grid, index)
        {
          var text = "";
          var columnid = null;
          var subCell = grid.getCellProperty("body", index, "subcell");
          if ( subCell > 0 )
          {
            text = grid.getSubCellProperty("body", index, 0, "text");
          }
          else
          {
            text = grid.getCellProperty("body", index, "text");
          }

          if ( text && text.length > 0 )
          {
            if ( text.search(/^bind:/) > -1 )
            {
              columnid = text.replace(/^bind:/, "");
            }
            else if ( text.search(/^BIND\(/) > -1 )
            {
              columnid = text.replace(/^BIND\(/, "");
              columnid = columnid.substr(0, columnid.length-1);
            }
          }

          return columnid;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btnAddLecture.addEventHandler("onclick",this.Button00_onclick,this);
            this.btnDeleteLecture.addEventHandler("onclick",this.btnDeleteLecture_onclick,this);
            this.btnUpdateLecture.addEventHandler("onclick",this.btnUpdateLecture_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
