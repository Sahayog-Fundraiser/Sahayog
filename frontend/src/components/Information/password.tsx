'use client'
import { useEffect, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Password = () => {
    const [password, setPassword] = useState<string>("");
    const [reenteredPassword, setReenteredPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [passwordMatchError, setPasswordMatchError] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showReenteredPassword, setShowReenteredPassword] = useState<boolean>(false);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        if (newPassword.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
        } else {
            setPasswordError("");
        }
    };

    const handleReenteredPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newReenteredPassword = event.target.value;
        setReenteredPassword(newReenteredPassword);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleReenteredPasswordVisibility = () => {
        setShowReenteredPassword(!showReenteredPassword);
    };

    useEffect(() => {
        if (password && reenteredPassword && password !== reenteredPassword) {
            setPasswordMatchError("Passwords do not match");
        } else {
            setPasswordMatchError("");
        }
    }, [password, reenteredPassword]);

    return (
        <>
            <p className="poppins-medium">
                Password
            </p>
            <label className="input input-success bg-brand-100 flex items-center gap-4 p-2 rounded-md relative">
                <input
                    type={showPassword ? "text" : "password"}
                    className="grow border-none outline-none bg-transparent poppins-thin text-black pr-10" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center mr-2 focus:outline-none" 
                >
                    {showPassword ? <HiEyeOff /> : <HiEye />}
                </button>
            </label>
            {passwordError && (
                <p className="text-red-500">{passwordError}</p>
            )}
            <label className="input input-success bg-brand-100 flex items-center gap-4 p-2 rounded-md relative">
                <input
                    type={showReenteredPassword ? "text" : "password"}
                    className="grow border-none outline-none bg-transparent poppins-thin text-black pr-10" 
                    placeholder="Re-Enter password"
                    value={reenteredPassword}
                    onChange={handleReenteredPasswordChange}
                />
                <button
                    type="button"
                    onClick={toggleReenteredPasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center mr-2 focus:outline-none" 
                >
                    {showReenteredPassword ? <HiEyeOff /> : <HiEye />}
                </button>
            </label>
            {passwordMatchError && (
                <p className="text-red-500">{passwordMatchError}</p>
            )}
        </>
    );
}

export default Password;
