import Client from "../models/client.model.js";

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: "Client no found" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createClient = async (req, res) => {
  const { name, animalname, address, contact } = req.body;
  try {
    const newClient = new Client({
      name,
      animalname,
      address,
      contact,
    });
    await newClient.save();
    res.json(newClient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    if (!deletedClient)
      return res.status(404).json({ message: "Client not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { name, animalname, address, contact } = req.body;
    const clientUpdate = await Client.findOneAndUpdate(
      { _id: req.params.id },
      { name, animalname, address, contact },
      { new: true }
    );
    return res.json(clientUpdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
