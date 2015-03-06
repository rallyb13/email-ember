Bmail.Email = DS.Model.extend({
  isFrom: DS.attr(),
  isTo: DS.attr(),
  subject: DS.attr(),
  message: DS.attr()
});
