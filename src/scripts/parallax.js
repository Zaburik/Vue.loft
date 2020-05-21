
var parallax = (function(){
	var bg_1 = document.querySelector('.layer_1');
	var bg_2 = document.querySelector('.layer_2');
	var bg_3 = document.querySelector('.layer_3');
	var bg_4 = document.querySelector('.layer_4');
	var bg_5 = document.querySelector('.layer_5');
	var section_text = document.querySelector('.parallax');
	var user = document.querySelector('.user-name');


	return {
		move: function (block, windowScroll, strafeAmount){
			var strafe = windowScroll/-strafeAmount +'%';
			var transformSting = `translate3d(0, ${strafe}, 0)`;

			var style = block.style;

			style.transform = transformSting;
		},

		move_transform: function (block, windowScroll, strafeAmount){
			var strafe = windowScroll/-strafeAmount +'%';
			var transformSting = `translate3d(-0% , ${strafe}, 0)`;

			var style = block.style;

			style.transform = transformSting;
		},

		init: function(wScroll){
			this.move(bg_5, wScroll, 55);
			this.move(bg_4, wScroll, 85);
			this.move(bg_3, wScroll, 75);
			this.move(bg_1, wScroll, 50);
			this.move(bg_2, wScroll, 50);
			this.move_transform(section_text, wScroll, 20);
		}

	}


}());









window.onscroll = function(){
	var wScroll = window.pageYOffset;

	parallax.init(wScroll);



	console.log(Math.floor(wScroll));
}