Bmail.Email = DS.Model.extend({
  isFrom: DS.attr(),
  isTo: DS.attr(),
  subject: DS.attr(),
  message: DS.attr(),
  folder: DS.attr(),
  timer: DS.attr(),
  showDate: DS.attr()
});
