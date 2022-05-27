export const saveToStorage = (key: string, data: any) => {
    if (data === undefined) throw new Error('Data undefined')
    window.localStorage.setItem(key, JSON.stringify(data));
};

export const getFromStorage = (key: string) => {
    try {
        const value = window.localStorage.getItem(key);
        if (value === null) return null;
        return JSON.parse(value);
    } catch (e) {
        console.error(e);
        return null;
    }
};

export const removeFromStorage = (key: string) => {
    window.localStorage.removeItem(key);
};