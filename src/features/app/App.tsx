import AppContextProvider from './App.context';
import Style from './App.module.scss';
import Sidebar from './components/sidebar/Sidebar';
import Select from './components/select/Select';
import Nearest from './components/nearest/Nearest';

/**
 * App component
 * @returns {Object} component
 */
const App = () => {
  return (
    <>
      <AppContextProvider>
        <main className={`${Style.main}`}>
          <div className={`${Style.sidebar}`}>
            <Sidebar />
          </div>

          <div className={`${Style.mainContent}`}>
            <div className={Style.card}>
              <Select />
            </div>

            <div className={Style.card}>
              <Nearest />
            </div>
          </div>
        </main>
      </AppContextProvider>
    </>
  );
};

export default App;
