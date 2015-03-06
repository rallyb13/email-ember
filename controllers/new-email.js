Bmail.NewEmailController = Ember.Controller.extend({
  actions: {
    send: function() {
      var newEmail = this.store.createRecord('email', {
        isFrom: this.get('isFrom'),
        isTo: this.get('isTo'),
        subject: this.get('subject'),
        message: this.get('message')
        // folder: this.set("inbox")
        // timer: this.set(Date.now()),
        // showDate: this.set(new Date())
      });
      newEmail.save();
      this.transitionToRoute('emails');
    }
  }
});
