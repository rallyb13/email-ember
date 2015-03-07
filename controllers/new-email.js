Bmail.NewEmailController = Ember.Controller.extend({

  actions: {
    send: function() {
      var newEmail = this.store.createRecord('email', {
        isFrom: this.get('isFrom'),
        isTo: this.get('isTo'),
        subject: this.get('subject'),
        message: this.get('message'),
        timer: Date.now(),
        showDate: (new Date()).toString()
      });
      newEmail.save();
      this.transitionToRoute('emails');
    }
  }
});
