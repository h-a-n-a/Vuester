import Vue from 'vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

const mixins = {
  methods: {
    sayName() {
      console.log("Hiyo! I'm Vuester!")
    }
  }
}

Vue.mixin(mixins)
