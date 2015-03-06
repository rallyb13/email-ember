Bmail.NewEmailController = Ember.Controller.extend({
  actions: {
    send: function() {
      var newEmail = this.store.createRecord('email', {
        isFrom: this.get('isFrom'),
        isTo: this.get('isTo'),
        subject: this.get('subject'),
        message: this.get('message')
      });
      newEmail.save();
      this.transitionToRoute('emails');
    }
  }
});
