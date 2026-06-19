type Role = "admin" | "user";

type User = {
    id: number;
    name: string;
    role: Role;
    active: boolean;
};

export function getActiveAdmins(users: User[]) {
    return users.filter((user) => user.active && user.role === "admin");
}

export async function fetchUserProfile(userId: string, apiKey: string) {
    if (!apiKey) {
        throw new Error("Missing API key");
    }

    const response = await fetch(`https://api.example.com/users/${encodeURIComponent(userId)}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return response.json();
}

const sampleUsers: User[] = [
    { id: 1, name: "Prem", role: "admin", active: true },
    { id: 2, name: "Junior", role: "user", active: true },
];

console.log(getActiveAdmins(sampleUsers));
