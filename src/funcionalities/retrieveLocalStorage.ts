export function retrieveLocalStorage(){
    const keys: string[] = Object.keys(localStorage);
    let localData: Record<string, object> = {};
    const response: object[] = [];
    keys.forEach((key: string) => {
        if(key.startsWith("Event:")){
            const value = localStorage.getItem(key);
            if (value) {
                const parsedValue: object = JSON.parse(value);
                localData[key] = parsedValue;
                response.push(localData[key]);
            }
        }
    })
    return response;
}
