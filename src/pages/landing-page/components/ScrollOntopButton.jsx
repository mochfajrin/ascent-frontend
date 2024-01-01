/* eslint-disable react/prop-types */
const ScrollOnTopButton = ({ ScrollToTop }) => {
  return (
    <>
      <ScrollToTop
        smooth
        top={20}
        height="20"
        className="pl-1.5 rounded-full shadow-2xl"
      />
    </>
  );
};

export default ScrollOnTopButton;
