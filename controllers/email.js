Bmail.EmailController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm("Obliterate Forever!?!?!")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('emails');
      }
    }
  }
});
