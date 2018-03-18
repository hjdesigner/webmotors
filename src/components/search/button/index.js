'use strict'
import React from 'react'

const ButtonDefault = ({ divClass, title, handle }) => (
  <button className={`search-footer__buttons--${divClass}`} onClick={handle}>{title}</button>
)

export default ButtonDefault
