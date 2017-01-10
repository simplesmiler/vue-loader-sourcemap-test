var Vue = require('vue');
var App = require('vue!./app.vue');

new Vue({
  render: function(h) {
    return h(App);
  },
  el: '.app',
});
