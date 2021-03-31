import React from 'react';
import Fade from 'react-reveal/Fade';
import { countryCodeEmoji } from 'country-code-emoji';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UserComponent(props) {
  const { userData } = props;

  const showInfo = (userData) => {
    const country = userData.country;
    const countryEmoji = countryCodeEmoji(country.code);
    const toastMessage =
      `${userData.fullName} comes from ${country.name} ${countryEmoji}`;
    toast.info(toastMessage);
  };

  return (
    <li>
      <Fade up>
        <article className="user" onClick={() => showInfo(userData)}>
          <button className="user__trigger">
            <div>
              <img className="user__image" src={userData.img} />
            </div>
            <div className="user__info">
              <h2>
                {userData.firstname} {userData.lastname}
              </h2>
              <p className="user__age">{userData.age}</p>
            </div>
          </button>
          <div className="user__extra-info"></div>
          <ToastContainer />
        </article>
      </Fade>
    </li>
  );
}
