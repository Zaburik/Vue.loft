import Vue from "vue";


const skill = {
	template: "#skill",
	props: ["skill"],
	methods: {
		drowCircle(){
			const circle = this.$refs["circle"];
			const dashArray = parseInt(
			    getComputedStyle(circle).getPropertyValue("stroke-dasharray")
			);
			
			const percent = (dashArray / 100) * (100 - this.skill.percent);

			circle.style.strokeDashoffset = percent;
		}
	},
	mounted(){
		this.drowCircle()
	},

}


const skillsRow = {
	template: "#skills-row",
	components: {
		skill,
	},
	props: ["category"]
}



new Vue ({
	el: "#skills-component",
	template: "#skills-list",
	components: {
		skillsRow
	},
	data(){
		return{
			skills:[]
		}
	},
	created(){
		const data = require("../data/skills.json");
		this.skills = data;

	}
});