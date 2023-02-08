export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    do {
        const midpoint = Math.floor(low + (high - low) / 2 );
        const present_value = haystack[midpoint];

        if (present_value === needle) {
            return true;
        } else if (present_value > needle) {
            high = midpoint;
        } else if (present_value < needle) {
            low = midpoint + 1;
        }
    } while (low < high);
    return false;
}