const {
  listContacts,
  getById,
  addContact,
  updateContact,
  removeContact,
} = require("../models/contacts");

const getAll = async (req, res) => {
  const contacts = await listContacts();
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
  const contact = await getById(id);
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
  const newContact = await addContact(req.body);
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
  const contact = await updateContact(id, req.body);
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
  const contact = await removeContact(id);
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
};
