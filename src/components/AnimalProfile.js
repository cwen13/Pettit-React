import React from "react";
import { useLocation } from "react-router-dom";

let AnimalProfile = () => {
  let location = useLocation();
  console.log(location);
  return (
    <>
      <p>here is an animal profile</p>
    </>
  );
};

//class AnimalProfile extends React.Component {
//  render() {
//    return (
//      <>
//	<p>here is an animal profile</p>
//	<button onClick={getState}>Click me dude</button>
//      </>
//    );
//  };
//};
//
export default AnimalProfile;
