import { useState } from "react";

import CarModal from "Components/CarModal/CarModal";
import {
  CarHead,
  CarHeadAdditional,
  CarImage,
  CarItemWrapper,
  LearnMoreBtn,
} from "./CarItem.styled";

import NoImage from "images/no-image.jpeg";

const CarItem = ({ car }) => {
  const {
    make,
    model,
    address,
    year,
    rentalPrice,
    rentalCompany,
    type,
    mileage,
  } = car;

  const addressParts = address.split(", ");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <CarItemWrapper>
      {/* <CarImage src={car.img || "/no-image.jpeg"} /> */}
      <CarImage src={NoImage} />

      <CarHead>
        <h2>
          {make} <span>{model}</span>, {year}
        </h2>
        <p>{rentalPrice}</p>
      </CarHead>
      <>
        <CarHeadAdditional>
          <li>
            <p>{addressParts[1]}</p>
          </li>
          <li>
            <p>{addressParts[2]}</p>
          </li>
          <li>
            <p>{rentalCompany}</p>
          </li>
        </CarHeadAdditional>
        <CarHeadAdditional>
          <li>
            <p>{type}</p>
          </li>
          <li>
            <p>{model}</p>
          </li>
          <li>
            <p>{mileage}</p>
          </li>
        </CarHeadAdditional>
      </>
      <LearnMoreBtn onClick={toggleModal}>Learn more</LearnMoreBtn>
      {isModalOpen && <CarModal toggleModal={toggleModal} car={car} />}
    </CarItemWrapper>
  );
};

export default CarItem;