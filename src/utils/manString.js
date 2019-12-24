                                //string
export const upperFirstChar = (lower) => {
    return lower.replace(/^\w/, function (chr) {
        return chr.toUpperCase();
    });
}

