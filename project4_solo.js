(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"project4_solo_atlas_1", frames: [[586,0,119,50],[586,52,119,27],[0,168,119,24],[0,0,584,83],[0,85,490,81],[492,85,163,87]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["project4_solo_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["project4_solo_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["project4_solo_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["project4_solo_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.stage_background = function() {
	this.initialize(ss["project4_solo_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.visit_txt = function() {
	this.initialize(ss["project4_solo_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0.85,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(0,39.95,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(0,24.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,53.5);


(lib.Sale_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.instance = new lib.visit_txt();
	this.instance.setTransform(-3,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,1,1).p("AnBiVIODAAQBkAAAABkIAABjQAABkhkAAIuDAAQhkAAAAhkIAAhjQAAhkBkAAg");
	this.shape.setTransform(77.9308,17.3954,1.4168,1.1593);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AnBCWQhkAAAAhkIAAhjQAAhkBkAAIODAAQBkAAAABkIAABjQAABkhkAAg");
	this.shape_1.setTransform(77.9308,17.3954,1.4168,1.1593);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99CFB1").s().p("AnBCWQhkAAAAhkIAAhjQAAhkBkAAIODAAQBkAAAABkIAABjQAABkhkAAg");
	this.shape_2.setTransform(77.9308,17.3954,1.4168,1.1593);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C72F00").s().p("AnBCWQhkAAAAhkIAAhjQAAhkBkAAIODAAQBkAAAABkIAABjQAABkhkAAg");
	this.shape_3.setTransform(77.9308,17.3954,1.4168,1.1593);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033FF").s().p("AnBCWQhkAAAAhkIAAhjQAAhkBkAAIODAAQBkAAAABkIAABjQAABkhkAAg");
	this.shape_4.setTransform(77.9308,17.3954,1.4168,1.1593);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-2,163,87);


(lib.Other_Text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,292,41.5);


(lib.Background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AqwKxIAA1hIVhAAIAAVhg");
	this.shape.setTransform(35.8092,35.8013,0.5201,0.5201);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.7,71.7);


// stage content:
(lib.project4_solo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.visit.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('http://www.adobe.com', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Button
	this.visit = new lib.Sale_btn();
	this.visit.name = "visit";
	this.visit.setTransform(381.55,27.6,1,1,0,0,0,77.9,17.4);
	this.visit._off = true;
	new cjs.ButtonHelper(this.visit, 0, 1, 2, false, new lib.Sale_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.visit).wait(59).to({_off:false},0).wait(1));

	// Other_Text
	this.instance = new lib.Other_Text("synched",0);
	this.instance.setTransform(739.55,27.75,1,1,0,0,0,146,20.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({x:180,y:30.7},10).wait(16));

	// Text
	this.instance_1 = new lib.Text("synched",0);
	this.instance_1.setTransform(589.95,30,1,1,0,0,0,30.2,26.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({x:30.4,y:32.95},10).wait(31));

	// BG_sales
	this.instance_2 = new lib.Background("synched",0);
	this.instance_2.setTransform(589.55,33.05,1,1,0,0,0,35.8,35.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:30,y:36},20).wait(31));

	// BG_stage
	this.instance_3 = new lib.stage_background();
	this.instance_3.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(229.2,27.3,656.4000000000001,67.9);
// library properties:
lib.properties = {
	id: 'F90484320AAC402C89E4E794F0BE644B',
	width: 470,
	height: 60,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/project4_solo_atlas_1.png", id:"project4_solo_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F90484320AAC402C89E4E794F0BE644B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;