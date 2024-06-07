import Style from './Title.module.scss';

type TitleProps = {
  title: string;
  subTitle: string;
};

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
