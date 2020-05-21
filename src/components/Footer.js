import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => ( <
    footer id = "footer"
    style = {
        props.timeout ? {
            display: 'none'
        } : {}
    } >
    <
    p className = "copyright" > & copy; Christopher Beltran 2020 developed with Gatsby Starter - Dimension < /p> <
    /footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer