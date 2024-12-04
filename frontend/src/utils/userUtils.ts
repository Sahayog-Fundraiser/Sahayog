export const getFirstName = (fullName: string): string => {
    const firstSpaceIndex = fullName.indexOf(' ');
    if (firstSpaceIndex === -1) {
        return fullName;
    } else {
        return fullName.substring(0, firstSpaceIndex);
    }
};

export const getLastName = (fullName: string): string => {
    const lastSpaceIndex = fullName.lastIndexOf(' ');
    if (lastSpaceIndex === -1) {
        return fullName;
    } else {
        return fullName.substring(lastSpaceIndex + 1);
    }
};