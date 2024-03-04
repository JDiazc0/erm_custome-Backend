import Balance from "../models/balance.model.js";

export const getBalances = async (req, res) => {
  try {
    const balances = await Balance.find();
    res.json(balances);
  } catch (error) {
    res.status(500).json({ error: "Balance error" });
  }
};

export const getBalance = async (req, res) => {
  try {
    const balance = await Balance.findById(req.params.id);
    if (!balance) return res.status(404).json({ message: "Balance not found" });
  } catch (error) {
    res.status(500).json({ error: "Balance error" });
  }
};

export const createBalance = async (req, res) => {
  const { month, income, expenses } = req.body;

  try {
    const newBalance = await new Products({
      month,
      income,
      expenses,
    });

    const savedBalance = newBalance.save();
    res.json(savedBalance);
  } catch (error) {
    res.status(500).json({ error: "Balance error" });
  }
};
