
function defineLevels() {

	levels = [
		{
			gravity: 0.3,
			friction: 0.8,
			level: 0,
			player: [width - 20 - 32, 20, 20, 20],
			boxes: [
				defineObj(rect_fft, { x: 0, y: 0, width: 10, height: height }),
				defineObj(rect_fft, { x: 0, y: height - 10, width: width, height: 10 }),
				defineObj(rect_fft, { x: 0, y: 0, width: width, height: 10 }),
				defineObj(rect_fft, { x: width - 10, y: 0, width: 10, height: height }),
				defineObj(rect_fff, { x: (width / 2) - 400, y: (height / 2) - 200, width: 800, height: 400 })],
			items: [
				defineObj(defineObj(items.common, items.score), { x: (width / 2) + 30, y: height - 40, player: "Player1" }),
				defineObj(defineObj(items.common, items.score), { x: (width / 2) - 30 - 12, y: height - 40, player: "Player2" }),
			],
			isComplete: function () {
				if (currWorld.items.length == 0) {
					return true;
				}
			}
		},
		{
			gravity: 0.3,
			friction: 0.8,
			level: 1,
			player: [width - 40 - 32, height - 20 - 32, 40, height - 32 - 20],
			boxes: [
				defineObj(rect_fft, { x: 0, y: 0, width: 10, height: height }),
				defineObj(rect_fft, { x: 0, y: height - 45, width: width, height: 45 }),
				defineObj(rect_fft, { x: 0, y: 0, width: width, height: 10 }),
				defineObj(rect_fft, { x: width - 10, y: 0, width: 50, height: height }),
				defineObj(rect_fft, { x: (width / 2) - 100 - 200, y: height - 45 - 55 - 20, width: 200, height: 20 }),
				//defineObj(rect_fft,{x:(width/2)+100,y:height-45-55-20,width:200,height:20}),
				defineObj(rect_fft, { x: (width / 2) - 50, y: height - 45 - 55 - 20 - 55, width: 100, height: 20 }),
				defineObj(rect_fft, { x: (width / 2) - 600, y: height - 45 - 55 - 20 - 55 - 55, width: 450, height: 20 }),
				defineObj(rect_fft, { x: (width / 2) - 150, y: height - 45 - 55 - 20 - 55 - 55 - 100, width: 300, height: 20 }),

				defineObj(rect_fft, { x: 10, y: height - 425, width: 572, height: 5, target: "Player2", ctx: mtctx, doUpdate: true }),
				defineObj(rect_fft, { x: (width / 2) + 100, y: height - 425, width: 572, height: 5, target: "Player1", ctx: mtctx, doUpdate: true }),
				defineObj(rect_fft, { x: 10, y: height - 420, width: 572, height: 10 }),
				defineObj(rect_fft, { x: (width / 2) + 100, y: height - 420, width: 572, height: 10 }),
				defineObj(rect_fft, { x: (width / 2) - 200, y: height - 500, width: 400, height: 10 }),
				defineObj(rect_fft, { x: (width / 2) - 10, y: 10, width: 20, height: 268 }),

				defineObj(rect_ttt, { x: 492, y: height - 45 - 55 - 20 - 20, width: 50, height: 20, color: "red", target: "Player1" }),
				defineObj(rect_ttt, { x: (width / 2) - 550, y: height - 45 - 55 - 20 - 20 - 110, width: 50, height: 50, color: "orange" }),
				defineObj(rect_ttt, { x: 50, y: height - 425 - 80, width: 40, height: 40, color: "orange" }),
				defineObj(rect_ttt, { x: width - 50 - 40, y: height - 425 - 80, width: 40, height: 40, color: "orange" }),
				//defineObj(rect_ttt,{x:(width/2)-550,y:height-45-55-20-20-110-100,width:50,height:50,color:"red",target:"Player2"}),
				defineObj(rect_ttt, { x: (width / 2) + 60, y: height - 45 - 55 - 20 - 20 - 110 - 100 - 10, width: 30, height: 40, color: "red", target: "Player1" }),
				defineObj(rect_ttt, { x: (width / 2) - 10, y: height - 45 - 55 - 20 - 20 - 110 - 100 - 10, width: 30, height: 40, color: "red", target: "Player2" }),
				//defineObj(rect_fft,defineObj(buttonTypes.color,{x:10,draw:Skins[7],y:height-55,width:15,height:10,doUnclick:false})),
				//defineObj(rect_fft,defineObj(buttonTypes.color,{x:width-10-15,draw:Skins[7],y:height-55,width:15,doUnclick:false,height:10})),
			],
			items: [
				defineObj(defineObj(items.common, items.score), { x: (width / 2) + 30, y: 180, player: "Player2" }),
				defineObj(defineObj(items.common, items.score), { x: (width / 2) - 30 - 12, y: 180, player: "Player1" }),
				//defineObj(defineObj(items.common,items.heart),{x:400,y:height-80,player : "Player1"}),
			],
			isComplete: function () {
				if (currWorld.items.length == 0) {
					return true;
				}
			}
		},
		{
			gravity: 0.3,
			friction: 0.85,
			level: 2,
			player: [width - 20 - 32, height - 50, 20, height - 50],
			boxes: [
				//defineObj(rect_fff,{width:width,height:10,x:0,y:height-70-40}),
				defineObj(rect_fft, { width: width, height: 10, x: 0, y: 0, bounce: 2 }),
				defineObj(rect_fft, { width: width, height: 45, x: 0, y: height - 45, bounce: 2 }),
				defineObj(rect_fft, { width: 10, height: height, x: 0, y: 0, bounce: 2 }),
				defineObj(rect_fft, { width: 10, height: height, x: width - 10, y: 0, bounce: 2 }),
				defineObj(rect_fft, { x: (width / 2) - 100 - 350, y: height - 45 - 55 - 20, width: 200, height: 20 }),
				defineObj(rect_fft, { x: (width / 2) - 100 - 130, y: height - 45 - 55 - 20, width: 200, height: 20 }),
				defineObj(rect_fft, { x: (width / 2) + 50, y: height - 45 - 55 - 70, width: 260, height: 20 }),
				defineObj(rect_fft, { x: (width / 2) - 100 - 150, y: height - 245, width: 20, height: 160 }),
				defineObj(rect_fft, { x: 10, y: height - 45 - 55 - 20 - 55, width: 150, height: 20 }),
				defineObj(rect_fft, { x: 100, y: height - 45 - 55 - 50 - 55 - 55, width: (2 * (width / 3)) - 80, height: 20 }),
				defineObj(rect_fft, { x: 750, y: height - 45 - 55 - 50 - 55 - 57, width: 40, height: 10, target: "Player1", ctx: mtctx }),
				defineObj(rect_fft, { x: 550, y: height - 45 - 55 - 50 - 55 - 57, width: 40, height: 10, target: "Player2", ctx: mtctx }),
				defineObj(rect_fft, { x: 100, y: height - 45 - 320, width: (2 * (width / 3)) - 80, height: 20 }),
				defineObj(rect_fft, { x: 250, y: height - 45 - 320, width: 20, height: 115 }),
				defineObj(rect_fft, { x: 100, y: height - 35 - 480, width: 600, height: 15 }),
				defineObj(rect_fft, { x: 300, y: height - 35 - 570, width: 150, height: 15 }),
				defineObj(rect_fft, { x: 550, y: height - 35 - 570, width: ((width / 2) + 370) - 550, height: 15 }),
				defineObj(rect_fft, { x: ((width / 2) + 370) + 40, y: 30 + 50 + 80 + 50, width: 20, height: 410 }),
				defineObj(rect_fft, { x: ((width / 2) + 470), y: 30 + 50 + 80 + 50 + 30, width: width - 50 - ((width / 2) + 470), height: 20, tag: "platform3", target: "Player2", ctx: mtctx, draw: Skins[5] }),
				defineObj(rect_fft, { x: ((width / 2) + 430), y: 400, width: ((width - 10 - ((width / 2) + 470) + 40) / 2) - 50, height: 20 }),
				defineObj(rect_fft, { x: ((width / 2) + 430) + ((width - 10 - ((width / 2) + 470) + 40) / 2) + 50, y: 400, width: (width - 10 - ((width / 2) + 470) + 40) + 50, height: 20 }),
				defineObj(rect_fft, { x: ((width / 2) + 430), y: 500, width: ((width - 10 - ((width / 2) + 470) + 40) / 2) - 50, height: 20 }),
				defineObj(rect_fft, { x: ((width / 2) + 430) + ((width - 10 - ((width / 2) + 470) + 40) / 2) + 50, y: 500, width: (width - 10 - ((width / 2) + 470) + 40) + 50, height: 20 }),
				defineObj(rect_fft, { x: ((width / 2) + 370) + 40, y: 10, width: 20, height: 70 }),
				defineObj(rect_fft, { x: 330, y: height - 35 - 570 + 15, width: 20, height: 50 }),

				defineObj(rect_fft, { x: 10, y: height - 45 - 320 - 85, width: (((width / 2) + 370) / 2) - 100, height: 15, target: "Player1", ctx: mtctx, draw: Skins[5] }),
				defineObj(rect_fft, { x: (((width / 2) + 370) / 2) + 100, y: height - 45 - 320 - 85, width: (((width / 2) + 370) / 2) - 100, height: 15, ctx: mtctx, draw: Skins[5], target: "Player2" }),
				defineObj(rect_ttt, { x: 471, y: 331, width: 30, height: 30, color: "orange" }),

				defineObj(rect_ttt, { x: 330, y: height - 35 - 570 + 15 + 40, width: 70, height: 25, target: "Player1" }),
				defineObj(rect_ttt, { x: 430, y: height - 35 - 570 - 15 - 50, width: 30, height: 35, target: "Player2" }),

				defineObj(rect_ttt, { x: (width / 2) - 100 - 300, y: height - 45 - 55 - 20 - 20, width: 50, height: 20, target: "Player2" }),
				defineObj(rect_ttt, { x: 15, y: height - 45 - 55 - 20 - 80, width: 30, height: 30, target: "Player1" }),
				defineObj(rect_ttt, { x: (width / 2) + 70, y: height - 45 - 55 - 20 - 70, width: 120, height: 20, color: "orange" }),
				defineObj(rect_ttt, { x: (width / 2) + 70, y: height - 45 - 55 - 20 - 70 - 20, width: 60, height: 20, color: "orange" }),
				defineObj(rect_fft, { x: (width / 2) + 50 + 260, y: height - 45 - 55 - 20 - 70 - 10, width: 60, height: 50 }),

				defineObj(rect_fft, { x: 10, y: height - 365, minY: height - 365, width: 80, height: 20, maxY: height - 260, color: "#232323", tag: "platform1", draw: Skins[8], doUpdate: true, ctx: mtctx }),
				defineObj(rect_fft, { x: (2 * (width / 3)) + 30, y: height - 260, minY: height - 365, width: 80, height: 20, maxY: height - 260, color: "#777777", tag: "platform2", draw: Skins[5], doUpdate: true, ctx: mtctx }),

				defineObj(rect_fft, defineObj(buttonTypes.color, { x: (width / 2) - 100 - 150, y: height - 245 - 13 - 10, width: 20, height: 10, child: "platform1", color: "#232323" })),
				defineObj(rect_fft, defineObj(buttonTypes.color, { x: 150, y: height - 245 - 23 - 105, width: 20, height: 10, child: "platform2", color: "#777777" })),
				defineObj(rect_fft, defineObj(buttonTypes.color2, { x: 1326, y: 392, width: 20, height: 10, child: "platform3", color: "#777777" })),

				//defineObj(circle_ttt,{width:20,height:20,x:50,y:50}),
				//defineObj(circle_fft,{width:20,height:20,x:492,y:height-70-45,isMovable:true,ctx:mtctx})
			],
			items: [
				defineObj(defineObj(items.common, items.score), { x: 300, y: height - 325, player: "Player2" }),
				defineObj(defineObj(items.common, items.score), { x: 330, y: height - 260 - 30, player: "Player1" }),
				defineObj(defineObj(items.common, items.score), { x: width - 10 - 30 - 10, y: height - 325, player: "Player2" }),
				defineObj(defineObj(items.common, items.score), { x: width - 30 - 200, y: height - 260 - 40, player: "Player1" }),
			],
			isComplete: function () {
				if (currWorld.items.length == 0) {
					return true;
				}
			}
		},
		// {
		// 	gravity : 0.3,
		// 	friction : 0.8,
		// 	level : 3,
		// 	player : [width-20-32,20,20,20],
		// 	boxes : [
		// 	defineObj(rect_fft,{x:0,y:0,width:10,height:height}),
		// 	defineObj(rect_fft,{x:0,y:height-45,width:width,height:45}),
		// 	defineObj(rect_fft,{x:0,y:0,width:width,height:10}),
		// 	defineObj(rect_fft,{x:width-10,y:0,width:10,height:height}),
		// 	defineObj(rect_fft,{friction:false,tag:"platform1",mode:"auto",velX:1,minX:0,maxX:200,x:15,y:height-45-55-20-80,width:60,height:20,target:"Player1",ctx:mtctx,doUpdate:true}),


		// 	],
		// 	items : [
		// 	defineObj(defineObj(items.common,items.score),{x:(width/2)+30,y:height-40,player : "Player1"}),
		// 	defineObj(defineObj(items.common,items.score),{x:(width/2)-30-12,y:height-40,player : "Player2"}),
		// 	],
		// 	isComplete : function() {
		// 	if(currWorld.items.length==0) {
		// 	return true;
		// 	}
		// 	}
		// },
	]
}