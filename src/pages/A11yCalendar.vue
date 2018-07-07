<template>
  <div class="content">
    <h1 class="textCentered">Vue A11y Calendar</h1>
    <div class="aCalendar">
      <calendar></calendar>
    </div>
    <br/>
    <div class="aCalendar">
      <date-picker label="Pick a date" :inputs="datepickerStart"></date-picker>
    </div>
  </div>
</template>

<script>
import Calendar from 'vue-a11y-calendar/calendar';
import DatePicker from 'vue-a11y-calendar/datepicker';

export default {
  components: {
    Calendar,
    DatePicker
  },
  data() {
    return {
      datepickerStart: {
        local: 'date_local',
        day: 'date_day',
        month: 'date_month',
        year: 'date_year'
      }
    };
  }
};
</script>
