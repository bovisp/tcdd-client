<template>
	<div class="container">
		<section class="section">
			<div class="columns is-centered">
				<div class="column is-two-thirds">
					<figure class="image mb-4">
						<img src="https://via.placeholder.com/1280x320" :alt="project.name">
					</figure>

					<h2 class="title">
						{{ project.name }}
					</h2>

					<p class="mb-4" v-if="project.owner">
						<strong>Project owner: </strong>
						{{ project.owner.name }}
					</p>

					<p>
						{{ project.description }}
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data () {
			return {
				project: {}
			}
		},

		async mounted () {
			let { data } = await axios.get(`projects/${this.$route.params.id}`)

			this.project = data.data
		}
	}
</script>