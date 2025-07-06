(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Lecture_Detail");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "INT","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"},{"id" : "professor","type" : "STRING","size" : "256"},{"id" : "department","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","130","178","88","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("강의명");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","130","220","88","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("교수명");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","132","260","88","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("학부");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","190","184","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("bind:ds_detail.name");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_professor","190","226","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("bind:ds_detail.professor");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_department","190","266","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("bind:ds_detail.department");
            this.addChild(obj.name, obj);

            obj = new Button("btn_edit","80","350","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","220","350","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","132","142","88","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("강의번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","192","148","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("bind:ds_lecture.name");
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
        this.registerScript("Lecture_Detail.xfdl", function() {
        this.Lecture_Detail_onload = function(obj, e)
        {
            var lectureId = this.parent.arguments.lectureId;
            this.fnGetLectureDetail(lectureId);
        	trace("조회 id = " + lectureId);
        };

        this.fnGetLectureDetail = function(id)
        {
        	trace("디테일 api 실행");

            var strSvcId    = "getDetail";
            var strSvcUrl   = "svc::selectLectureDetail.do";
            var inData      = "";
            var outData     = "ds_detail=output1";
            var strArg      = "lectureId=" + id;
            var callbackFnc = "fnCallback";

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callbackFnc, true);
        };

        this.btn_edit_onclick = function()
        {
            this.edt_name.set_readonly(false);
            this.edt_professor.set_readonly(false);
            this.edt_department.set_readonly(false);

            this.btn_save.set_visible(true);
            this.btn_edit.set_visible(false);
        };

        this.btn_save_onclick = function()
        {
            var strSvcId    = "updateLecture";
            var strSvcUrl   = "svc::updateLecture.do";
            var inData      = "input1=ds_detail";
            var outData     = "";
            var strArg      = "";
            var callbackFnc = "fnCallback";

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callbackFnc, true);
        };

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
            if (errorCode != 0) {
                this.alert("오류 발생: " + errorMsg);
                return;
            }

            if (svcID == "updateLecture") {
                this.alert("수정이 완료되었습니다.");
                this.close();
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_edit.addEventHandler("onclick",this.btn_edit_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("Lecture_Detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
