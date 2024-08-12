import React, { Fragment } from "react";

interface AddressTextProps {
  title: string;
  reStyle?: string;
}

const AddressText: React.FC<AddressTextProps> = ({ title, reStyle }) => {
  return (
    <Fragment>
      <h1
        className={`text-white font-extrabold font-openSans lg:text-4xl md:text-3xl text-2xl ${reStyle}`}
      >
        {title}
      </h1>
    </Fragment>
  );
};

export default AddressText;
