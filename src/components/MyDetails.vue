<template>
	<section class="about">
		<div class="about__bio-image">
			<div class="about__bio">
				<h2 class="text-secondary">BIO</h2>
				<p>{{personalInfo.bio}}</p>
			</div>
		</div>
		<div class="jobs">
			<h2>Jobs Experience</h2>
			<div class="jobs__job" v-for="(job, i) in workInfo.job_experiances" :key="i">
				<div>
					<h2 class="inline"> <span class="text-secondary">{{job.company_name}}</span><span class="inline"> / </span></h2> <h3 class="inline">{{job.role}}</h3>
				</div>
				<h3>{{dateOfJoin(job)}} - {{dateOfLeave(job)}}</h3>
				<p class="mb-2">{{job.description}}</p>
				<div v-for="(sdesc, j) in job.sub_desc" :key="j">
					<h4 class="mt-1 ms-1"><span class="text-secondary">{{sdesc.heading}} </span> <span v-if="sdesc.sub_heading">({{sdesc.sub_heading}})</span></h4>
					<ul class="ms-4">
						<li :class="k == 0 ? 'mt-1' : ''" v-for="(list, k) in sdesc.bullet_points" :key="k">{{list}}</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="jobs">
			<h2>Skills</h2>
			<div class="jobs__job remove_ul">
				<ul>
					<li v-for="(skillList, skillIndex) in  skills" :key="skillIndex"><span class="text-color"><b>{{skillList.field}} :</b></span> <span>{{skillList.skills}}</span></li>
				</ul>
			</div>
			<h2>Education</h2>
			<div class="jobs__job">
				<div v-for="(education, educationIndex) in  educations" :key="educationIndex">
					<h2 class="text-secondary"><span>{{education.program_name}}</span> <span>({{education.program_sub_name}})</span></h2>
					<h3><span>{{education.college_name}}</span> <span v-if="education.college_sub_name">({{education.college_sub_name}})</span></h3>
					<h6>{{dateOfJoin(education)}}</h6>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'MyDetails',
	props: ["personalInfo", "workInfo", "skills", "educations"],
	created() {
		this.$emit('setVertical', true)
		this.MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	},
	methods: {
		dateOfJoin(obj) {
			return obj.date_of_join === "" ? "Not started" : this.getMonthYear(obj.date_of_join)
		},
		dateOfLeave(obj) {
			return obj.date_of_leave === "" ? "Current" : this.getMonthYear(obj.date_of_leave)
		},
		// getExperience(date) {
		// 	const year = new Date().getYear() - new Date(date).getYear();
		// 	return year > 1 ? year + " years" :  year + " year"
		// },
		getMonthYear(date) {
			return this.MONTHS[new Date(date).getMonth()] +" "+ new Date(date).getFullYear()
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
