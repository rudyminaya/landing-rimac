import React, { useEffect } from 'react'
import styles from '../../styles/form.module.scss'
import Register from './register'
import FirstStep from './firstStep'

interface Props {}

const Form = (props: Props) => {
    return (
        <div className={styles.form}>
            {/* <Register /> */}
            <FirstStep />
        </div>
    )
}

export default Form
