import React, { useState } from 'react'
import styles from '../../../styles/form.module.scss'

interface Props {
    disabled: boolean
}

export const SelectDocument = (props: Props) => {
    let documents = ['DNI', 'CE']
    const [ndocument, setNdocument] = useState<string>(documents[0])

    const changeInput = (e: any) => {
        setNdocument(e.target.value)
    }

    return (
        <div className={styles.form__select}>
            <select
                name="doi"
                id="doi"
                onChange={changeInput}
                value={ndocument}
                defaultValue={documents[0]}
                disabled={props.disabled}
            >
                {documents.map((e, i) => (
                    <option key={i} value={e}>
                        {e}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default SelectDocument
