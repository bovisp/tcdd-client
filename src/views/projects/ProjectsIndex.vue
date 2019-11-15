<template>
	<div class="container">
		<section class="section">
			<div class="columns is-multiline">
				<div 
					class="column is-one-third"
					v-for="project in projects"
					:key="project.id"
				>
					<projects-card 
						:project="project"
					/>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios'
	import ProjectsCard from './ProjectsCard'

	export default {
		name: 'projects-index',

		components: {
			ProjectsCard
		},

		data () {
			return {
				projects: []
			}
		},

		async mounted () {
			let { data } = await axios.get('projects')

			this.projects = data.data
		}
	}
</script>