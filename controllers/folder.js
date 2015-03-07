Bmail.FolderController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm("You're sure? This will permanently shred this folder...")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('folders');
      }
    }
  }
});
