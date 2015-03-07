Bmail.Email = DS.Model.extend({
  isFrom: DS.attr(),
  isTo: DS.attr(),
  subject: DS.attr(),
  message: DS.attr(),
  timer: DS.attr(),
  showDate: DS.attr(),
  folder: DS.belongsTo('folder', {async: true})
});
