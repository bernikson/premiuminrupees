import React, { useState, ChangeEvent, useEffect } from "react";
import styles from "./Billing.module.css";
import ArrowDown from "../../svgs/ArrowDown";
import Image from "next/image";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";

import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";

import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import axios from "axios";

//! TYPES
interface Form {
  firstName: string;
  lastName: string;
  address: string;
  addressTwo: string;
  city: string;
  zip: number | null | undefined;
  phone: string | undefined | null;
  information: string;
}

interface Country {
  name: string;
  alpha2Code: string;
  independent: false;
}

const Billing: React.FC = () => {
  //! useState
  const [formData, setFormData] = useState<Form>({
    firstName: "",
    lastName: "",
    address: "",
    addressTwo: "",
    city: "",
    zip: null,
    phone: "",
    information: "",
  });

  const [coupon, setCoupon] = useState<string>("");

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);

  //! useEffect

  const excludedCountries = [
    "XK",
    "SJ",
    "PM",
    "BL",
    "HM",
    "GF",
    "UM",
    "IO",
    "BQ",
    "",
  ];

  const fetchCountries = async () => {
    try {
      const { data } = await axios.get(
        "https://restcountries.com/v2/all?fields=name,alpha2Code"
      );
      const filteredData = data.filter(
        (country: Country) => !excludedCountries.includes(country.alpha2Code)
      );
      setCountries(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  //! Functions
  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const selectedCountryTemplate = (option: Country, props: any) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <Image
            alt={option.name}
            src={`https://flagsapi.com/${selectedCountry?.alpha2Code}/flat/64.png`}
            className={`mr-2 flag flag-${option.alpha2Code.toLowerCase()}`}
            width={18}
            height={18}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option: Country) => {
    return (
      <div className="flex align-items-center">
        <Image
          alt={option.name}
          src={`https://flagsapi.com/${option?.alpha2Code}/flat/64.png`}
          width={18}
          height={18}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <>
      <h2 className={styles["billing_header"]}>Billing Details</h2>
      <form autoComplete="off" className={styles["billing_form"]}>
        <section className={styles["billing_form_inputs_wrapper"]}>
          <InputText
            name="firstName"
            value={formData?.firstName}
            onChange={handleFormDataChange}
            placeholder="First name*"
          />
          <InputText
            name="lastName"
            value={formData?.lastName}
            onChange={handleFormDataChange}
            placeholder="Last name*"
          />
          <InputText
            name="address"
            value={formData?.address}
            onChange={handleFormDataChange}
            placeholder="Address*"
          />
          <InputText
            name="addressTwo"
            value={formData?.addressTwo}
            onChange={handleFormDataChange}
            placeholder="Address line 2"
          />
          {/* <div className={styles["billing_country_choose"]}>
            <div
              className={`${styles["billing_country_dropdown"]} ${
                countryDrop ? styles["billing_country_svg"] : ""
              }`}
              onClick={() => setCountryDrop(!countryDrop)}
            >
              <Image width={20} height={20} alt="GE" src="" />{" "}
              <span>Country</span> <ArrowDown />
            </div>
            <ul
              className={`${styles["billing_country_dropdown_list"]} ${
                countryDrop
                  ? styles["billing_country_dropdown_list_trigger"]
                  : undefined
              }`}
            >
              <li>
                <Image width={20} height={20} alt="GE" src="" />{" "}
                <span>Country</span>
              </li>
            </ul>
          </div> */}
          <Dropdown
            className={styles["billing_country"]}
            value={selectedCountry}
            onChange={(e: DropdownChangeEvent) => setSelectedCountry(e.value)}
            options={countries}
            optionLabel="name"
            placeholder="Country"
            filter
            valueTemplate={selectedCountryTemplate}
            itemTemplate={countryOptionTemplate}
          />
          <InputText
            name="city"
            value={formData?.city}
            onChange={handleFormDataChange}
            placeholder="City/Town*"
          />
          <InputNumber
            inputId="integeronly"
            placeholder="Postcode / ZIP*"
            value={formData?.zip}
            onValueChange={(e: InputNumberValueChangeEvent) =>
              setFormData({
                ...formData,
                zip: e.value,
              })
            }
          />

          <InputMask
            id="phone"
            mask="(999) 999-9999"
            placeholder="Phone*"
            autoClear={false}
            onChange={(e: InputMaskChangeEvent) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          ></InputMask>
          <InputTextarea
            className={styles["billing_textarea"]}
            placeholder="Additional information"
            autoResize
            value={formData?.information}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setFormData({ ...formData, information: e.target.value })
            }
            rows={5}
            cols={30}
          />
        </section>
      </form>
      <h4 className={styles["billing_coupon_text"]}>
        Apply Coupon to get discount!
      </h4>
      <div className={styles["billing_coupon"]}>
        <InputText
          name="city"
          value={coupon}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCoupon(e.target.value)
          }
          placeholder="Coupon code"
        />
        <Button>Apply Code</Button>
      </div>
    </>
  );
};
export default Billing;
