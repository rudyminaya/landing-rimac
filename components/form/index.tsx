import React, { useEffect, useState } from 'react'
import styles from '../../styles/form.module.scss'
import FirstStep from './firstStep'
import SecondStep from './secondStep'
import Thanks from './thanks'

interface Props {}
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
    const [first, setFirst] = useState<boolean>(true)
    const [second, setSecond] = useState<boolean>(false)
    const [thanks, setThanks] = useState<boolean>(false)
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
            {first
                ? first && (
                      <FirstStep
                          datos={datosPersonales}
                          nombre={nombreCorto}
                          onClick={async () => {
                              setSecond(!second)
                              await setFirst(!first)
                          }}
                      />
                  )
                : ''}
            {second
                ? second && (
                      <SecondStep
                          nombre={nombreCorto}
                          onClick={async () => {
                              setThanks(!thanks)
                              await setSecond(!second)
                          }}
                      />
                  )
                : ''}

            {thanks ? thanks && <Thanks /> : ''}
        </div>
    )
}

export default Form
