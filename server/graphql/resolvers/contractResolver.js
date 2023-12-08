// import models
const Contract = require('../../models/Contract')
const Service = require('../../models/Service');

// import mongoose
const { Types: { ObjectId } } = require('mongoose');

// contract resolver
const contractResolver = {
  // queries
  Query: {
    // read contract by ID
    getContractByID: async (_, { ID }) => {
      try {
        const contract = await Contract.findById(new ObjectId(ID));

        if (!contract) {
          throw new Error('Contract not found');
        }

        return contract;
      } catch (err) {
        throw new Error(`Error getting contract: ${err.message}`);
      }
    },

    // read contracts by business
    getContractsByBusiness: async (_, { businessID }) => {
      try {
        const contracts = await Contract.find({ businessID });

        if (!contracts || contracts.length === 0) {
          throw new Error('business not found or contracts unavailable');
        }

        return contracts;
      } catch (err) {
        throw new Error(`Error getting contracts by business: ${err.message}`);
      }
    },

    // read contracts by client
    getContractsByClient: async (_, { clientID }) => {
      try {
        const contracts = await Contract.find({ clientID });

        if (!contracts || contracts.length === 0) {
          throw new Error('client not found or contracts unavailable');
        }

        return contracts;
      } catch (err) {
        throw new Error(`Error getting contracts by client: ${err.message}`);
      }
    }
  },

  // mutations
  Mutation: {
    // create contract
    createContract: async (_, { ID, contractInput: { businessID, clientEmail, totalBalance, taxes, availableServices, allowPaymentPlan } }) => {
      try {
        const newContract = {
          businessID,
          clientEmail,
          clientID: "PENDING",
          paymentPlan: "PENDING",
          totalBalance,
          standingBalance: totalBalance,
          taxes,
          availableServices,
          services: [],
          status: "PENDING",
          allowPaymentPlan,
        }
        const contract = new Contract(newContract);
        return await contract.save();
      } catch (err) {
        throw new Error(`Error creating contract: ${err.message}`);
      }
    },

    // update contract
    updateContract: async (_, { ID, contractUpdate: { clientEmail, clientID, paymentPlan, totalBalance, standingBalance, taxes, availableServices, services, status } }) => {
      try {
        const updatedContract = await Contract.findByIdAndUpdate(
          new ObjectId(ID),
          {
            clientEmail,
            clientID,
            paymentPlan,
            totalBalance,
            standingBalance,
            taxes,
            availableServices,
            services,
            status,
          },
          { new: true }
        );

        if (!updatedContract) {
          throw new Error('Contract not found');
        }

        return updatedContract;
      } catch (err) {
        throw new Error(`Error updating contract: ${err.message}`);
      }
    },

    // delete contract
    deleteContract: async (_, { ID }) => {
      try {
        const deletedContract = await Contract.findByIdAndDelete(ID);
        if (!deletedContract) {
          throw new Error('Contract not found');
        }

        return deletedContract;
      } catch (err) {
        throw new Error(`Error deleting contract: ${err.message}`);
      }
    }
  }
}

// export contract resolver 
module.exports = contractResolver;