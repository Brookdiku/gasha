export const validateUsername = (username: string) => {
    const usernameRegex = /^[a-zA-Z0-9_]{4,}$/; // Username must be greater than 4 characters
    return usernameRegex.test(username);
};