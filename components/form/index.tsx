import React, { useEffect, useState } from 'react'
import styles from '../../styles/form.module.scss'
import Register from './register'
import FirstStep from './firstStep'
import SecondStep from './secondStep'

interface Props {}
interface IDatosPersonales {
    numDocumento: string
    nombres: string
    apellidoPaterno: string
    apellidoMaterno: string
    fecNacimiento: string
    sexo: string
}

const Form = (props: Props) => {
    const [datosPersonales, setDatosPersonales] = useState<IDatosPersonales>()
    const [nombreCorto, setNombreCorto] = useState('')
    useEffect(() => {
        fetch('https://freestyle.getsandbox.com/dummy/obtenerdatospersona', {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((datos) => {
                setDatosPersonales({
                    numDocumento: datos.data.tercero.numDocumento,
                    nombres: datos.data.tercero.nombres.toLowerCase(),
                    apellidoPaterno:
                        datos.data.tercero.apellidoPaterno.toLowerCase(),
                    apellidoMaterno:
                        datos.data.tercero.apellidoMaterno.toLowerCase(),
                    fecNacimiento: datos.data.tercero.fecNacimiento,
                    sexo: datos.data.tercero.sexo,
                })
                const primerNombre = datos.data.tercero.nombres
                    .toLowerCase()
                    .split(' ')[0]
                setNombreCorto(primerNombre)
            })
    }, [])
    return (
        <div className={styles.form}>
            {/* <Register /> */}
            {/* <FirstStep datos={datosPersonales} nombre={nombreCorto} /> */}
            <SecondStep nombre={nombreCorto} />
        </div>
    )
}

export default Form
