const router = require("express").Router();
const  phonesJSON = require("../data/phones.json");

//? GET "/phones" => Show all phones (use the phones.json) as fake data
router.get(("/"), async (req,res,next) => {
    try {
        // console.log("todo phones json: ", phonesJSON);
        res.json(phonesJSON);

    } catch (error) {
        next(error)
    }
})

//? GET "/phones/:id" => Show a phone details
router.get(("/:id"), async (req,res,next) => {

    const { id } = req.params;

    try {
        //console.log("json por id: ", phonesJSON[id]);
        res.json(phonesJSON[id]);

    } catch (error) {
        next(error)
    }
})





module.exports = router;
