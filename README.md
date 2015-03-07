```
Welcome to B-mail!
```

It's like electronic mail, but it's all Benjamin's
(and it doesn't go anywhere).
This is an Ember.js website.

Due to asynchronous loading issues, you should use:

```
python -m SimpleHTTPServer
```

in the console in order to display this site.

Seeing as there is no log in,
this email is currently an everyone-purpose email,
which means you have to enter both the from & the to of each email.
I'm hopeful that this will make for easier sorting...
once I add that functionality.

```
Current issues:
```

While I could easily create an email once already inside a folder,
I can't figure out a way to add the email a created folder
after the email is already created...

The forms don't currently clear out.

I'd eventually like to make the compose button disappear
while the form button is visible. Just haven't gotten to that
with the higher priority stuff in my way.

Oh, and the navbar could be nicer.

Benjamin D. Herson is the author. MIT rights.


notes
 |
 |
 |
\ /


...experiment for one method of putting email in folder:
(in new-email.hbs)
<div class="form-group">
  <label for="fileAs">Send email to folder?</label>
  <select id="fileAs" {{bind-attr value=fileAs}}>
    {{#each item in folders}}
      <option>{{name}}</option>
    {{/each}}
  </select>
</div>

(in new-email.js ctrl)
needs: 'folders',
&
folder: this.get('fileAs'),

...another thought is to connect through pop-in form
(in email.hbs)
{{#link-to 'mover' this.id}}
  <button class="btn btn-sm btn-success">Add to folder?</button>
{{/link-to}}

but without ability to make option wheel work, would have to display
folders and have user enter (or checkbox) selection. Clunky.
and even then, this.id probably won't work--connects to email


...I'd prefer to be able to bring in inbox as a stored folder.
Then I could just allow emails to be made in correct folder.
Would still need a place for an update/"enfold" method,
a way to make possible folders list out and be selected from.
I'm sorta surprised I can't figure out how to do this.
The ember is kinda in my way, which is the opposite of what we want:
the powerful tool should make things easier.
Someone really needs to help the ember people with their documentation.
If I understood it all better, maybe I'd even volunteer.
