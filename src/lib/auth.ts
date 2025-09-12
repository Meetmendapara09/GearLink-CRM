// This file is machine-generated - edit at your own risk!
'use server';

import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut as firebaseSignOut
} from 'firebase/auth';
import { cookies } from 'next/headers';
import { auth } from './firebase';

export async function signInWithEmail({ email, password }: {email:string, password:string}) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();
    
    cookies().set('firebaseIdToken', idToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 1 day
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function signUpWithEmail({ email, password }: {email:string, password:string}) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();

    cookies().set('firebaseIdToken', idToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });
    
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function signOut() {
  try {
    await firebaseSignOut(auth);
    cookies().delete('firebaseIdToken');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
