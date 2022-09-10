import './Card.css';
/**
 * 카드 컴포넌트
 * @param {*} props
 * @returns 카드 형식의 css를 Wrapper로 사용함
 */
const Card = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
