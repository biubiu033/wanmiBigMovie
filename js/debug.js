// JavaScript Document

function PageDebug(pos,size,fontsize,color){
	this._postion = pos;
	this._size = size;
	this._fontsize = fontsize;
	this._color = color;
	this._debug = true;
	this._init = false;
	
	
}
PageDebug.prototype = {
	close:function(){
		this._debug = false;
	},
	open:function(){
		this._debug = true;
	},
	write:function(txt){
		if (!this._init){
			this.init();
		}
		if (this._debug){
			$("#DebugConsole").html(txt+"<br>"+$("#DebugConsole").html());
		}
	},
	init:function(){
		if (!this._debug)return;
		this._init = true;
		
		if (this._postion=="right"){
			$("body").append("<div id='DebugConsole' style='width:"+this._size+";top:0px; right:0px; font-size:"+this._fontsize+"px; position:absolute;color:"+this._color+";z-index:10000; text-align:right;'></div>");
		}else{
			$("body").append("<div id='DebugConsole' style='width:"+this._size+";top:0px; left:0px; font-size:"+this._fontsize+"px; position:absolute;color:"+this._color+";z-index:10000; '></div>");
		}
	}
};