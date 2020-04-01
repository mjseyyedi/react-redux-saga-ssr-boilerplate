import React, {useState, useEffect} from 'react'

import {GlobalContext} from 'components/root/Context'

import styles from './styles'
import './style'

const Home = ({setState, ...props}) => {

  useEffect(() =>{
    setTimeout(() =>{
      setState('title', 'new title')
    } , 1000)
  } , [])

  return (<GlobalContext.Consumer>
      {
        context => {
          return <div className={styles.container}>
            <div>
              {context.title}
            </div>
            <div>
              {context.description}
            </div>
          </div>
        }
      }

    </GlobalContext.Consumer>

  )
}

export default Home
