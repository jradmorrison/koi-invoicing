// import models
const Client = require('../../models/Client')
const Business = require('../../models/Business');

// import mongoose
const { Types: { ObjectId } } = require('mongoose');

// client resolver
const clientResolver = {
  // queries
  Query: {
    // read client by ID
    getClientByID: async (_, { ID }) => {
      try {
        const client = await Client.findById(new ObjectId(ID));

        if (!client) {
          throw new Error('client not found');
        }

        return client;
      } catch (err) {
        throw new Error(`Error getting client: ${err.message}`);
      }
    },

    // read clients by business
    getClientsByBusiness: async (_, { businessID }) => {
      try {
        const business = await Business.findById(new ObjectId(businessID));

        if (!business) {
          throw new Error('business not found');
        }

        return business.clients;
      } catch (err) {
        throw new Error(`Error getting clients by business: ${error.message}`);
      }
    }
  },

  // mutations 
  Mutation: {
    // create client
    createClient: async (_, { ID, clientInput: { businessID, name, phone, email, password } }) => {
      try {
        const newClient = {
          businessID,
          name,
          phone,
          email,
          password,
          contracts: [new ObjectId(ID)],
        }
        const client = new Client(newClient);
        return await client.save();
      } catch (err) {
        throw new Error(`Error creating client: ${err.message}`);
      }
    },

    // update client
    updateClient: async (_, { ID, clientUpdate: { name, phone, email, password } }) => {
      try {
        const updatedClient = await Client.findByIdAndUpdate(
          new ObjectId(ID),
          {
            name,
            phone,
            email,
            password,
          },
          { new: true }
        );

        if (!updatedClient) {
          throw new Error('Client not found');
        }

        return updatedClient;
      } catch (err) {
        throw new Error(`Error updating client: ${err.message}`);
      }
    },

    // delete client
    deleteClient: async (_, { ID }) => {
      try {
        const deletedClient = await Client.findByIdAndDelete(new ObjectId(ID));
        if (!deletedClient) {
          throw new Error('Client not found');
        }

        return deletedClient;
      } catch (err) {
        throw new Error(`Error deleting client: ${err.message}`);
      }
    }
  }
}

// export client resolver
module.exports = clientResolver;