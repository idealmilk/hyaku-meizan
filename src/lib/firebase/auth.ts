
import {
  GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, 
} from 'firebase/auth'

import { auth } from './config'
import { createUser } from './firestore/users'

type Credentials = {
  email: string;
  password: string;
};

export const signInWithEmail = (credentials: Credentials) => {
  try {
    const res = signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password,
    )
    return res
  }
  catch (err) {
    return err
  }
}

export const signUp = async (credentials: Credentials) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password,
    )

    const user = userCredential.user

    if (!user) throw new Error('User not found after sign-up')

    await createUser({ firebaseId: user.uid, email: credentials.email })
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error in SignUpAPI:', error)
    throw error
  }
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider()

  try {
    await signInWithPopup(auth, provider)
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error signing in with Google', error)
  }
}

export async function signOut() {
  try {
    return auth.signOut()
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error signing out with Google', error)
  }
}