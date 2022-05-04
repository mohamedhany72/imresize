import imageResize from "../../util/imageAPI/imageTransform";

describe("suite to test the functionality of the app", (): void => {
    it("image resized and created in thumnails folder", async (): Promise<void> => {
        const path = await imageResize("fjord", 300, 200);
        expect(path).toEqual(
            "/assets/images/thumbnails/fjord_thumb_300x200.jpg"
        );
    });
});
