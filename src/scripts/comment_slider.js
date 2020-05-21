import Vue from 'vue';
import Flickity from 'vue-flickity';


new Vue({

	el:'#reviews',
	components: {
		Flickity
	},
	data(){
		return {
			flickityOptions: {
				prevNextButtons: false,
				groupCells: true,
				pageDots:false,


			}
		}
	},
	methods: {
    	next() {
    		this.$refs.flickity.next();
    	},
    
   	 	previous() {
      		this.$refs.flickity.previous();
    	}
  	},
  	mounted(){
  		var refs = this.$refs;

  		refs.flickity.on('change', function(pos){

  			if(pos === this.slides.length -1){
  				refs.btn_next.style.opacity = '0.2';
  				refs.btn_next.style.pointerEvents = 'none';
  			}else{
  				refs.btn_next.style.opacity = '1';
  				refs.btn_next.style.pointerEvents = 'auto';
  			}

  			if(pos === 0){
  				refs.btn_prev.style.opacity = '0.2';
  				refs.btn_prev.style.pointerEvents = 'none';
  			}else{
  				refs.btn_prev.style.opacity = '1';
  				refs.btn_prev.style.pointerEvents = 'auto';
  			}
  		})
  	}





});

