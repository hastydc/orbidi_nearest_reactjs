import Style from './App.module.scss';
import { useTranslation } from 'react-i18next';

/**
 * App component
 * @returns {Object} component
 */
const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={Style.body}>{t('hi')}</div>
    </>
  );
};

export default App;
