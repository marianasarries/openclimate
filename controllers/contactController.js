const Contact = require("./../models/contactModel");



exports.getContactsByZipCode = async (req, res) => {
  try {
    const contact = await Contact.find({ zipCode: req.body.zipCode });
    if (contact.length > 0) {
      res.status(200).render("base", { data: contact });
    }
    else {
      res.render('index', { error: true });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};



