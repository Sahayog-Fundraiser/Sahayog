import { useEffect, useState } from "react";

const PhoneNo = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [countryCode, setCountryCode] = useState<string>("");

    useEffect(() => {
        const fetchUserCoordinates = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    getCountryCodeFromCoordinates(position.coords.latitude, position.coords.longitude);
                },
                (error) => {
                    console.error('Error getting user coordinates:', error);
                }
            );
        };

        const getCountryCodeFromCoordinates = async (latitude: number, longitude: number) => {
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
                const data = await response.json();
                if (data && data.address && data.address.country_code) {
                    setCountryCode(data.address.country_code.toUpperCase());
                }
            } catch (error) {
                console.error('Error fetching country code:', error);
            }
        };
        fetchUserCoordinates();

    }, []);

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputPhoneNumber = event.target.value;
        const sanitizedPhoneNumber = inputPhoneNumber.replace(/\D/g, '');
        setPhoneNumber(sanitizedPhoneNumber);
    };

    return (
        <>
            <p className="poppins-medium">Phone Number</p>
            <label className="input input-success bg-brand-100 flex items-center gap-4 p-2 rounded-md">
                {countryCode && (
                    <span className="ml-2">{`+${countryCode}`}</span>
                )}
                <input
                    type="tel"
                    className="grow border-none outline-none bg-transparent poppins-thin text-black"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />
            </label>
        </>
    );
}

export default PhoneNo;
