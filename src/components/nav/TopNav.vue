<template>
	<div>
		<b-navbar type="is-light">
			<template slot="brand">
				<b-navbar-item tag="router-link" :to="{ name: 'home' }">
	        <img
	          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
	          alt="Lightweight UI components for Vue.js based on Bulma"
	        >
	      </b-navbar-item>
			</template>

			<template slot="start">
				<b-navbar-item tag="router-link" :to="{ name: 'projects-index'}">
	        Projects
	      </b-navbar-item>
			</template>

			<template slot="end">
				<b-navbar-dropdown :label="user.name" v-if="authenticated">
					<b-navbar-item tag="router-link" :to="{ name: 'dashboard'}">
		        Dashboard
		      </b-navbar-item>

					<b-navbar-item>
		        <a href="#" @click.prevent="signout">
							Logout
						</a>
		      </b-navbar-item>
				</b-navbar-dropdown>

				<b-navbar-item 
					tag="router-link" 
					:to="{ name: 'login'}"
					v-else
				>
	        Login
	      </b-navbar-item>
			</template>
		</b-navbar>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		computed: {
			...mapGetters({
				authenticated: 'auth/authenticated',
				user: 'auth/user'
			})
		},

		methods: {
			...mapActions({
				logout: 'auth/logout'
			}),

			signout () {
				this.logout()
					.then(() => {

						this.$router.replace({ name: 'home' })
					})
			}
		}
	}
</script>