import Vue from "vue";


/*младшие компоненты*/

const btns = {template: "#slider-btns"}

const pagination = { 
	template: "#slider-pagination",
	props: ["slider", "currentSlide"],
}

const tags = { 
	template: "#slider-tags",
	props:["tags"],
}


/*старшие компоненты*/

const display = {
	template: "#slider-display",
	components: {pagination, btns},
	props:["currentSlide", "slider", "currentIndex"],
}


const info = {
	template: "#slider-info",
	components: {tags},
	props:["currentSlide"],
	computed: {
		tagsArray(){
			return this.currentSlide.skills.split(",");
		}
	},
}



/*____________________________*/




new Vue({
	el: "#slider-component",
	template: "#slider-container",
	components: {display, info},
	data(){
		return {
			slider: [],
			currentIndex: 0,
		}
	},
	computed:{
		currentSlide(){
			return this.slider[this.currentIndex];
		},
	},
	watch:{
		currentIndex(value){
			this.infinit_slider(value);
		},
	},
	methods:{

		infinit_slider(value){
			const slide_value = this.slider.length - 1;

			if(value > slide_value) this.currentIndex = 0;
			if(value < 0) this.currentIndex = slide_value;
		},


		handleSlide(direction){
			switch (direction) {
				case "next":
				    this.currentIndex++;
					break;

				case "prev":
				    this.currentIndex--;
					break;				
			}
		},
		makeArrReqImg(array){
			return array.map(item =>{
				const requirePic = require(`../images/content/${item.photo}`);
				item.photo = requirePic;
				return item
			})
		}
	},
	created(){
		const data = require('../data/slider.json');
		this.slider = this.makeArrReqImg(data);
		this.currentSlide = this.slider[this.currentIndex];
	}

});