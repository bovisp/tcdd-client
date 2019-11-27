<template>
	<div class="container">
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-half">
          <form @submit.prevent="search" class="mb-4">
            <div class="field has-addons">
              <div class="control is-expanded">
                <input 
                  class="input is-medium is-rounded"
                  placeholder="What would you like to learn"
                  v-model="searchTerm"
                >
              </div>
              <div class="control">
                <button class="button is-medium is-rounded">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="columns is-centered">
        <div class="column is-two-thirds" v-if="results.length">
          <div v-for="(item, index) in paginatedItems" :key="index" class="mb-4">
            <div>
              <h2 class="title is-5 has-text-weight-normal my-0">
                <a href="#">{{ item.title }}</a>
              </h2>

              <p v-if="item.description" class="mt-1">
                <small>{{ item.description }}</small>
              </p>

              <small>
                <span class="has-text-grey">
                  <strong class="has-text-grey">Type:&nbsp;</strong>{{ item.type }}
                </span>

                &nbsp;&nbsp;&nbsp;&nbsp;

                <span class="has-text-grey">
                  <strong class="has-text-grey">Site:&nbsp;</strong>COMET
                </span>
              </small>
            </div>
          </div>

          <b-pagination
            :total="total"
            :current.sync="current"
            :per-page="perPage"
          ></b-pagination>
        </div>
      </div>
    </section>
	</div>
</template>

<script>
  import axios from 'axios'

	export default {
		name: 'home',

    data () {
      return {
        searchTerm: '',
        results: [],
        current: 1,
        perPage: 10
      }
    },

    methods: {
      async search () {
        let { data } = await axios.get(`search?q=${this.searchTerm}`)

        this.results = data
      }
    },

    computed: {
      paginatedItems() {
        let page_number = this.current-1
 
        return this.results.slice(page_number * this.perPage, (page_number + 1) * this.perPage);
      },

      total() {
        return this.results.length
      }
    }
	}
</script>