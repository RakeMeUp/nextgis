export const poster = async (
    route: "POST" | "PUT",
    method: string,
    data?: any
): Promise<Error | void> => {
    fetch(route, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).catch((error) => {
        return error as Error;
    });
};
