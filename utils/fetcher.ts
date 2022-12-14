import { Entry } from "../Interfaces/Entry";

export const fetcher = async (
    method: "POST" | "PUT" | "GET",
    route: string,
    data?: any
): Promise<Entry[] | undefined | number> => {
    switch (method) {
        case "PUT":
        case "POST":
            fetch(route, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            break;
        case "GET":
            const res = await fetch(route);
            const d = await res.json();
            return d;
    }
};
