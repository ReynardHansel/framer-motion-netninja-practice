import React from 'react';
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'spring',
      // delay: 0.5,

      //* Orchestration properties below: (only works on spring?)
      mass: 0.4, //* higher = slower, lower = quicker
      damping: 8, //? idk read the docs :") or toy around with this value, smth like how much force absorbed by the wall that impacts how far you bounce back (?)
      when: 'beforeChildren', //* Completes this animation first, then the children elements will animate
      staggerChildren: 0.4 //* makes the children animates one by one, kinda like automatic delays for children
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants} >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => 
          <div key={topping}>{ topping }</div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Order;