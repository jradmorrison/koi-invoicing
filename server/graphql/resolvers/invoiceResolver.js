// import model
const Invoice = require('../../models/Invoice')

// import mongoose
const { Types: { ObjectId } } = require('mongoose');

// invoice resolver
const invoiceResolver = {
  // queries
  Query: {
    // read invoice by ID
    getInvoiceByID: async (_, { ID }) => {
      try {
        const invoice = await Invoice.findById(new ObjectId(ID));

        if (!invoice) {
          throw new Error('Contract not found');
        }

        return invoice;
      } catch (err) {
        throw new Error(`Error getting invoice: ${err.message}`);
      }
    },

    // read invcoice by business
    getInvoiceByBusiness: async (_, { businessID }) => {
      try {
        const invoices = await Invoice.find({ businessID });

        if (!invoices || invoices.length === 0) {
          throw new Error('business not found or invoices unavailable');
        }

        return invoices;
      } catch (err) {
        throw new Error(`Error getting invoices by business: ${err.message}`);
      }
    },
  },

  // queries
  Mutation: {
    // create invoice
    createInvoice: async (_, { ID, invoiceInput: { businessID, clientEmail, totalBalance, status, dateDue, serviceProvided } }) => {
      try {
        const newInvoice = {
          businessID,
          clientEmail,
          totalBalance,
          status,
          dateDue,
          serviceProvided
        }
        const invoice = new Invoice(newInvoice);
        return await invoice.save();
      } catch (err) {
        throw new Error(`Error creating invoice: ${err.message}`);
      }
    },

    // update invvoice
    updateInvoice: async (_, { ID, invoiceUpdate: { totalBalance, status } }) => {
      try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(
          new ObjectId(ID),
          {
            totalBalance,
            status,
          },
          { new: true }
        );

        if (!updatedInvoice) {
          throw new Error('Invoice not found');
        }

        return updatedInvoice;
      } catch (err) {
        throw new Error(`Error updating invoice: ${err.message}`);
      }
    },

    // delete invoice
    deleteInvoice: async (_, { ID }) => {
      try {
        const deletedInvoice = await Invoice.findByIdAndDelete(ID);
        if (!deletedInvoice) {
          throw new Error('Invoice not found');
        }

        return deletedInvoice;
      } catch (err) {
        throw new Error(`Error deleting invoice: ${err.message}`);
      }
    }
  }
}

// export invoice resolver
module.exports = invoiceResolver;