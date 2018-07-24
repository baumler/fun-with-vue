<template>
  <div class="content">
    <page-header>
      <template slot="title">Vue A11y Calendar</template>
    </page-header>

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
import PageHeader from '@/components/PageHeader';
import Calendar from 'vue-a11y-calendar/calendar';
import DatePicker from 'vue-a11y-calendar/datepicker';

export default {
  components: {
    PageHeader,
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
