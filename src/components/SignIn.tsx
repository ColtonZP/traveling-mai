import { useAuth } from '../AuthContext'

export const SignIn = () => {
    const { user, signIn, signOut } = useAuth()

    if (user.displayName) {
        return (
            <div className="user-options">
                <img src={user.photoURL || ''} className="user-photo" />
                <button className="sign-out" onClick={() => signOut()}>
                    Sign out
                </button>
            </div>
        )
    }

    return (
        <button className="sign-in" onClick={() => signIn()}>
            Sign in with Google
        </button>
    )
}
