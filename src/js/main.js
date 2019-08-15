import { TimelineMax } from 'gsap/TweenMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

window.onload = () => {
  const controller = new ScrollMagic.Controller();

  const timeline = new TimelineMax();
  timeline
    .to('#sixth', 6, { y: -700 })
    .to('#fifth', 6, { y: -500 }, '-=6')
    .to('#fourth', 6, { y: -400 }, '-=6')
    .to('#third', 6, { y: -300 }, '-=6')
    .to('#second', 6, { y: -200 }, '-=6')
    .to('#first', 6, { y: -100 }, '-=6')
    .to('.content, .blur', 6, { top: '0%' }, '-=6')
    .to('nav, .title, .footer', 6, { y: -600 }, '-=6')
    .from('.one', 3, { top: '40px', autoAlpha: 0 }, '-=4')
    .from('.two', 3, { top: '40px', autoAlpha: 0 }, '-=3.5')
    .from('.three', 3, { top: '40px', autoAlpha: 0 }, '-=3')
    .from('.four', 3, { top: '40px', autoAlpha: 0 }, '-=2.5')
    .from('.content__text', 3, { y: 60, autoAlpha: 0 }, '-=3');

  // eslint-disable-next-line no-unused-vars
  const scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: '200%',
    triggerHook: 0
  })
    .setTween(timeline)
    .setPin('section')
    .addTo(controller);
};
