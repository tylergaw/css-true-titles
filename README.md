# CSS True Titles

A title sequence made with CSS in the style of the [True Detective opening](http://youtu.be/ZRPpCqXYoos).

![Image showing the title cards](https://raw.github.com/tylergaw/css-true-titles/master/img/true-titles-tiles.jpg)

## Problems

 * CSS `mask` support is currently limited to blink/webkit. I'm only seeing it
 work on Chrome (v32.x) and Mobile Safari (whatever version is on iOS 7.x)
 [http://caniuse.com/css-masks](http://caniuse.com/css-masks)
 * High Res/Retina displays hate this demo. I think it's just too much moving
 around. Those big raster images and masks flake out from time to time.
 * File size. I'm using a number of large images with transparency so the page
 weight is about 4.3 MB. Ouch.


## Reference

  * CSS mask tutorial on HTML5 Rocks [http://www.html5rocks.com/en/tutorials/masking/adobe](http://www.html5rocks.com/en/tutorials/masking/adobe)
  * CSS masking spec [http://www.w3.org/TR/css-masking-1](http://www.w3.org/TR/css-masking-1)
  * animation-play-state docs on MDN [https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)

## What did I learn?

  * Strange rendering issues occur when attempting heavy lifting on Retina displays
  * `background-size: cover` Is very helpful for keeping images from becoming too
  small, however using it is also tricky. It's much harder to have things appear
  exactely how you want. You kind of have to let go and allow the browser to do
  what it wants.
  * When moving things with CSS always use `translate` in place of updating
  left/right/top/bottom position or `background-position`. Paul said it
  [here](http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/)
  On this demo I saw it first hand. When not using `translate` animations were
  choppy and CPU usage was through the roof.