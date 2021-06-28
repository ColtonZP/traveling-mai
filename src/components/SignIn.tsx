import { useAuth } from '../AuthContext'
import google from '../images/Google.svg'

export const SignIn = () => {
    const { user, signIn, signOut } = useAuth()

    if (user.displayName) {
        return (
            <div className="user-options">
                <img alt="user photo" src={user.photoURL || ''} className="user-photo" />
                <button className="sign-out" onClick={() => signOut()}>
                    Sign out
                </button>
            </div>
        )
    }

    return (
        <button className="sign-in" onClick={() => signIn()}>
            <img src={google} alt="google" />
            Sign in
        </button>
    )
}
