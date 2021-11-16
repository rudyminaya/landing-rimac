import React, { useEffect, useState } from 'react'
import styles from '../../styles/form.module.scss'
import FirstStep from './firstStep'
import SecondStep from './secondStep'
import Thanks from './thanks'

enum Paso {
    PRIMERO = 'primero',
    SEGUNDO = 'segundo',
    GRACIAS = 'gracias',
}

interface IDatosPersonales {
    numDocumento: string
    nombres: string
    apellidoPaterno: string
    apellidoMaterno: string
    fecNacimiento: string
    sexo: string
}

const Form = () => {
    const [datosPersonales, setDatosPersonales] = useState<IDatosPersonales>()
    const [nombreCorto, setNombreCorto] = useState('')
    const [paso, setPaso] = useState<Paso>(Paso.PRIMERO)
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

    switch (paso) {
        case Paso.PRIMERO:
            return (
                <div className={styles.form}>
                    <FirstStep
                        datos={datosPersonales}
                        nombre={nombreCorto}
                        onClick={() => {
                            setPaso(Paso.SEGUNDO)
                        }}
                    />
                </div>
            )

        case Paso.SEGUNDO:
            return (
                <div className={styles.form}>
                    <SecondStep
                        nombre={nombreCorto}
                        onClick={() => {
                            setPaso(Paso.GRACIAS)
                        }}
                    />
                </div>
            )

        case Paso.GRACIAS:
            return (
                <div className={styles.form}>
                    <Thanks />
                </div>
            )
    }
}

export default Form
