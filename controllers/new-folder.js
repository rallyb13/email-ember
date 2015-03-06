Bmail.NewFolderController = Ember.Controller.extend({
  actions: {
    fold: function() {
      var newFolder = this.store.createRecord('folder', {
        name: this.get('name')
      });
      newFolder.save();
      this.transitionToRoute('folders');
    }
  }
});
