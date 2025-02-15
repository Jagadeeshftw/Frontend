import React from 'react';
import CountrySelect from '@/components/profile/CountrySelect';
import { useTranslation } from 'react-i18next';

const ProfileForm: React.FC = () => {
  const inputClasses =
    'border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-dark-primary bg-white dark:bg-dark-surface focus:outline-none focus:ring-2 focus:ring-default-color dark:focus:ring-default-color transition-colors';
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-light-primary dark:text-dark-primary">
      <input
        type="text"
        placeholder={t('profile.nameHolder')}
        defaultValue="Randall"
        className={inputClasses}
      />
      <input
        type="text"
        placeholder={t('profile.SurnameHolder')}
        defaultValue="Valenciano"
        className={inputClasses}
      />
      <div className="flex">
        <CountrySelect />
        <input
          type="text"
          placeholder={t('profile.phoneHolder')}
          defaultValue="6498 6325"
          className={inputClasses}
        />
      </div>
      <input
        type="text"
        placeholder={t('profile.LocationHolder')}
        defaultValue="Costa Rica, San José"
        className={inputClasses}
      />
    </div>
  );
};

export default ProfileForm;
