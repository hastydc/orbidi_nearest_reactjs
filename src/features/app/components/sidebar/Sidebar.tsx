import { FaReact } from 'react-icons/fa';
import Style from './Sidebar.module.scss';

/**
 * Sidebar component
 * @returns {Object} component
 */
const Sidebar = () => {
  return (
    <>
      <FaReact className={Style.icon} />
    </>
  );
};

export default Sidebar;
