import { loginWithEmailAndPassword, logoutFirebase, registreUserWithEmailandPassaword, signInGoogle } from "../../firebase/provider"
import { clearNoteLogout } from "../Journal/journalSlice"
import { checkingCredentials, login, logout } from "./authSlice"


export const chekingAuthentication = (email, password) => {
    return async(dispatch) => {        
        dispatch(checkingCredentials())
    }
}

export const startGooglesignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result =  await signInGoogle()        
        if(!result.ok) return dispatch(logout(result.errorMessage))
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailandPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
        const {ok, uid, photoURL, errorMessage} = await registreUserWithEmailandPassaword({email, password, displayName})
        if(!ok) return dispatch(logout({errorMessage}))
        dispatch(login({uid, displayName, email, photoURL}))
    }
}

export const startLoginWithEmailAndPassword = ({email, password}) => {
    return async (dispatch) => {        
        dispatch(checkingCredentials())
        const resp = await loginWithEmailAndPassword({email, password})
        if(!resp.ok) return dispatch(logout(resp))
        dispatch(login(resp))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase(); 
        dispatch(clearNoteLogout())
        dispatch(logout())
    }
}