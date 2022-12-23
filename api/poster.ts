type posterProps = {
    method: "POST" | "PUT";
    route: string;
    data?: any;
};

export const poster = async ({ route, method, data }: posterProps): Promise<Error | void> => {
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
