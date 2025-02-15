'use client';

import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FaBed, FaPaw, FaBath } from 'react-icons/fa';
import Loader from '@/layouts/Loader';
import 'react-toastify/dist/ReactToastify.css';
import usePropertyDetails from '@/hooks/house/usePropertyDetails';
import { useTranslation } from 'react-i18next';

const PropertyDetails: React.FC = () => {
  const { t } = useTranslation();
  const { bookReservation, loadingBook, isBooked } = usePropertyDetails();

  const handleBook = async () => {
    try {
      await bookReservation();
    } catch (error) {
      console.error('Error during booking:', error);
    }
  };

  return (
    <div className="w-full bg-gray-50 px-5 py-2 dark:bg-dark-background">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 bg-white rounded-lg shadow-lg p-6 w-[73rem] dark:bg-dark-surface">
          <div className="flex gap-6">
            <div className="flex-grow relative">
              <img
                src="/img/house1.jpg"
                alt="Main Property"
                className="w-full h-[465px] object-cover rounded-lg border"
              />
              <span className="absolute top-4 left-4 bg-default-color text-white text-sm font-semibold px-4 py-2 rounded-full">
                {t('propertyDetails.promo')}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="/img/house1.jpg"
                alt="House"
                className="w-36 h-36 object-cover rounded-lg"
              />
              <img
                src="/img/house1.jpg"
                alt="House"
                className="w-36 h-36 object-cover rounded-lg"
              />
              <img
                src="/img/house1.jpg"
                alt="House"
                className="w-36 h-36 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-black dark:text-gray-200">
                {t('propertyDetails.propertyTitle')}
              </h1>
              <button
                onClick={handleBook}
                className={`bg-default-color text-white px-12 py-2 rounded-lg text-sm font-semibold hover:bg-default-color${
                  isBooked || loadingBook ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isBooked || loadingBook}
              >
                {loadingBook ? (
                  <Loader />
                ) : isBooked ? (
                  'BOOKED'
                ) : (
                  t('propertyDetails.bookButton')
                )}
              </button>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-gray-700 text-sm">
                <MdLocationOn className="text-default-color w-5 h-5 mr-2"/>
                {t('propertyDetails.address')}
              </div>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="flex justify-between items-center">
              <div className="flex gap-4 text-default-color">
                <div className="flex items-center">
                  <FaBed className="w-5 h-5 mr-2" />
                  <span className="text-gray-700 text-sm">
                    2 {t('common.bed')}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaPaw className="w-5 h-5 mr-2" />
                  <span className="text-gray-700 text-sm">
                    {t('common.pet')}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaBath className="w-5 h-5 mr-2" />
                  <span className="text-gray-700 text-sm">
                    1 {t('common.bathroom')}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <img src="/img/person.png" className="w-10 h-10 rounded-full" />
                <p className="text-black font-semibold ml-2 text-sm dark:text-gray-200">
                  Alberto Casas
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold text-black dark:text-gray-200">
                {t('propertyDetails.detailsTitle')}
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                {t('propertyDetails.detailsText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
