import React from 'react'
import styles from '../../../styles/form.module.scss'

interface Props {
    type: string
    name: string
    id: string
    label: string
}

interface Check extends Props {
    link: string
    textLink: string
}

export const ContentInput = (props: Props) => {
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()

    console.log(today)
    console.log(day, month, year)
    return (
        <div className={styles.form__input}>
            <input
                type={props.type}
                className={styles.text}
                name={props.name}
                id={props.id}
                placeholder={props.type === 'date' ? '' : ' '}
                min={props.type === 'date' ? '' : 2}
                max={props.type === 'date' ? `${year}-${month}-${day}` : 11}
            />
            <label className={styles.label} htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    )
}

export const CheckInput = (props: Check) => {
    return (
        <div className={styles.form__checkInput}>
            <input
                type={props.type}
                className={
                    props.type === 'checkbox' ? styles.checkbox : styles.radio
                }
                name={props.name}
                id={props.id}
            />
            <label htmlFor={props.id}>
                {props.label} <a href={props.link}>{props.textLink}</a>{' '}
            </label>
        </div>
    )
}

export const SelectDocument = () => {
    let documents = ['DNI', 'CE']
    return (
        <div className={styles.form__select}>
            <select name="doi" id="doi" defaultValue={documents[0]}>
                {documents.map((e, i) => (
                    <option key={i} value={e}>
                        {e}
                    </option>
                ))}
            </select>
        </div>
    )
}
