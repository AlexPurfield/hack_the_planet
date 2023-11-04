import "./BackgroundWrapper.css";

const BackgroundWrapper = (props) => {
  return (
    <div className="BgWrapper mb-5">
      <div className="WrapperContent">{props.children}</div>
    </div>
  );
};

export default BackgroundWrapper;
