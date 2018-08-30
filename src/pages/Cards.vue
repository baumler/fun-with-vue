<template>
  <div class="content">
    <div class="grid">
      <flip-card
          transition-name="flip-horz"
          :card-main-styles="flipCardMainDefaults"
          :card-front-styles="flipCardFrontDefaults"
          :card-back-styles="flipCardBackDefaults"
      >
        <div slot="front"><img src="https://picsum.photos/200/300/?random/?gravity=north"/></div>
        <div slot="back">
          <p>Affogato dripper café au lait, roast et rich dark to go arabica white dark. Brewed, cup grinder half and half trifecta filter, coffee as pumpkin spice at brewed. Dark, and java, iced aged galão single shot caffeine chicory shop.</p>
        </div>
      </flip-card>

      <flip-card
          transition-name="flip-vert"
          :card-main-styles="flipCardMainDefaults"
          :card-front-styles="flipCardFrontDefaults"
          :card-back-styles="flipCardBackDefaults"
      >
        <div slot="front"><img src="https://picsum.photos/200/300/?random/?gravity=center"/></div>
        <div slot="back">
          <p>The particle is more ship now than spacecraft. chemical and pedantically ship-wide.</p>
          <p>The transformator is oddly united. Ships die on paralysis at subspace!</p>
        </div>
      </flip-card>
    </div>
    <br/>

    <div class="grid">
      <slide-card
          transition-name="slide-up"
          :card-main-styles="slideCardMainDefaults"
          :card-front-styles="slideCardFrontDefaults"
          :card-back-styles="slideCardBackDefaults"
      >
        <div slot="front"><img src="https://picsum.photos/200/300/?gravity=south"/></div>
        <div slot="back">BACK</div>
      </slide-card>

      <slide-card
          transition-name="slide-down"
          :card-main-styles="slideCardMainDefaults"
          :card-front-styles="slideCardFrontDefaults"
          :card-back-styles="slideCardBackDefaults"
      >
        <div slot="front"><img src="https://picsum.photos/200/300/?gravity=north"/></div>
        <div slot="back">BACK</div>
      </slide-card>

      <slide-card
          transition-name="slide-left"
          :card-main-styles="slideCardMainDefaults"
          :card-front-styles="slideCardFrontDefaults"
          :card-back-styles="slideCardBackDefaults"
      >
        <div slot="front"><img src="https://picsum.photos/200/300/?gravity=center"/></div>
        <div slot="back">BACK</div>
      </slide-card>

      <slide-card
          transition-name="slide-right"
          :card-main-styles="slideCardMainDefaults"
          :card-front-styles="slideCard1FrontStyles"
          :card-back-styles="slideCard1BackStyles"
      >
        <div slot="front">FRONT</div>
        <div slot="back">BACK</div>
      </slide-card>

      <slide-card
          transition-name="fade-out"
          :card-main-styles="slideCardMainDefaults"
          :card-front-styles="slideCardFrontDefaults"
          :card-back-styles="slideCardBackDefaults"
      >
        <div slot="front"><img src="https://picsum.photos/200/300/?random"/></div>
        <div slot="back">BACK</div>
      </slide-card>
    </div>
  </div>
</template>

<script>
import _clone from 'lodash/clone';
import FlipCard from '../components/cards/FlipCard.vue';
import SlideCard from '../components/cards/SlideCard.vue';

export default {
  components: { FlipCard, SlideCard },
  computed: {
    flipCardMainDefaults() {
      return {
        'width': '200px',
        'height': '300px'
      };
    },
    flipCardFrontDefaults() {
      return {};
    },
    flipCardBackDefaults() {
      return {
        'color': '#0087cc',
        'background-color': '#e1e1e1',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'padding': '1rem'
      };
    },
    slideCardMainDefaults() {
      return {
        'width': '200px',
        'height': '300px'
      };
    },
    slideCardFrontDefaults() {
      return {};
    },
    slideCardBackDefaults() {
      return {
        'padding': '1rem',
        'background-color': '#e1e1e1',
        'color': 'black',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center'
      };
    },
    slideCard1FrontStyles() {
      return {
        'background-color': 'red',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'padding': '0.5rem'
      };
    },
    slideCard1BackStyles() {
      return Object.assign(_clone(this.slideCardBackDefaults), {
        'padding': '1rem',
        'background-image': 'url(https://picsum.photos/g/200/300/?random)',
        'background-position': 'center',
        'color': 'white',
        'font-size': '2rem'
      });
    }
  }
};
</script>
