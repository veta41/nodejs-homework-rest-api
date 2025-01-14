const { Contact } = require("../models/contact");

const getAll = async (req, res) => {
  const { _id } = req.user;

  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  const contacts = await Contact.find(
    favorite ? { owner: _id, favorite } : { owner: _id },
    "",
    {
      skip,
      limit: Number(limit),
    }
  ).populate("owner", "email subscription");

  return res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (contact) {
    return res.json({
      status: "success",
      code: 200,
      data: {
        result: contact,
      },
    });
  }
  res.status(404).json({ message: "Not found" });
};

const add = async (req, res) => {
  const { _id } = req.user;
  const newContact = await Contact.create({ ...req.body, owner: _id });
  return res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newContact,
    },
  });
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (contact) {
    return res.json({
      status: "success",
      code: 200,
      data: {
        result: contact,
      },
    });
  }
  res.status(404).json({ message: "Not found" });
};

const removeById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByIdAndDelete(id);
  if (contact) {
    return res.json({
      status: "success",
      code: 200,
      data: {
        result: contact,
      },
    });
  }
  res.status(404).json({ message: "Not found" });
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.params;
  const contact = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  );
  if (contact) {
    return res.json({
      status: "success",
      code: 200,
      data: {
        result: contact,
      },
    });
  }
  res.status(404).json({ message: "Not found" });
};

module.exports = {
  getAll,
  getContactById,
  add,
  updateById,
  removeById,
  updateStatusContact,
};
