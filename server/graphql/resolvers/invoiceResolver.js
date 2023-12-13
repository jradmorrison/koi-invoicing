// import model
const Invoice = require('../../models/Invoice');
const Business = require('../../models/Business');
const mail = require('../../utils/nodemailer');

const formatDate = require('../../utils/dateFormatter')

// import mongoose
const {
  Types: { ObjectId },
} = require('mongoose');

// invoice resolver
const invoiceResolver = {
  // queries
  Query: {
    // read invoice by ID
    getInvoiceByID: async (_, { ID }) => {
      try {
        const invoice = await Invoice.findById(new ObjectId(ID)).populate('businessId');
        if (!invoice ) {
          throw new Error('Contract not found');
        }

        return invoice;
      } catch (err) {
        throw new Error(`Error getting invoice: ${err.message}`);
      }
    },

    // read invoice by business
    getInvoiceByBusiness: async (_, { businessId }) => {
      try {
        const invoices = await Invoice.find({ businessId });

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
    createInvoice: async (
      _,
      {
        invoiceInput: {
          businessId,
          serviceTitle,
          clientName,
          clientEmail,
          totalBalance,
          dateDue,
          serviceProvided,
        },
      }
    ) => {
      const newInvoice = {
        businessId,
        serviceTitle,
        clientName,
        clientEmail,
        totalBalance,
        dateDue,
        serviceProvided,
      };
      try {       
        const invoice = await Invoice.create(newInvoice);
        const business = await Business.findOneAndUpdate(
          { _id: businessId },
          { $push: { invoices: invoice._id } },
          { new: true }
        );

        //TODO Generate Stripe Invoice
        //TODO Send Email to Client done
        //TODO Edit EmailPackage
        const EmailPackage = {
          from: business.name,
          fromEmail: business.email,
          to: clientName,
          toEmail: clientEmail,
          invoice: `Invoice #${invoice._id}`,
          invoiceDate: invoice.createdOn,
          paymentDueDate: formatDate(dateDue),
          totalAmount: totalBalance.toString(),
          taxes: '0.00',
          totalDue: totalBalance.toString(),
          desc: serviceProvided,
          url: "http://localhost:3000/invoice/" + invoice._id
        };

        mail(EmailPackage);

        return await invoice.save();
      } catch (err) {
        throw new Error(`Error creating invoice: ${err.message}`);
      }
    },

    // update invvoice
    updateInvoice: async (
      _,
      { ID, invoiceUpdate: { totalBalance, status, clientEmail, clientName, serviceProvided, serviceTitle, dateDue } }
    ) => {
      try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(
          new ObjectId(ID),
          {
            totalBalance,
            status,
            clientEmail, 
            clientName, 
            serviceProvided, 
            serviceTitle,
            dateDue
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
    },
  },
};

// export invoice resolver
module.exports = invoiceResolver;
