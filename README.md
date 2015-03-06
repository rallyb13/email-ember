Seeing as there is no log in,
this email is currently an everyone-purpose email,
which means you have to enter both the from & the to of each email.


Current issues:
Set-bug: all the attributes I set rather than get
have been commented out (along with anything that relies on them)
due to the fact that it *sometimes* breaks the ability to add
a new object from the form. The errors also change.
Sometimes I get a message suggesting I'm using a variable in its
own definition. Other times I get undefined, and the error points
to those lines of code in the new-email controller.
-It's almost as if the Date method itself will sometimes work
and other times wants to be made into a function.

The forms don't currently clear out.

I'd eventually like to make the compose button disappear
while the form button is visible. Just haven't gotten to that
with the higher priority stuff in my way.

Navbar could be nicer.
