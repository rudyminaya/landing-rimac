import React from 'react'
import plans from '../../../../styles/plans.module.scss'
import Accordeon from './accordeon'
import dataServices from './services.json'

interface Props {}

const Services = (props: Props) => {
    return (
        <div className={plans.services}>
            <p>Revisa nuestros</p>
            <p>servicios y exclusiones</p>
            {dataServices.map((e, i) => {
                return (
                    <Accordeon
                        key={i}
                        data={e}
                        default={i === 0 ? false : false}
                    />
                )
            })}
        </div>
    )
}

export default Services
