import React from 'react';
import { Link } from 'react-router-dom';
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
      delay: 0.5
    }
  }
}

const nextBtnVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120 }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants= {containerVariants}
      initial= 'hidden'
      animate= 'visible'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li 
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ 
                scale: 1.2,
                color: '#F8E112',
                originX: 0 // transform-origin from left(?)
              }}
              transition={{
                type: 'spring',
                stiffness: 300
              }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextBtnVariants}
          // initial= 'hidden'
          // animate= 'visible'

          //* (initial = hidden) && (animate = visible) is already the case on the parent container, so framer will automatically assume the value of initial and animate as the same as the parent container (hidden & visible).

          //* However the value of the (hidden & visible), will use the value from 'nextBtnVariants' as it's variant
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{ 
                scale: 1.1,
                textShadow: '0px 0px 8px rgb(255,255,255)',
                boxShadow: '0px 0px 8px rgb(255,255,255)'
                }}>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;