const signsMock = require("../mock/signs.json");
const Signs = require("../models/Signs");
const Pricelist = require("../models/Pricelist");
const pricelistMock = require("../mock/pricelist.json");
const Idn = require("../models/Idn");
const idnMock = require("../mock/idn.json");
module.exports = async () => {
    const signs = await Signs.find();
    if (signs.length !== signsMock.length) {
        await createInitialEntity(Signs, signsMock);
    }
    const pricelist = await Pricelist.find();
    if (pricelist.length !== pricelistMock.length) {
        await createInitialEntity(Pricelist, pricelistMock);
    }
    const idn = await Idn.find();
    if (idn.length !== idnMock.length) {
        await createInitialEntity(Idn, idnMock);
    }
};

async function createInitialEntity(Model, data) {
    if (Model.collection) {
        // await Model.collection.drop();
    }

    return Promise.all(
        data.map(async item => {
            try {
                if (item.id) {
                    delete item.id;
                }
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            } catch (e) {
                return e;
            }
        })
    );
}
