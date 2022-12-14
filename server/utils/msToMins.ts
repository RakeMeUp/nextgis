export function msToMins(ms: number): number {
    return Math.floor(((ms % 86400000) % 3600000) / 60000);
}
