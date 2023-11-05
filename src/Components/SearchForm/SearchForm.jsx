import { useState } from "react";
import Select from "react-select";

import carNames from "services/makes.json";
import pricePerHourOptions from "services/pricePerHourOptions";
import {
  handleMaxMileageChange,
  handleMinMileageChange,
} from "Utils/minMaxMileage";

import {
  CarMilageWrapper,
  InputMilageFromStyled,
  InputMilageToStyled,
  InputWrapper,
  StyledForm,
  StyledLabel,
  StyledSearchBtn,
  selectCarStyles,
  selectMonthlyPriceStyles,
} from "Components/SearchForm/SearchForm.styled";

const SearchForm = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedPricePerHour, setselectedPricePerHour] = useState(null);
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const carOptions = carNames.map((make) => ({
    value: make,
    label: make,
  }));

  const handleCarChange = (selectedOption) => {
    setSelectedCar(selectedOption);
  };
  const handleMonthlyPriceChange = (selectedOption) => {
    setselectedPricePerHour(selectedOption);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = {
      selectedCar,
      selectedPricePerHour,
      minMileage,
      maxMileage,
    };

    console.log(formData);
  };

  return (
    <StyledForm onSubmit={handleSearch}>
      <InputWrapper>
        <StyledLabel htmlFor="car-select">Car brand</StyledLabel>
        <Select
          styles={selectCarStyles}
          id="car-select"
          options={carOptions}
          value={selectedCar}
          onChange={handleCarChange}
          isSearchable={true}
          placeholder="Enter the text"
          noOptionsMessage={() => "Car brand not found"}
        />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="price-monthly">Price/ 1 hour</StyledLabel>
        <Select
          styles={selectMonthlyPriceStyles}
          id="price-monthly"
          options={pricePerHourOptions}
          value={selectedPricePerHour}
          onChange={handleMonthlyPriceChange}
          isSearchable={false}
          placeholder="To $"
        />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="min-price">Car Mileage / km:</StyledLabel>
        <CarMilageWrapper>
          <InputMilageFromStyled
            type="text"
            id="min-price"
            placeholder="From"
            value={minMileage}
            onChange={(e) => handleMinMileageChange(e, setMinMileage)}
          />
          <InputMilageToStyled
            type="text"
            id="max-price"
            placeholder="To"
            value={maxMileage}
            onChange={(e) => handleMaxMileageChange(e, setMaxMileage)}
          />
        </CarMilageWrapper>
      </InputWrapper>
      <StyledSearchBtn>Search</StyledSearchBtn>
    </StyledForm>
  );
};

export default SearchForm;