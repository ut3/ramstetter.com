import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import './style.scss'

library.add(
  faGithub,
  faLinkedin,
)

const Icon = ({ name }) => (
  <div className="icon" title={name}>
    <FontAwesomeIcon icon={['fab', name]} />
  </div>
)

const UnsizedIcon = ({ name }) => (
    <FontAwesomeIcon icon={['fab', name]} />
)

export { UnsizedIcon as UnsizedIcon }
export default Icon
