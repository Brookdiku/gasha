import { validateUsername } from '@/lib/validator/validator';
import { SignInResponse, signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

export const handleLogin = async (e: React.FormEvent, setErrors: React.Dispatch<React.SetStateAction<CredentialsError>>, credentials: Credentials) => {
    e.preventDefault();
    const { username, password } = credentials;
    const isValidUsername = validateUsername(username);
    const isValidPassword = password.trim() !== '' ? true : false;
    if (!isValidUsername || !isValidPassword) {
        setErrors({
            username: !isValidUsername ? 'Username must be greater than 4 characters.' : '',
            password: !isValidPassword ? 'Password cannot be empty' : ''
        });
        return;
    }
    try {

        await signIn("credentials", {
            username: username,
            password: password,
            redirect: false,
        }).then((response: SignInResponse | undefined) => {
            if (!response) {
                // Handle the case where response is undefined
                console.log("Response is undefined");
                return;
            }
            const { ok, error } = response;
            if (ok) {

            } else {
                console.log(error);
                toast.error("Credentials do not match!");
            }
        })
    } catch (error: any) {
        console.log("Error logging in:", error.message);
        // Handle specific error cases if needed
    }
}
export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string, setCredentials: React.Dispatch<React.SetStateAction<Credentials>>) => {
    const value = e.target.value;
    setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [key]: value
    }));
};