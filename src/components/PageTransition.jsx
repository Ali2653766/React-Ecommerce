import React from 'react'
import {motion} from 'framer-motion'
function PageTransition({children}) {
  return (
    <motion.div
        initial={{opacity: 0, y: 30}}
        animate = {{opacity: 1, y: 0}}
        exit= {{opacity: 0, y: -30}}
        transition={{duration: 0.3}}
    >
        
        {children}
    </motion.div>
  )
}

export default PageTransition
