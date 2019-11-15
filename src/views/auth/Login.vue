<template>
		<section class="hero is-link is-fullheight-with-navbar">
	  <div class="hero-body">
	    <div class="container">
	      <div class="columns is-centered">
	        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
	        	<form @submit.prevent="submit" class="box">
							<div class="field">
								<label for="email" class="label">
									Email
								</label>

								<input 
									type="email" 
									v-model="form.email" 
									id="email"
									class="input" 
								>
							</div>

							<div class="field">
								<label for="password" class="label">
									Password
								</label>

								<input 
									type="password" 
									v-model="form.password" 
									id="password"
									class="input" 
								>
							</div>

							<button class="button is-primary">
								Submit
							</button>
						</form>
	        </div>
	      </div>
	    </div>
	  </div>
	</section>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'login',

		data () {
			return {
				form: {
					email: '',
					password: ''
				}
			}
		},

		methods: {
			...mapActions({
				login: 'auth/login'
			}),

			submit () {
				this.login(this.form)
					.then(() => {
						this.$router.replace({ name: 'dashboard' })
					})
					.catch(() => {
						console.log('failed')
					})
			}
		}
	}
</script>