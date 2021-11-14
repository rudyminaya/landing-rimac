import React from 'react'
import styles from '../../../styles/form.module.scss'
import Link from 'next/link'

interface Props {
    paso: string
}

const Breadcrumb = (props: Props) => {
    let stepsQty = '7'
    return (
        <Link href="/">
            <a className={styles.form__breadcrumb}>
                PASO {props.paso} <span> DE {stepsQty}</span>
            </a>
        </Link>
    )
}

export default Breadcrumb
