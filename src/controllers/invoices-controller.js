const pool = require("../config/db_config");

module.exports = {
  GET_INVOICES: async (req, res) => {
    try {
      if (!req.query.paid_like) {
        const invoices = await pool.query(`SELECT * FROM invoices`);
        return res.status(200).json(invoices.rows);
      }
      const invoices = await pool.query(
        `SELECT * FROM invoices where paid=$1`,
        [req.query.paid_like]
      );
      return res.status(200).json(invoices.rows);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ error: true, message: error.message });
    }
  },
  GET_ONE_INVOICE: async (req, res) => {
    try {
      const id = req.params.id;
      const invoice = await pool.query(`SELECT * FROM invoices where id=$1`, [
        id,
      ]);

      if (!invoice.rows[0]) {
        return res.status(404).json("Invoice not found");
      }

      return res.status(200).json(invoice.rows[0]);
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ error: true, message: "Internal server error" });
    }
  },
  ADD_INVOICE: async (req, res) => {
    try {
      const {
        userId,
        to,
        createdDate,
        email,
        dueDate,
        term,
        description,
        price,
      } = req.body;

      await pool.query(
        `INSERT INTO invoices(user_id, "to", created_date, email, term, description, price, due_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,
        [userId, to, createdDate, email, term, description, price, dueDate]
      );

      return res.status(201).json("Invoice added successfully");
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ error: true, message: error.message });
    }
  },
  UPDATE_INVOICE: async (req, res) => {
    try {
      const id = req.params.id;

      const invoice = await pool.query(`SELECT * from invoices where id=$1`, [
        id,
      ]);

      if (!invoice.rows[0]) {
        return res.status(404).json("Invoice was not found");
      }

      const { to, createdDate, email, dueDate, term, description, price } =
        req.body;

      await pool.query(
        `UPDATE invoices SET "to"=$1, created_date=$2, email=$3, term=$4, description=$5, price=$6, due_date=$7 where id=$8`,
        [to, createdDate, email, term, description, price, dueDate, id]
      );

      return res.status(200).json("Invoice updated successfully");
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ error: true, message: "Internal server error" });
    }
  },
  PAID_INVOICE: async (req, res) => {
    try {
      const id = req.params.id;

      const invoice = await pool.query(`SELECT * from invoices where id=$1`, [
        id,
      ]);

      if (!invoice.rows[0]) {
        return res.status(404).json("Invoice was not found");
      }

      const { userId, paid } = req.body;

      await pool.query(`UPDATE invoices SET paid=$1 where id=$2`, [paid, id]);

      return res.status(200).json("Invoice updated successfully");
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ error: true, message: "Internal server error" });
    }
  },
  DELETE_INVOICE: async (req, res) => {
    try {
      const id = req.params.id;

      const invoice = await pool.query(`SELECT * from invoices where id=$1`, [
        id,
      ]);

      if (!invoice.rows[0]) {
        return res.status(404).json("Invoice was not found");
      }

      await pool.query(`DELETE FROM invoices where id=$1`, [id]);

      return res.status(200).json("Invoice deleted successfully");
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ error: true, message: "Internal server error" });
    }
  },
};
