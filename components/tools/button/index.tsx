import React from 'react'
import styles from '../../../styles/buttons.module.scss'

interface Props {
    textButton: string
    disabled: boolean
}

interface BtnMail {
    textButton: string
    mail: string
}

export const Submitbtn = (props: Props) => {
    return (
        <button
            type="submit"
            disabled={props.disabled}
            className={styles.submit}
        >
            {props.textButton}
        </button>
    )
}

export const Mailbtn = (props: BtnMail) => {
    return (
        <a href={`mailto:${props.mail}`} className={styles.mailbtn}>
            {props.textButton}
        </a>
    )
}
