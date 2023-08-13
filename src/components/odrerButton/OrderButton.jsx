const OrderButton = ({ btnTxt, ...rest }) => {
  return (
    <button
      className="cursor-pointer text-center px-2  uppercase pb-2 border-b-2 text-sm md:text-base rounded border-black"
      {...rest}
    >
      {btnTxt}
    </button>
  );
};

export default OrderButton;
