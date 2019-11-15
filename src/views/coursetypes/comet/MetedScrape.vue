<template>
  <div class="container">
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-two-thirds">
          <button 
            class="button is-primary"
            @click="scrape"
            :disable="started"
          >
            {{ buttonText }}
          </button>

          <div 
            class="m-progress mt-4 relative" 
            v-if="totalPages !== 0 && completedPage !== totalPages && !this.cancel"
          >
            <div class="m-progress__label">
              {{ completedPage }} of {{ totalPages }} pages completed
            </div>

            <div 
              class="m-progress__fill" 
              :style="{ 'width': `${percentage}%` }"
            ></div>

            <div class="m-progress__percentage">
              {{ percentage }}%
            </div>
          </div>

          <div>
            <button 
              class="button is-small is-text has-text-danger mt-4"
              v-if="started && !cancel"
              @click="cancelling"
            >
              Cancel MetEd scrape
            </button>
          </div>

          <article 
            class="message is-success mt-4"
            v-if="finished"
          >
            <div class="message-body">
              All MetEd modules successfully scraped.
            </div>
          </article>
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
      completedPage: 0,
      totalPages: 0,
      percentage: 0,
      cancel: false,
      started: false,
      finished: false
    }
  },

  computed: {
    buttonText () {
      return this.started ? 'Scraping MetEd pages...' : 'Perform MetEd Scrape'
    }
  },

  methods: {
    async scrape () {
      this.cancel = false

      this.started = true

      this.finished = false

      let { data } = await axios.get('comet/scrape')

      if (this.cancel) {
        this.started = false

        return
      }

      this.totalPages = data

      for (let i = 1; i <= data; i++) {
        if (this.cancel) {
          this.reset()

          return
        }

        let { data } = await axios.get(`comet/scrape/${i}`)

        this.completedPage = data
        
        this.percentage = Math.floor((this.completedPage / this.totalPages) * 100)
      }

      this.finished = true

      this.reset()
    },

    cancelling () {
      this.cancel = true

      this.$buefy.toast.open({
        message: `MetEd scrape cancelled. This may take a minute...`,
        type: 'is-danger',
        position: 'is-top',
        duration: 5000
      })
    },

    reset () {
      this.totalPages = 0

      this.completedPage = 0

      this.percentage = 0

      this.started = false
    }
  }
}
</script>