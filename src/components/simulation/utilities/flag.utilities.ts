export class FlagUtilities {
    static hasFlag(flag: number, flagToCheck: number): boolean {
        return (flag & flagToCheck) > 0;
    }

    static clearFlag(flag: number, flagToCheck: number): number {
        return flag & ~flagToCheck;
    }

    static setFlag(flag: number, flagToCheck: number): number {
        return flag | flagToCheck;
    }

    static toggleFlag(flag: number, flagToToggle: number): number {
        return flag ^ flagToToggle;
    }
}
