import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EnquiryForm.css";

function App() {
  const [result, setResult] = React.useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("select");
  const [selectedState, setSelectedState] = useState("select");
  const [selectedCity, setSelectedCity] = useState("select");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://api.countrystatecity.in/v1/countries',
      headers: {
        'X-CSCAPI-KEY': 'M0RvTllHY0l0ZlU3Q2NjdllZT0JaOURFRkRWaDVNSGlmUGpyZUdYUA==' // Replace with your actual API key
      }
    };

    axios(config)
      .then(function (response) {
        setCountries(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleCountryChange = async (event) => {
    const countryCode = event.target.value;
    if (countryCode === "select") {
      setStates([]);
      setSelectedState("select");
      setCities([]);
      setSelectedCity("select");
      return;
    }

    setSelectedCountry(countryCode);

    try {
      const statesResponse = await axios.get(
        `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
        {
          headers: {
            'X-CSCAPI-KEY': 'M0RvTllHY0l0ZlU3Q2NjdllZT0JaOURFRkRWaDVNSGlmUGpyZUdYUA=='
          }
        }
      );
      const statesForCountry = statesResponse.data.map((state) => ({
        iso2: state.iso2,
        name: state.name || "N/A",
      }));
      setStates(statesForCountry);
      setSelectedState(statesForCountry[0]?.iso2 || "select");

      // Fetch cities for the default state
      if (statesForCountry.length > 0) {
        await handleStateChange({ target: { value: statesForCountry[0]?.iso2 } });
      }
    } catch (error) {
      console.error("Error fetching states:", error);
      setStates([]);
      setSelectedState("select");
      setCities([]);
      setSelectedCity("select");
    }
  };

  const handleStateChange = async (event) => {
    const stateName = event.target.value;
    if (stateName === "select") {
      setCities([]);
      setSelectedCity("select");
      return;
    }

    setSelectedState(stateName);

    try {
      // Use Axios to fetch cities
      const citiesResponse = await axios.get(
        `https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${encodeURIComponent(stateName)}/cities`,
        {
          headers: {
            'X-CSCAPI-KEY': 'M0RvTllHY0l0ZlU3Q2NjdllZT0JaOURFRkRWaDVNSGlmUGpyZUdYUA=='
          }
        }
      );

      const citiesForState = citiesResponse.data.map((city) => ({
        iso2: city.iso2,
        name: city.name || "N/A",
      }));
      setCities(citiesForState);
      setSelectedCity(citiesForState[0]?.iso2 || "select");
    } catch (error) {
      console.error("Error fetching cities:", error);
      setCities([]);
      setSelectedCity("select");
    }
  };

 const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };



   const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3ca5274f-64a0-448d-bcb7-ad335acf5e2a");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setResult(res.message);

        openModal();

        event.target.reset();
        setStates([]);
        setCities([]);
        setSelectedCountry("select");
        setSelectedState("select");
        setSelectedCity("select");
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred while submitting the form.");
    }
  };


  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <input
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          style={{ marginBottom: "16px" }}
        />

        <input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          style={{ marginBottom: "16px" }}
        />

        <input
          placeholder="Phone no."
          type="tel"
          id="phone"
          name="phone"
          style={{ marginBottom: "16px" }}
        />

        <select
          id="country"
          name="country"
          className="custom-select"
          style={{ marginBottom: "16px" }}
          onChange={handleCountryChange}
        >
          <option value="select">Select Country</option>
          {countries.map((country) => (
            <option key={country.iso2} value={country.iso2}>
              {country.name}
            </option>
          ))}
        </select>

        <select
          id="state"
          name="state"
          className="custom-select"
          style={{ marginBottom: "16px" }}
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="select">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state.iso2}>
              {state.name}
            </option>
          ))}
        </select>

        <select
          id="city"
          name="city"
          className="custom-select"
          style={{ marginBottom: "16px" }}
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="select">Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city.iso2}>
              {city.name}
            </option>
          ))}
        </select>

        <select
          id="enquiryType"
          name="enquiryType"
          className="custom-select"
          style={{ marginBottom: "16px" }}
        >
          <option value="select">Select enquiry type</option>
          <option value="new-listing">New Listing and Pricing</option>
          <option value="sales-boost">A++ Listing and Brand Store</option>
          <option value="sales-boost">Sales Boost</option>
          <option value="sales-boost">Account Management</option>
          <option value="sales-boost">Reactive suspended account</option>
          <option value="sales-boost">Complete account management</option>
          <option value="sales-boost">Others</option>
        </select>

        <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
          Send
        </button>

{modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
              <p>Email sent successfully!</p>
              <p>Thanks!!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    

      </form>
      <span style={{ marginTop: "16px" }}>{result}</span>
    </div>
  );
}

export default App;
