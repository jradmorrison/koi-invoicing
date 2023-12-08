// import model
const Business = require('../../models/Business');

// import mongoose
const { Types: { ObjectId } } = require('mongoose');

// import authentication
const { signToken, AuthenticationError } = require('../../utils/auth');

// business resolver
const businessResolver = {
  // queries
  Query: {
    // read business by ID
    getBusinessByID: async (_, { ID }) => {
      try {
        const business = await Business.findById(new ObjectId(ID)).populate('invoices');

        if (!business) {
          throw new Error('Business not found');
        }

        return business;
      } catch (err) {
        throw new Error(`Error getting business: ${err.message}`);
      }
    },
  },

  // mutations
  Mutation: {
    // create business
    createBusiness: async (_, { businessInput: { name, email, password, companyLogo } }) => {
      try {
        const newBusiness = {
          name,
          email,
          password,
          companyLogo,
          userSince: new Date().toISOString(),
        }
        const business = await Business.create(newBusiness);
        const token = signToken(business);
        return { token, business };
      } catch (err) {
        throw new Error(`Error creating business: ${err.message}`);
      }
    },

    // update business
    updateBusiness: async (_, { ID, businessUpdate: { name, email, password, companyLogo } }) => {
      try {
        const updatedBusiness = await Business.findByIdAndUpdate(
          new ObjectId(ID),
          {
            name,
            email,
            password,
            companyLogo,
          },
          { new: true }
        );

        if (!updatedBusiness) {
          throw new Error('Business not found');
        }

        return updatedBusiness;
      } catch (err) {
        throw new Error(`Error updating business: ${err.message}`);
      }
    },

    // delete business
    deleteBusiness: async (_, { ID }) => {
      try {
        const deletedBusiness = await Business.findByIdAndDelete(new ObjectId(ID));
        if (!deletedBusiness) {
          throw new Error('Business not found');
        }

        return deletedBusiness;
      } catch (err) {
        throw new Error(`Error deleting business: ${err.message}`);
      }
    },

    // login business
    loginBusiness: async (_, { email, password }) => {
      try {
        const business = await Business.findOne({ email });
        if (!business) {
          throw AuthenticationError;
        }

        const valid = business.password = password; //Todo : Add BCrypt

        if (!valid) {
          throw AuthenticationError;
        }

        const token = signToken(business);
        return { token, business };
      } catch (err) {
        throw new Error(`${err.message}`);
      }
    }
  }
}

// export business resolver 
module.exports = businessResolver;