#####For when you don't want to have parallax effects running in the background.

Normally parallax effects work in the background, meaning you need to either settle for static background images or have larger than neccessary backgorund images to compensate.
This is a small jQuery plugin aims to make things easier.

#####How to use.

Just put the parallax.js file in you site directory and link it in your sites head.
Then just call it on your element using standard jQuery method calling, e.g.

>`$("#id").parallax();`

If you'd like to change how strong the effect is, the strength can be modified by entering a number in the parenthesis as a parameter.

The default strength is 1.2, 1 would be static, and <1 would give the reverse effect.

E.g.

>`$("#id").parallax(1.4);`
