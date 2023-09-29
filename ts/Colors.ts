class Colors {
    public static readonly white = "#ffffff";
    public static readonly black = "#000000";
    public static readonly level0 = "#082239";
    public static readonly level1 = "#002557";
    public static readonly level2 = "#004891";
    public static readonly level3 = "#206dcf";
    public static readonly level4 = "#698cb3";
    public static readonly text0 = "#cca434";
    public static readonly text1 = "#be790a";
    public static readonly text2 = "#a45805";

    public static rightShift(array: string[], amount: number) {
        for (let i = 0; i < amount; i++) {
            array.unshift(array.pop()!);
        }
        return array;
    }

    public static textColors(shiftAmount: number = 0) {
        return this.rightShift([this.text0, this.text1, this.text2], shiftAmount);
    }

    public static levelColors(shiftAmount: number = 0) {
        return this.rightShift([this.level0, this.level1, this.level2, this.level3, this.level4], shiftAmount);
    }
}
export default Colors;