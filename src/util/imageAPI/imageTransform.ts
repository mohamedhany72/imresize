import sharp from "sharp";

const imageResize = async (
    filename: string,
    width: number,
    height: number
): Promise<string> => {
    const newPath =
        "/assets/images/thumbnails/" +
        filename +
        "_thumb_" +
        width +
        "x" +
        height +
        ".jpg";
    try {
        await sharp("assets/images/full/" + filename + ".jpg")
            .rotate()
            .resize(width, height)
            .jpeg({ mozjpeg: true })
            .toFile("." + newPath);
        return newPath;
    } catch {
        throw new Error("Error during image transform");
    }
};

export default imageResize;
