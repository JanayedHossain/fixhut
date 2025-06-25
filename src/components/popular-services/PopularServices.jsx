import { Link } from "react-router";
import { TbCurrencyTaka } from "react-icons/tb";
import { motion } from "framer-motion";

const PopularServices = ({ services }) => {
  const allServicesData = services;
  const popularServices = allServicesData.slice(0, 6);

  return (
    <div className="mb-16 mt-16 sm:mt-10">
      <h2 className="text-3xl font-bold text-center  text-primary">
        Popular Services
      </h2>
      <p className="text-center mb-12 text-xs md:text-sm text-secondary pt-2">
        Showcases top services with images, brief details, provider info, and
        price.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">
        {popularServices.map((service, index) => (
          <motion.div
            key={service._id}
            className="p-6 border border-gray-200 rounded-3xl flex flex-col md:flex-row items-start gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-48 h-48 object-cover rounded-xl"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {service.providerImage ? (
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={service.providerImage} />
                    </div>
                  </div>
                ) : (
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                      <span className="capitalize font-semibold">
                        {service.providerName ? service.providerName[0] : "?"}
                      </span>
                    </div>
                  </div>
                )}
                <h1 className="font-medium">{service.providerName}</h1>
              </div>

              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>

              <p className="text-secondary text-sm mb-3">
                {service.description.length > 100
                  ? service.description.slice(0, 100) + "..."
                  : service.description}
              </p>

              <p className="flex items-center gap-1 text-secondary mb-4">
                <TbCurrencyTaka size={20} />
                <span>{service.price}</span>
              </p>

              <Link to={`/services/${service._id}`}>
                <button className="btn btn-primary btn-sm text-white hover:bg-transparent hover:text-primary duration-200 transition">
                  View Details
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/services">
          <button className="btn btn-outline btn-primary">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
