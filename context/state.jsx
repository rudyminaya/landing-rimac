import { createContext, useReducer } from 'react'

const initialState = {
    pasos: {
        userForm: {
            documentType: 'dni',
            name: null,
        },
    },
}

export const Store = createContext({ state: initialState, dispatch: () => {} })

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERFORM':
            return {
                ...state,
                pasos: {
                    ...state.pasos,
                    userForm: { ...state.pasos.userForm, ...action.payload },
                },
            }
    }
}

export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <Store value={{ state, dispatch }}>{props.children}</Store>
}
