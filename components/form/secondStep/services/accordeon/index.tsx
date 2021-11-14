import React, { useEffect, useState } from 'react'
import plans from '../../../../../styles/plans.module.scss'

interface Props {
    data: Idata
    default: boolean
}
interface Idata {
    titulo: string
    type: string
    datos: string[]
}

const Accordeon = (props: Props) => {
    const [data, setData] = useState<Idata>({ titulo: '', type: '', datos: [] })

    useEffect(() => {
        setData(props.data)
    }, [])

    return (
        <div className={plans.services__accordeon}>
            <input
                type="checkbox"
                id={data.type}
                name="accordeon"
                defaultChecked={props.default}
            />
            <label
                className={plans.services__accordeon__check}
                htmlFor={data.type}
            >
                {data.titulo}
            </label>
            <ul className={plans.services__accordeon__list}>
                {data.datos.map((element, w) => {
                    return <li key={w}>{element}</li>
                })}
            </ul>
        </div>
    )
}

export default Accordeon
