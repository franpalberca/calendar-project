export function retrieveLocalStorage() {
    const keys = Object.keys(localStorage);
    let localData = {};
    const response = [];
    keys.forEach((key) => {
        if (key.startsWith("Event:")) {
            const value = localStorage.getItem(key);
            if (value) {
                const parsedValue = JSON.parse(value);
                localData[key] = parsedValue;
                response.push(localData[key]);
            }
        }
    });
    return response;
}
//# sourceMappingURL=retrieveLocalStorage.js.map