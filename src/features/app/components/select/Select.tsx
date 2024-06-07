import { useTranslation } from 'react-i18next';
import Title from '../title/Title';
import Style from './Select.module.scss';
import { FaTreeCity } from 'react-icons/fa6';
import useSelect from './hooks/useSelect';

/**
 * Select component
 * @returns {Object} component
 */
const Select = () => {
  const { t } = useTranslation();
  const { inputRef, cityList, city, dropdown, search, setCity, setDropdown } =
    useSelect();

  return (
    <>
      <div className={Style.content}>
        <div>
          <Title title={t('select')} subTitle={t('pleaseChooseCity')} />
        </div>

        <div className={Style.select}>
          <div className={Style.fieldset}>
            <input
              type="text"
              placeholder={t('choose')}
              className={Style.input}
              onKeyUp={() => search()}
              ref={inputRef}
              onFocus={() => setDropdown(true)}
              autoFocus={true}
            />
          </div>

          <div className={`${Style.dropdown} ${dropdown ? Style.active : ''}`}>
            {cityList.map((localCity, index) => (
              <button
                className={`${Style.item} ${
                  city.name === localCity.name ? Style.itemActive : ''
                }`}
                key={`cc-${index}`}
                onClick={() => {
                  setCity(localCity);
                  setDropdown(false);
                }}
              >
                <FaTreeCity />

                <span>
                  {localCity.name}, {localCity.country}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;
