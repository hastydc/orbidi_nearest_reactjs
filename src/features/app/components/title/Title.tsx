import Style from './Title.module.scss';

/**
 * Title props
 */
type TitleProps = {
  title: string;
  subTitle: string;
};

/**
 * Title component
 * @param {TitleProps} props
 * @returns {Object} component
 */
const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <h4
          className={Style.subTitle}
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />
      </div>
    </>
  );
};

export default Title;
