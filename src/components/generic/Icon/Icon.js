/* eslint-disable react/prop-types */
const Icon = ({ name, className, width, height, onClick, title, style }) => {
  const classNames = className ? `icon ${className}` : 'icon';

  return (
    <svg
      className={classNames}
      title={title}
      width={width}
      height={height}
      onClick={onClick}
      style={style}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
