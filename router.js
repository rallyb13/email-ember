Bmail.Router.map(function() {
  this.resource('emails', {path: '/'}, function() {
    this.resource('new-email');
  });
  this.resource('email', {path: '/email/:email_id'})
});
