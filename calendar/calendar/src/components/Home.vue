<template lang="pug">
 .content-wrapper
    section
      .container
        h1.ui-title-1 Home
        input(
          type ="text"
          placeholder="What we will watch?"
          v-model="taskTitle"
          @keyup.enter="newTask"
        )
        textarea(
          type ="text"
          v-model="taskDescription"
          @keyup.enter="newTask"
        )
        .option-list
          input.what-watch--radio(
            type="radio"
            id="radioFilm"
            value="Film"
            v-model="whatWatch"
          )
          label(
            for="radioFilm"
          ) Film
          input.what-watch--radio(
            type="radio"
            id="radioSerial"
            value="Serial"
            v-model="whatWatch"
          )
          label(
            for="radioSerial"
          ) Serial
        .total-time
          .total-time__film(
            v-if="whatWatch === 'Film'"
          )
            span.time-total Hours
            input.time-input(
              type="number"
              v-model="filmHours"
            )
            span.time-total Minutes
            input.time-input(
              type="number"
              v-model="filmMinutes"
            )
            p {{filmTime}}
          .total-time__serial(
            v-if="whatWatch === 'Serial'"
          )
            span.time-total How many season?
            input.time-input(
              type="number"
              v-model="serialSeason"
            )
            span.time-total How many series?
            input.time-input(
              type="number"
              v-model="serialSeries"
            )
            span.time-total How long is one  series? (minutes)
            input.time-input(
              type="number"
              v-model="serialSeriesMinutes"
            )
            p {{serialTime}}
        .tag-list
          .ui-tag__wrapper(
            v-for="tag in tags"
            :key="tag.title"
          )
            .ui-tag(
              @click="addTagUsed(tag)"
              :class="{ active: tag.use }"
            )
              span.tag-title {{tag.title}}
              span.button-close
        p {{ tagsUsed }}
</template>
<script>
export default {
  data () {
    return {
      taskTitle: '',
      taskDescription: '',
      whatWatch: 'Film',
      taskId: 3,
      // Total time
      // Film
      filmHours: 1,
      filmMinutes: 30,
      // Serial
      serialSeason: 1,
      serialSeries: 11,
      serialSeriesMinutes: 40,
      tagsUsed: [],
      tags: [
        {
          title: 'Comedy',
          use: false
        },
        {
          title: 'Western',
          use: false
        },
        {
          title: 'Fantastic',
          use: false
        }
      ]
    }
  },
  methods: {
    newTask () {
      if (this.taskTitle === '') {
        return
      }
      let time
      if (this.whatWatch === 'Film') {
        time = this.filmTime
      } else {
        time = this.serialTime
      }
      const task = {
        id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        time,
        completed: false,
        editing: false
      }
      console.log(task)
      // Reset
      this.taskId += 1
      this.taskTitle = ''
      this.taskDescription = ''
    },
    addTagUsed (tag) {
      tag.use = !tag.use
      if (tag.use) {
        this.tagsUsed.push(
          tag.title
        )
      } else {
        this.tagsUsed.splice(tag.title, 1)
      }
    },
    getHoursAndMinutes (minutes) {
      let hours = Math.trunc(minutes / 60)
      let min = minutes % 60
      return hours + ' Hours ' + min + ' Minutes '
    }
  },
  computed: {
    filmTime () {
      let min = (this.filmHours * 60) + (this.filmMinutes * 1)
      return this.getHoursAndMinutes(min)
    },
    serialTime () {
      let min = this.serialSeason * this.serialSeries * this.serialSeriesMinutes
      return this.getHoursAndMinutes(min)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .option-list
    display flex
    .what-watch--radio
      margin-right 12px
    label
      margin-right 20px
    &:last-child
      margin-bottom 0
  // Total time
  .total-time
    margin-bottom 20px
  .time-title
    display block
    margin-bottom 6px
  .time-input
    max-width 80px
    margin-right 10px
  .ui-tag
    margin-right 20px
    &:last-child
      margin-bottom 0
</style>
