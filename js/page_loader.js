// JavaScript Document
var PageResource = [];
function PageLoader(BaseURL){
	self._loadRate =20;
	self._BaseURL = BaseURL;
	self._cache = true;
	self._process = 0;
	self._total = 0;
	self._loaded = 0;
	self._loadInterval = null;
	self._ready =true;
}

PageLoader.prototype = {
	constructor: PageLoader,
	
	getState:function(){
		return self._ready;
	},
	noCache:function(){
		self._cache = false;		
	},
	baseURL:function(url){
		self._BaseURL = url;	
	},
	rate:function(rate){
		self._loadRate =rate;
	},
	process:function(){
		return self._process;
	},
	load:function(resource,process,finish){
		self._ready =false;
		self._loaded = 0;
		self._process = 0;
		self._total = 0;
		
		$.each(resource,function(key,val){	
			
			switch(key){
				case "img":
					for(i=0;i<val.length;i++){
						PageResource[val[i].name] = new Image();
						if (self._cache){
							PageResource[val[i].name].src = self._BaseURL+val[i].src;
						}else{
							PageResource[val[i].name].src = self._BaseURL+val[i].src+"?"+Math.random();
						}
						PageResource[val[i].name].onload=function(){
							self._loaded++;
						}
						self._total++;	
					}
			
					break;
                case "myImg":
                    for(i=0;i<val.length;i++){
                        PageResource[val[i].name] = new Image();
                        if (self._cache){
                            PageResource[val[i].name].src = val[i].src;
                        }else{
                            PageResource[val[i].name].src = val[i].src+"?"+Math.random();
                        }
                        PageResource[val[i].name].onload=function(){
                            self._loaded++;
                        }
                        self._total++;
                    }

                    break;
				case "music":
					for(i=0;i<val.length;i++){
						PageResource[val[i].name] = new Audio();
						
						if (self._cache){
							PageResource[val[i].name].src = "./sound/"+val[i].src;
						}else{
							
							PageResource[val[i].name].src = "./sound/"+val[i].src+"?"+Math.random();
						}
						
						self._loaded++;
						
						self._total++;	
					}
					break;
				case "group":
					for(i=0;i<val.length;i++){
						for(j=val[i].start;j<=val[i].end;j++){
							//debug.write(val[i].prefix+j);
							PageResource[val[i].prefix+j] = new Image();
							if (self._cache){
								PageResource[val[i].prefix+j].src = self._BaseURL+val[i].prefix+j+val[i].postfix;
							}else{
								PageResource[val[i].prefix+j].src = self._BaseURL+val[i].prefix+j+val[i].postfix+"?"+Math.random();
							}
							PageResource[val[i].prefix+j].onload=function(){
								self._loaded++;
							}
							self._total++;	

						}
					}
					break;
			}
		});
		
		self._loaderInterval = setInterval(function(){
			
			if (typeof(process)=="function"){
				if (self._process<Math.floor(self._loaded/self._total*100)){
					self._process++;
					process(self._process);
				}
				if (self._process==100){
					self._ready =true;
					clearInterval(self._loaderInterval);
					if (typeof(finish)=="function"){
						finish();
					}
					
				}
				
			}else{
				if (self._loaded==self._total){
					self._ready =true;
					clearInterval(self._loaderInterval);
					if (typeof(finish)=="function"){
						finish();
					}
					
				};
			}
			
		},self._loadRate)
		
		
		
	}
	
}