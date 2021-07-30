import './Deck.css';

import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'

import scroll from './tech-images/scroll.png'
import react from './tech-images/front-end/reactjs.png'
import reactNative from './tech-images/front-end/react_native.png'
import flutter from './tech-images/front-end/flutter.png'
import threejs from './tech-images/front-end/threejs.png'
import sass from './tech-images/front-end/sass.png'
import bootstrap from './tech-images/front-end/bootstrap.png'
import jquery from './tech-images/front-end/jquery.png'
import electron from './tech-images/front-end/electron.png'
import selenium from './tech-images/front-end/selenium.png'
import javascript from './tech-images/front-end/javascript.png'
import css from './tech-images/front-end/css.png'
import html from './tech-images/front-end/html.png'

import nodejs from './tech-images/back-end/nodejs.png'
import django from './tech-images/back-end/django.png'
import python from './tech-images/back-end/python.jpeg'
import firebase from './tech-images/back-end/firebase.png'
import firestore from './tech-images/back-end/firestore.png'
import mangodb from './tech-images/back-end/mangodb.png'
import git from './tech-images/back-end/git.png'
import github from './tech-images/back-end/github.jpg'
import docker from './tech-images/back-end/docker.png'

import scrum from './tech-images/boas-praticas/scrum.jpg'
import cleanCode from './tech-images/boas-praticas/clean-code.jpg'
import design from './tech-images/boas-praticas/design.jpg'
import startup from './tech-images/boas-praticas/startup-enxuta.jpg'

function Deck(prop) {

  let cards = []
  if (prop.estado === 'Front-end') {
    cards = [
      html,
      css,
      javascript,
      selenium,
      electron,
      jquery,
      bootstrap,
      sass,
      threejs,
      flutter,
      reactNative,
      react,
      scroll
    ]
  }
  else if (prop.estado === 'Back-end') {
    cards = [
      docker,
      github,
      git,
      mangodb,
      firestore,
      firebase,
      python,
      django,
      nodejs,
      scroll
    ]
  }
  else if (prop.estado === 'Boas Práticas') {
    cards = [
      startup,
      design,
      cleanCode,
      scrum,
      scroll
    ]
  }

  // These two are just helpers, they curate spring data, values that are later being interpolated into css
  const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
  const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <div className='deck__center'>
      <div className='deck__position'>
        <animated.div className='deck' key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div className='deck__algo' {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
        </animated.div>
      </div>
    </div>

  ))
}

export default Deck;
