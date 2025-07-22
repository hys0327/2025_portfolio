import { allChiefs } from "@/data/chiefs";

export function getTopChiefs() {
    return allChiefs.sort((a, b) => b.score - a.score);
}
