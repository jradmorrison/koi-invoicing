const Business = require('../../models/Business');
const { Types: { ObjectId } } = require('mongoose');
const {signToken} = require('../../utils/auth');
const businessResolver  = {
  Query: {
    getBusinessByID: async (_, {ID}) => {
      try {
        const business = await Business.findById(new ObjectId(ID));
        
        if(!business) {
          throw new Error('Business not found');
        }
        
        return business;
      } catch(err) {
        throw new Error(`Error getting business: ${err.message}`);
      }
    },
    
  },
  Mutation: {
    createBusiness: async (_, {businessInput: {name, email, password, companyLogo}}) => {
      try {
        const newBusiness = {
          name,
          email,
          password,
          companyLogo,
          services: [],
          contracts: [],
          clients: [],
          createdAt: new Date().toISOString(),
        }
        const business = await Business.create(newBusiness);
        const token = signToken(business);
        return {token, business};
      } catch (err) {
        throw new Error(`Error creating business: ${err.message}`);
      }
    },
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
    deleteBusiness: async (_, {ID}) => {
      try {
        const deletedBusiness = await Business.findByIdAndDelete(new ObjectId(ID));
        if(!deletedBusiness){
          throw new Error('Business not found');
        }
        
        return deletedBusiness;
      } catch (err) {
        throw new Error(`Error deleting business: ${err.message}`);
      }
    }
  }
}

module.exports = businessResolver;