import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function CardMaker() {
  const location = useLocation();
  const {name, email, password } = location.state || {};

  const [userData, setUserData] = useState({

    currentRole: "",
    specify: "",
    preferredLanguages: "",
    socialLinks: "",
  });

  function HandleChange(event) {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function HandleSubmit(event) {
    event.preventDefault();

    const postData = {
      name,
      email,
      password,
      role: userData.currentRole === "Other" ? userData.specify : userData.currentRole, // Handle "Other"
      preferredLanguages: userData.preferredLanguages,
      socialLinks: userData.socialLinks,
    };

    try {
      const response = await axios.post("http://localhost:1201/api/mentee/signup", postData);
      console.log("Form submitted successfully:", response.data);
      
      navigate("/mentee-home");

    } catch (error) {
        toast.error(error);

      console.error("Error submitting form:", error.response?.data || error.message);
    }
  }

  return (
    <main className="col">
      <form className="form" onSubmit={HandleSubmit}>
 

        <div className="col">
          <label>Current Role</label>
          <select name="currentRole" value={userData.currentRole} onChange={HandleChange} required>
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Working">Working</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {userData.currentRole === "Other" && (
          <div className="col">
            <label>Specify Role</label>
            <input type="text" name="specify" placeholder="Enter role" value={userData.specify} onChange={HandleChange} required />
          </div>
        )}

        <div className="col">
          <label>Preferred Language(s)</label>
          <select name="preferredLanguages" value={userData.preferredLanguages} onChange={HandleChange} required>
            <option value="">Select a language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
            <option value="Russian">Russian</option>
          </select>
        </div>

        <div className="col">
          <label>Social Media/Portfolio Links</label>
          <input type="text" name="socialLinks" placeholder="E.g., LinkedIn, GitHub" value={userData.socialLinks} onChange={HandleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>

      <section className="col">
        <h2>Profile Card Output</h2>
        <div id="business__card">
          <div id="business__card-body">
            <h2>{name}</h2>
            <h3>{userData.currentRole === "Other" ? userData.specify : userData.currentRole}</h3>
            <p>Email: {email}</p>
            <p>Preferred Languages: {userData.preferredLanguages}</p>
            <p>Social Links: {userData.socialLinks}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
