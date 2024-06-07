import { useTranslation } from 'react-i18next';
import Title from '../title/Title';
import Style from './Nearest.module.scss';
import { FaLocationDot } from 'react-icons/fa6';
import { useContext } from 'react';
import { AppContext } from '../../App.context';

const Nearest = () => {
  const { t } = useTranslation();
  const { city, nearest } = useContext(AppContext);

  const subTitle = city.name
    ? t('theseAreTheThreeMoreNearestCities', {
        city: city.name,
      })
    : t('waitingForCity');

  return (
    <>
      <div className={Style.content}>
        <div>
          <Title title={t('Response')} subTitle={subTitle} />
        </div>

        <div className={Style.list}>
          {nearest.map(({ name, country }, index) => (
            <div className={Style.item} key={`ccu-${index}`}>
              <FaLocationDot />
              <span>
                {name}, {country}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nearest;
