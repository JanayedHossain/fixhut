import { use } from "react";
import { Link } from "react-router";

import Empty from "../empty/Empty";

import { motion } from "framer-motion";

const BookedServices = ({ fetchPromiseData }) => {
  const bookedServices = use(fetchPromiseData);
  if (bookedServices.length === 0) {
    return (
      <Empty title="You haven't booked any services yet." services={true} />
    );
  }

  return (
    <div className="container mx-auto px-1 sm:px-4 pb-10">
      <h1 className="text-3xl font-bold text-center text-primary">
        Your Booked Services
      </h1>
      <p className="text-center mb-12 text-xs md:text-sm text-secondary pt-2">
        View and track the status of services you have booked.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookedServices.map((service) => (
          <motion.div
            key={service._id}
            className="card bg-base-100 shadow-xl p-4 border border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <figure>
              <img
                src={service.serviceImage}
                alt={service.serviceName}
                className="w-full h-52 object-cover rounded-xl"
              />
            </figure>
            <div className="mt-4">
              <Link
                to={`/services/${service?.serviceId}`}
                className="text-xl font-semibold mb-2 text-primary"
              >
                {service.serviceName}
              </Link>
              <p className="mb-1 mt-2">
                <span className="font-semibold">Provider:</span>{" "}
                {service.providerName}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Price:</span> ৳ {service.price}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Booking Date:</span>{" "}
                {service.serviceTakingDate}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Special Instruction:</span>{" "}
                {service.specialInstruction}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Status:</span>{" "}
                <span className="capitalize">{service.status}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookedServices;
