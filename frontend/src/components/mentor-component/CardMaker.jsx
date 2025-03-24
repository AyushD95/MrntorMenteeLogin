import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter, faDog, faFish, faDragon, faSpider, faDove, faHippo } from "@fortawesome/free-solid-svg-icons";
import "./CardMaker.module.css";

export default function CardMaker() 
{
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
        experience: "",
        skills: "",
        technologies: "",
        industry: "",
        specify: "",
        mentorshipAreas: "",
        availability: "",
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

  

 




    return (
        <main className="col">
            <section className="form">
                <div className="col">
                    <label>First Name</label>
                    <input type="text" name="firstName"  placeholder="Enter your first name" value={userData.firstName} onChange={HandleChange} />
                </div>
                <div className="col">
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="Enter your last name" value={userData.lastName} onChange={HandleChange} />
                </div>
                <div className="col">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email in abc@xyz.com"value={userData.email} onChange={HandleChange} required />
                </div>
                <div className="col">
                    <label>Password</label> 
                    <input type="password" name="password" placeholder="Enter your password" value={userData.password} onChange={HandleChange} required />
                </div>
                <div className="col">
                    <label>Current Job</label>
                    <input type="text" name="role" placeholder="Engineer at abc company" value={userData.role} onChange={HandleChange} />
                </div>
                <div className="col">
                    <label>Years of Experience</label>
                    <input type="text" name="experience" placeholder="x years of experience" value={userData.experience} onChange={HandleChange} required/>
                </div>
                <div className="col">
                    <label>Skills</label>
                    <input type="text" name="skills"  placeholder="E.g., JavaScript, Python, Reac" value={userData.skills} onChange={HandleChange} required />
                </div>
                <div className="col">
                    <label>Technologies</label>
                    <input type="text" name="technologies" placeholder="E.g., AWS, Docker, Blockchain" value={userData.technologies} onChange={HandleChange} required />
                </div>
                <div className="col">
    <label htmlFor="industry">Industry Expertise In</label>
    <select
        id="industry"
        className="form__input"
        value={userData.industry}
        name="industry"
        onChange={HandleChange}
        required
    >
        <option value="">Select Industry</option>
        <option value="Software Development">Software Development</option>
        <option value="Cybersecurity">Cybersecurity</option>
        <option value="AI & Machine Learning">AI & Machine Learning</option>
        <option value="Blockchain">Blockchain</option>
        <option value="Cloud Computing">Cloud Computing</option>
        <option value="Data Science">Data Science</option>
        <option value="Embedded Systems">Embedded Systems</option>
        <option value="Other">Other</option>
    </select>
</div>

{userData.industry === "Other" && (
    <div className="col">
        <label htmlFor="otherIndustry">Specify Industry</label>
        <input
            id="otherIndustry"
            type="text"
            className="form__input"
            placeholder="Enter industry"
            value={userData.otherIndustry}
            name="otherIndustry"
            onChange={HandleChange}
            required
        />
    </div>
)}

<div className="col">
    <label htmlFor="preferredLanguages">Preferred Language(s)</label>
    <select
        id="preferredLanguages"
        className="form__input"
        value={userData.preferredLanguages}
        name="preferredLanguages"
        onChange={HandleChange}
        required
    >
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
                    <label>Mentorship Areas</label>
                    <input type="text" name="mentorshipAreas" placeholder="E.g., Career Growth, Technical Guidance, Soft Skills, etc." value={userData.mentorshipAreas} onChange={HandleChange} />
                </div>
                <div className="col">
                    <label>Availability (Days & Time Slots)</label>
                    <input type="text" name="availability" placeholder="E.g., Mon-Fri: 6 PM - 9 PM IST" value={userData.availability} onChange={HandleChange} />
                </div>
                <div className="col">
                    <label>Social Media/Portfolio Links</label>
                    <input type="text" name="socialLinks" placeholder="E.g., LinkedIn, GitHub, Personal Website" value={userData.socialLinks} onChange={HandleChange} />
                </div>
         
             
            </section>

            <section className="col">
                <h2>Profile Card Output</h2>
                <div id="business__card">
                    <div id="business__card-header">
                        {userData.image && <img src={userData.image} alt="User Profile" />}
                    </div>
                    <div id="business__card-body">
                        <h2>{userData.firstName} {userData.lastName}</h2>
                        <h3>{userData.role}</h3>
                        <p>Email: {userData.email}</p>
                        <p>Experience: {userData.experience} years</p>
                        <p>Skills: {userData.skills}</p>
                        <p>Technologies: {userData.technologies}</p>
                        <p>Industry: {userData.industry} ({userData.specify})</p>
                        <p>Preferred Languages: {userData.preferredLanguages}</p>
                        <p>Mentorship Areas: {userData.mentorshipAreas}</p>
                        <p>Availability: {userData.availability}</p>
                    
                        <p>Social Links: {userData.socialLinks}</p>
                        {userData.icon && <FontAwesomeIcon icon={displayIcon()} size="2x" />}
                    </div>
                </div>
            </section>
        </main>
    );



    
}
