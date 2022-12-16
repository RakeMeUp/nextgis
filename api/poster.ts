export const poster = async (
    method: "POST" | "PUT",
    route: string,
    data?: any
): Promise<Error | void> => {
    fetch(route, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .catch((error) => {
            return error as Error;
        });
};
