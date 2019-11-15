<template>
	<article
		class="card mh-full"
	>
		<div class="card-image">
			<figure class="image is-4by3">
				<img :src="`${project.image}800/600`" :alt="project.name">
			</figure>
		</div>

		<div class="card-content">
			<h2 class="title is-5">
				<router-link
					:to="{ 
						name: 'projects-show',
						params: { id: project.id }
					}" 
					class="text-black"
				>
					{{ project.name }}
				</router-link>
			</h2>

			<p>{{ project.description }}</p>
		</div>
	</article>
</template>

<script>
	export default {
		props: {
			project: {
				type: Object,
				required: true
			}
		}
	}
</script>