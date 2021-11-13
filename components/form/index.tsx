import React from 'react'
import styles from '../../styles/form.module.scss'
import Register from './register'

interface Props {}

const Form = (props: Props) => {
    return (
        <div className={styles.form}>
            <Register />
        </div>
    )
}

export default Form
