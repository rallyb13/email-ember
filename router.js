Bmail.Router.map(function() {
  this.resource('emails', {path: '/'}, function() {
    this.resource('new-email');
  });

  this.resource('email', {path: '/email/:email_id'});

  this.resource('folders', function() {
    this.resource('new-folder');
  });

  this.resource('folder', {path: '/folder/:folder_id'});
});
