(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Lecture_Add");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lecture", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "name","type" : "STRING","size" : "256"},{"id" : "professor","type" : "STRING","size" : "256"},{"id" : "department","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
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
            obj.set_text("bind:ds_lecture.name");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_professor","190","226","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("bind:ds_lecture.professor");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_department","190","266","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("bind:ds_lecture.department");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","180","325","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Lecture_Add.xfdl", function() {
        this.btn_add_onclick = function(obj, e)
        {
            this.fnInsertLecture();
        };

        this.fnInsertLecture = function()
        {
        /*    this.btn_add.setFocus(); // 포커스를 버튼으로 이동시켜 커밋 유도
        */
            // 👇 강제 값 대입
            this.ds_lecture.setColumn(0, "name", this.edt_name.value);
            this.ds_lecture.setColumn(0, "professor", this.edt_professor.value);
            this.ds_lecture.setColumn(0, "department", this.edt_department.value);

        	trace("이름: " + this.ds_lecture.getColumn(0, "name"));
        	trace("교수: " + this.ds_lecture.getColumn(0, "professor"));
        	trace("학부: " + this.ds_lecture.getColumn(0, "department"));
        	trace("Row count: " + this.ds_lecture.getRowCount());
        	trace("Row position: " + this.ds_lecture.rowposition);
        	trace("name 존재 여부: " + this.ds_lecture.getColumnInfo("name"));

            var strSvcId    = "insertLecture";
            var strSvcUrl   = "svc::insertLecture.do";
            var inData      = "input1=ds_lecture";
            var outData     = "";
            var strArg      = "";
            var callBackFnc = "fnCallback";
            var isAsync     = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.Lecture_Add_onload = function(obj, e)
        {
            if (this.ds_lecture.getRowCount() == 0) {
                this.ds_lecture.addRow();
            }

            this.ds_lecture.set_rowposition(0);
        };

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
            if (errorCode != 0) {
                this.alert("에러 발생: " + errorMsg);
                return;
            }

            if (svcID == "insertLecture") {
                this.alert("강의가 성공적으로 등록되었습니다.");

                this.close("REFRESH_LIST"); // 등록 후 화면 닫기 등 원하는 처리
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
        };
        this.loadIncludeScript("Lecture_Add.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
