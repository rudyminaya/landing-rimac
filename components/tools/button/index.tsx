import React from 'react'
import Link from 'next/link'
import styles from '../../../styles/buttons.module.scss'

interface Props {
    textButton: string
    disabled: boolean
}

interface BtnMail {
    textButton: string
    mail: string
}

interface Home {
    link: string
    textLink: string
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

export const Homebtn = (props: Home) => {
    return (
        <Link href={props.link}>
            <a className={styles.homebtn}>{props.textLink}</a>
        </Link>
    )
}
