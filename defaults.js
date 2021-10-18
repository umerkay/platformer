function defineObj(obj1,obj2) {
	//obj1.color = obj2.color || obj1.color || "#" + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
	var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}
function drawCircle(ctx,color,x,y,w,h) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x + (w/2),y + (h/2),h/2,0,2*Math.PI);
	ctx.fill();
}
function drawStar(ctx,color,x, y, r, n, inset) {
    ctx.save();
	ctx.fillStyle = color;
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0,0-r);
    for (var i = 0; i < n; i++) {
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (r*inset));
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - r);
    }
    ctx.closePath();
	ctx.stroke();
    ctx.fill();
    ctx.restore();
}
function drawRect(ctx,color,x,y,w,h) {
	ctx.fillStyle = color;
	ctx.fillRect(x,y,w,h);
}
function drawSmiley(ctx,color,x,y,w,h,type) {
	ctx.fillStyle = color;
	ctx.beginPath();
	if(type=="1"){
	ctx.arc(x + (w/2),y + (h/2) + (h/3),h/3,Math.PI,2*Math.PI);
	} else {
	ctx.arc(x + (w/2),y + (h/2),h/3,0,Math.PI);
	}
	ctx.fill();	ctx.closePath();	ctx.beginPath();
	ctx.arc(x + w,y + (h/6),h/8,0,2*Math.PI);
	ctx.fill();	ctx.closePath();	ctx.beginPath();
	ctx.arc(x,y + (h/6),h/8,0,2*Math.PI);
	ctx.fill();
	
}
Skins = [
	function draw(ctx,color,x,y,w,h,obj) {
	ctx.save();
	ctx.translate(x+(w/2),y+(h/2));
	obj.angle += (3*obj.velX)%360;
    ctx.rotate( obj.angle*Math.PI/180 ); 
    ctx.translate(-(x+(w/2)),-(y+(h/2)));
	drawCircle(ctx,color,x,y,w,h);
	drawRect(ctx,"black",x+w/4,(y+h)-(h/4),w/2,h/8);
	drawRect(ctx,"black",2+x+w/8,(y)+(h/4),4,4);
	drawRect(ctx,"black",x+(w-w/8-6),(y)+(h/4),6,6);
	ctx.restore();
	},
	function draw(ctx,color,x,y,w,h,obj) {
	ctx.save();
	ctx.translate(x+(w/2),y+(h/2));
	obj.angle = Math.floor((obj.angle + (3*obj.velX))%360);
    ctx.rotate( obj.angle*Math.PI/180 ); 
    ctx.translate(-(x+(w/2)),-(y+(h/2)));
	drawCircle(ctx,"black",x,y,w,h);
	drawCircle(ctx,color,x+(w/2)-(w/2.4),y+(h/2)-(h/2.4),w/1.2,h/1.2);
	drawStar(ctx,"black",x+(w/2),y+(h/2),w/3.3,5,0.5);
	//drawRect(ctx,color,x+(w/2)-(w/4.4),y+(h/2)-(h/4.4),w/2.2,h/2.2);
	ctx.restore();
	},
	function draw(ctx,color,x,y,w,h,obj) {
	/*ctx.save();
	ctx.translate(x+(w/2),y+(h/2));
	obj.angle += (3*obj.velX)%360;
    ctx.rotate( obj.angle*Math.PI/180 ); 
    ctx.translate(-(x+(w/2)),-(y+(h/2)));*/
	drawCircle(ctx,"black",x,y,w,h);
	drawCircle(ctx,color,x+(w/2)-(w/2.2),y+(h/2)-(h/2.2),w/1.1,h/1.1);
	//drawStar(ctx,"black",x+(w/2),y+(h/2),w/3.3,5,0.5);
	//drawRect(ctx,"black",x+(w/2)-(w/4.4),y+(h/2)-(h/4.4),w/2.2,h/2.2);
	//ctx.restore();
	},
	function draw(ctx,color,x,y,w,h,obj) {
	//ctx.lineWidth=w/40;
	drawRect(ctx,"black",x,y,w,h);
	drawRect(ctx,color,x+2,y+2,w-4,h-4);
	//drawRect(ctx,color,x+2,y+2,w-4,h-4);
	//ctx.strokeRect(x,y,w,h);
	},
	function draw(ctx,color,x,y,w,h,obj) {
	drawRect(ctx,"black",x,y,w,h);
	drawRect(ctx,color,x+3,y+3,w-6,h-6);
	drawCircle(ctx,"black",x+(w/2)-(w/4.4),y+(h/2)-(h/4.4),w/2.2,h/2.2);
	},
	function roundRect(ctx, color, x, y, width, height, obj, radius, fill, stroke, lw) {
	fill = true;
	ctx.fillStyle = color;
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
	ctx.lineWidth = lw || 2;
    ctx.stroke();
  }

},
	function draw(ctx,color,x,y,w,h,obj) {
	obj.colorno = ((obj.colorno + 1)) % obj.color.length;
	color = obj.color[obj.colorno];
	ctx.save();
	ctx.translate(x+(w/2),y+(h/2));
	obj.angle += (3*1)%360;
    ctx.rotate( obj.angle*Math.PI/180 ); 
    ctx.translate(-(x+(w/2)),-(y+(h/2)));
	//drawRect(ctx,color,x,y,w,h);
	drawStar(ctx,color,x+(w/2),y+(h/2),w,5,0.5);
	ctx.restore();
	},
	function roundRect(ctx, color, x, y, width, height, obj, radius, fill, stroke, lw) {
	fill = true;
	ctx.fillStyle = color;
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height);
  //ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x, y + height);
  //ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
	ctx.lineWidth = lw || 2;
    ctx.stroke();
  }

},
function roundRect(ctx, color, x, y, width, height, obj, radius, fill, stroke, lw) {
	fill = true;
	ctx.fillStyle = color;
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x, y + height);
  //ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y);
  //ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
	ctx.lineWidth = lw || 2;
    ctx.stroke();
  }

}
]
buttonTypes = {
color : {
	bounce:5,
	onClick : function(obj,obj2) {
	if(currWorld.boxes[obj2.childID].y == currWorld.boxes[obj2.childID].maxY) {
	currWorld.boxes[obj2.childID].velY = -1;
	} if(currWorld.boxes[obj2.childID].x == currWorld.boxes[obj2.childID].maxX) {
	currWorld.boxes[obj2.childID].velX = -1;
	} if(currWorld.boxes[obj2.childID].y == currWorld.boxes[obj2.childID].minY) {
	currWorld.boxes[obj2.childID].velY = 1;
	} if(currWorld.boxes[obj2.childID].x == currWorld.boxes[obj2.childID].minX) {
	currWorld.boxes[obj2.childID].velX = 1;
	}
	updateGUI();
	obj2.height /= 2; obj2.y += obj2.height;
	obj2.clickable = false;
	},
	ctx : mtctx,
	unClick : function(obj2) {
	if(obj2.contClick==false){
	obj2.clickable = true;
	obj2.contClick = true;
	obj2.y -= obj2.height; obj2.height *= 2;
	}
	
	},
	color:"orange",clickable:true,
	doUnclick : false,draw:Skins[7],
	},
	color2 : {
	bounce:5,
	onClick : function(obj,obj2) {
	if(currWorld.boxes[obj2.childID].target == "Player2") {
	currWorld.boxes[obj2.childID].target = "Player1";
	} else if(currWorld.boxes[obj2.childID].target == "Player1") {
	currWorld.boxes[obj2.childID].target = "Player2";
	}
	obj2.height /= 2; obj2.y += obj2.height;
	obj2.clickable = false;
	},
	ctx : mtctx,
	unClick : function(obj2) {
	if(obj2.contClick==false){
	obj2.clickable = true;
	obj2.contClick = true;
	obj2.y -= obj2.height; obj2.height *= 2;
	}
	
	},
	color:"orange",clickable:true,
	doUnclick : false,draw:Skins[7],
	},
checkPoint : {
	onClick : function(obj,obj2) {
	//what it does
	if(obj==player1) {
	currWorld.player[0] = obj2.x;
	currWorld.player[1] = obj2.y - 10;
	} else if(obj==player2) {
	currWorld.player[2] = obj2.x;
	currWorld.player[3] = obj2.y - 10;
	}
	//let the following stay
	obj2.height /= 2; obj2.y += obj2.height;
	obj2.clickable = false;
	//setTimeout(obj2.unClick,800,obj2);
	},
	ctx : mtctx,
	unClick : function(obj2) {
	if(obj2.contClick==false){
	obj2.contClick = true;
	obj2.clickable = true;
	obj2.y -= obj2.height; obj2.height *= 2;
	}},
	isButton:true,
	color:"orange",
	clickable:true,
	doUnclick : false,draw:Skins[7]
	}
}
playerSkins = [
function draw(ctx,color,x,y,w,h,obj) {
	ctx.save();
	ctx.translate(x+(w/2),y+(h/2));
	obj.angle = Math.floor((obj.angle + (3*obj.velX))%360);
    ctx.rotate( obj.angle*Math.PI/180 ); 
    ctx.translate(-(x+(w/2)),-(y+(h/2)));
	drawCircle(ctx,"black",x,y,w,h);
	drawCircle(ctx,color,x+(w/2)-(w/2.4),y+(h/2)-(h/2.4),w/1.2,h/1.2);
	drawStar(ctx,"black",x+(w/2),y+(h/2),w/3.3,5,0.5);
	//drawRect(ctx,color,x+(w/2)-(w/4.4),y+(h/2)-(h/4.4),w/2.2,h/2.2);
	ctx.restore();
	},
	function draw(ctx,color,x,y,w,h,obj) {
	ctx.save();
	ctx.translate(x+(w/2),y+(h/2));
	obj.angle += (3*obj.velX)%360;
    ctx.rotate( obj.angle*Math.PI/180 ); 
    ctx.translate(-(x+(w/2)),-(y+(h/2)));
	drawCircle(ctx,"black",x,y,w,h);
	drawCircle(ctx,color,x+(w/2)-(w/2.4),y+(h/2)-(h/2.4),w/1.2,h/1.2);
	//drawStar(ctx,"black",x+(w/2),y+(h/2),w/3.3,5,0.5);
	drawRect(ctx,"black",x+(w/2)-(w/4.4),y+(h/2)-(h/4.4),w/2.2,h/2.2);
	ctx.restore();
	},
	function draw(ctx,color,x,y,w,h,obj) {
	ctx.save();
	ctx.translate(x+(w/2),y+(h/2));
	obj.angle += (3*obj.velX)%360;
    ctx.rotate( obj.angle*Math.PI/180 ); 
    ctx.translate(-(x+(w/2)),-(y+(h/2)));
	drawCircle(ctx,"black",x,y,w,h);
	drawCircle(ctx,color,x+(w/2)-(w/2.4),y+(h/2)-(h/2.4),w/1.2,h/1.2);
	//drawStar(ctx,"black",x+(w/2),y+(h/2),w/3.3,5,0.5);
	drawRect(ctx,"black",x+(w/2)-(w/3.6),y+(h/2)-(h/8),w/1.8,h/4);
	drawRect(ctx,"black",x+(w/2)-(w/8),y+(h/2)-(h/3.6),w/4,h/1.8);
	ctx.restore();
	},
	function draw(ctx,color,x,y,w,h,obj) {
	ctx.save();
	ctx.translate(x+(w/2),y+(h/2));
	obj.angle += (3*obj.velX)%360;
    ctx.rotate( obj.angle*Math.PI/180 ); 
    ctx.translate(-(x+(w/2)),-(y+(h/2)));
	drawCircle(ctx,"black",x,y,w,h);
	drawCircle(ctx,color,x+(w/2)-(w/2.4),y+(h/2)-(h/2.4),w/1.2,h/1.2);
	drawSmiley(ctx,"black",x+(w/2)-(w/8),y+(h/2)-(h/3.6),w/4,h/1.8,0);
	ctx.restore();
	},
	function draw(ctx,color,x,y,w,h,obj) {
	ctx.save();
	ctx.translate(x+(w/2),y+(h/2));
	obj.angle += (3*obj.velX)%360;
    ctx.rotate( obj.angle*Math.PI/180 ); 
    ctx.translate(-(x+(w/2)),-(y+(h/2)));
	drawCircle(ctx,"black",x,y,w,h);
	drawCircle(ctx,color,x+(w/2)-(w/2.4),y+(h/2)-(h/2.4),w/1.2,h/1.2);
	drawSmiley(ctx,"black",x+(w/2)-(w/8),y+(h/2)-(h/3.6),w/4,h/1.8,1);
	ctx.restore();
	},
]
items = {
common : {
	collectable : true,
	weight : 1,
	width : 12,
	height : 12,
	ctx : mtctx,
	draw : Skins[6],
	color:["#FFD700","#FFD700","#FFD700","#FFD700",'yellow','yellow','yellow','yellow'],
	colorno : 0,
	velX : 1,
	angle : 0
},
heart : {
	type : "heart",
	color : ['#fc0000','#fc0000','#fc0000','#fc0000','#bc0000','#bc0000','#bc0000','#bc0000'],
	onCollect : function(obj) {
	obj.lives++;
	updateGUI();
	},
},
score : {
	onCollect : function(obj) {
	if(obj==player1) {
	currWorld.player[0] = this.x;
	currWorld.player[1] = this.y;
	} else if(obj==player2) {
	currWorld.player[2] = this.x;
	currWorld.player[3] = this.y - 10;
	}
	},
	coolDown : function(obj,w,h,s) {
	
	}
}
};
circle_ttt = {
    x : 50,
    y : 50,
    width : 40,
	height : 40,
	ctx: mtctx,
	velX : 0,
	velY : 0,
	speed : 3,
	shape : "circle",
	isMovable : true,
	doesFall : true,
	collide : true,
	bounce : 2.5,
	color : "#666666",
	angle : 0,
	draw : Skins[2],doUpdate:true /*function draw(ctx,color,x,y,w,h) {
	drawCircle(ctx,color,x,y,w,h);
	}*/
}
circle_fft = {
    x : 50,
    y : 50,
    width : 40,
	height : 40,
	ctx: tctx,
	velX : 0,
	velY : 0,
	angle : 0,
	speed : 3,
	shape : "circle",
	isMovable : false,
	doesFall : false,
	collide : true,
	bounce : 2.5,
	color : "black",
	draw : function draw(ctx,color,x,y,w,h) {
	drawCircle(ctx,color,x,y,w,h);
	}
}
circle_fff = {
    x : 50,
    y : 50,
    width : 40,
	height : 40,
	ctx: tctx,
	velX : 0,
	velY : 0,
	speed : 3,
	shape : "circle",
	isMovable : false,
	doesFall : false,
	collide : false,
	bounce : 2.5,
	color : "#a0a0a0",
	angle : 0,
	draw : function draw(ctx,color,x,y,w,h) {
	drawCircle(ctx,color,x,y,w,h);
	}
}
rect_ttt = {
    x : 50,
    y : 50,
    width : 40,
	height : 40,
	ctx: mtctx,
	velX : 0,
	velY : 0,
	speed : 3,
	shape : "rect",
	isMovable : true,
	doesFall : true,
	collide : true,
	bounce : 2.5,
	color : "#666666",
	draw : Skins[5],doUpdate:true /*function draw(ctx,color,x,y,w,h) {
	drawRect(ctx,color,x,y,w,h);
	}*/
}
rect_fft = {
    x : 50,
    y : 50,
    width : 40,
	height : 40,
	ctx: tctx,
	velX : 0,
	velY : 0,
	speed : 3,
	shape : "rect",
	isMovable : false,
	doesFall : false,
	collide : true,
	bounce : 2.5,
	color : "black",
	unClickTO : 0,
	draw : function draw(ctx,color,x,y,w,h) {
	drawRect(ctx,color,x,y,w,h);
	}
}
rect_fff = {
    x : 50,
    y : 50,
    width : 40,
	height : 40,
	ctx: tctx,
	velX : 0,
	velY : 0,
	speed : 3,
	shape : "rect",
	isMovable : false,
	doesFall : false,
	collide : false,
	bounce : 2.5,
	color : "#a0a0a0",
	draw : function draw(ctx,color,x,y,w,h) {
	drawRect(ctx,color,x,y,w,h);
	}
}
p2 = {
	display : "Player2",
	name : "Player2",
      /**/
      speed: 3.2,
      velX: -1,
      velY: 0,
      jumping: false,
	  ctx: mtctx,
	  grounded: false,
	  //color: "#45a5cc",
	  color: "red",
	  doUpdate:true,
	  collide: true,
	  isMovable : true,
	doesFall : true,
	doRender : true,
	immune : false,
	bounce : 3,
	draw : playerSkins[0],
	  shape: "circle",
	angle: 0,
	skin : 0,
	lives: 3
    };
p1 = {
	display : "Player1",
	name : "Player1",
      speed: 3.2,
      velX: 1,
      velY: 0,
      jumping: false,
	  ctx: mtctx,
	  grounded: false,
	  color: "#05cd40",
	  collide: true,
	  isMovable : true,
	  shape: "circle",
	doesFall : true,
	doRender : true,
	immune : false,
	bounce : 3,
	skin : 1,
	draw : playerSkins[1],
	doUpdate:true,
	angle: 0,
	lives: 3,
	hp:2
    };