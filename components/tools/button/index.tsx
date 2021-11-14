import React from 'react'
import styles from '../../../styles/buttons.module.scss'

interface Props {
    textButton: string
    disabled: boolean
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
