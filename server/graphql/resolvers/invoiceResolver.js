const Invoice = require('../../models/Invoice')
const { Types: { ObjectId } } = require('mongoose');

const invoiceResolver  = {
  Query: {
    getInvoiceByID: async (_, {ID}) => {
      try {
        const invoice = await Invoice.findById(new ObjectId(ID));
        
        if(!invoice) {
          throw new Error('Contract not found');
        }
        
        return invoice;
      } catch(err) {
        throw new Error(`Error getting invoice: ${err.message}`);
      }
    },
    getInvoiceByBusiness: async (_, {businessID}) => {
      try {
        const invoices = await Invoice.find({businessID});
        
        if(!invoices || invoices.length === 0) {
          throw new Error('business not found or invoices unavailable');
        }
        
        return invoices;
      } catch (err) {
        throw new Error(`Error getting invoices by business: ${err.message}`);
      }
    },
  },
  Mutation: {
    createInvoice: async (_, {ID, invoiceInput: {businessID, clientEmail, totalBalance, taxes}}) => {
      try {
        const newInvoice = {
          businessID,
          clientEmail,
          totalBalance,
          taxes,
          status: "PENDING",
        }
        const invoice = new Invoice(newInvoice);
        return await invoice.save();
      } catch (err) {
        throw new Error(`Error creating invoice: ${err.message}`);
      }
    },
    updateInvoice: async (_, {ID, invoiceUpdate: { totalBalance, status} }) => {
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
    deleteInvoice: async (_, {ID}) => {
      try {
        const deletedInvoice= await Invoice.findByIdAndDelete(ID);
        if(!deletedInvoice){
          throw new Error('Invoice not found');
        }
        
        return deletedInvoice;
      } catch (err) {
        throw new Error(`Error deleting invoice: ${err.message}`);
      }
    }
  }
}

module.exports = invoiceResolver;