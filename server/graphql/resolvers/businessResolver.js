// import model
const Business = require('../../models/Business');
// import mongoose
const {
  Types: { ObjectId },
} = require('mongoose');

// import authentication
const { signToken, AuthenticationError } = require('../../utils/auth');

const bcrypt = require('bcrypt');
const { genSalt } = require('bcrypt');

// business resolver
const businessResolver = {
  // queries
  Query: {
    currentBusiness: async (_, _args, { user }) => {
      try {
        if (user) {
          return await Business.findOne({ _id: user._id }).select(
            '-__v -password'
          );
        }
      } catch (err) {
        throw new Error(err);
      }
    },

    // read business by ID
    getBusinessByID: async (_, { ID }) => {
      try {
        const business = await Business.findById(new ObjectId(ID)).populate(
          'invoices'
        );

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
    createBusiness: async (
      _,
      { businessInput: { name, email, password, companyLogo } }
    ) => {
      try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newBusiness = {
          name,
          email,
          password: hashedPassword,
          companyLogo,
          userSince: new Date().toISOString(),
        };
        const business = await Business.create(newBusiness);
        const token = signToken(business);

        return { token, business };
      } catch (err) {
        throw new Error(`Error creating business: ${err.message}`);
      }
    },

    // update business
    updateBusiness: async (
      _,
      { ID, businessUpdate: { name, email, password, companyLogo } }
    ) => {
      try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const updatedBusiness = await Business.findByIdAndUpdate(
          new ObjectId(ID),
          {
            name,
            email,
            password: hashedPassword,
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
        const deletedBusiness = await Business.findByIdAndDelete(
          new ObjectId(ID)
        );
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

        const valid = await bcrypt.compare(password, business.password);

        if (!valid) {
          throw AuthenticationError;
        }

        const token = signToken(business);
        return { token, business };
      } catch (err) {
        throw new Error(`${err.message}`);
      }
    },
  },
};

// export business resolver
module.exports = businessResolver;
