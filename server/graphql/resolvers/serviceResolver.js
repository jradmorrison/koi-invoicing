const Service = require('../../../koi-invoicing/server/models/Service')
const Business = require('../../../koi-invoicing/server/models/Business');
const { Types: { ObjectId } } = require('mongoose');
const serviceResolver  = {
  Query: {
    getServiceByID: async (_, {ID}) => {
      try {
        const service = await Service.findById(new ObjectId(ID));
        
        if(!service) {
          throw new Error('Service not found');
        }
        
        return service;
      } catch(err) {
        throw new Error(`Error getting service: ${err.message}`);
      }
    },
    getServicesByBusiness: async (_, {businessID}) => {
      try {
        const services = await Service.find({businessID: new ObjectId(businessID)});
        
        if(!services || services.length === 0) {
          throw new Error('business not found or services unavailable');
        }
        
        return services;
      } catch (err) {
        throw new Error(`Error getting services by business: ${err.message}`);
      }
    }
  },
  Mutation: {
    createService: async (_, {ID, serviceInput: {businessID, cost, title, description}}) => {
      try {
        const newService = {
          businessID,
          cost,
          title,
          description
        }
        const service = new Service(newService);
        return await service.save();
      } catch (err) {
        throw new Error(`Error creating service: ${err.message}`);
      }
    },
    updateService: async (_, {ID, serviceUpdate: { cost, title, description } }) => {
      try {
        const updatedService = await Service.findByIdAndUpdate(
          ID,
          {
            cost,
            title,
            description
          },
          { new: true }
        );
        
        if (!updatedService) {
          throw new Error('Service not found');
        }
        
        return updatedService;
      } catch (err) {
        throw new Error(`Error updating service: ${err.message}`);
      }
    },
    deleteService: async (_, {ID}) => {
      try {
        const deletedService= await Service.findByIdAndDelete(ID);
        if(!deletedService){
          throw new Error('Service not found');
        }
        
        return deletedService;
      } catch (err) {
        throw new Error(`Error deleting service: ${err.message}`);
      }
    }
  }
}

module.exports = serviceResolver;