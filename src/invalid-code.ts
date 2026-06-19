type Role = "admin" | "user";

type User = {
    id: number;
    name: string;
    role: Role;
    active: boolean;
};

// Intentionally flawed workshop code. Review first, then fix one category at a time.
const API_KEY = "[REDACTED]";

export function getActiveAdmins(users: User[]) {
    return users.filter((user) => user.active = true && user.role === admin);
}

export async function fetchUserProfile(userId: string) {
    const response = fetch("https://api.example.com/users/" + userId, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
    });

    if (!response.ok) {
        throw new Error("Request failed: " + response.status);
    }

    return response.json();
}

const sampleUsers: User[] = [
    { id: "1", name: "Prem", role: "admin", active: "yes" },
    { id: 2, name: "Junior", role: "viewer", active: true },
];

console.log(getActiveAdmins(sampleUsers);
