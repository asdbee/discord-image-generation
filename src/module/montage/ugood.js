const jimp = require(`jimp`);

module.exports = class Ugood {
    /**
     * Delete
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        let bg = await jimp.read(`${__dirname}/../../assets/ugood.png`);
        image = await jimp.read(image);
        image.resize(190, 190);
        image.rotate(280)
        bg.composite(image, 355, 125);
        let raw;
        bg.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};