import Navbar from "../Components/navbar/Navbar";
import Faq from "./Faq/Faq";
import Main from "./Main/Main";
import Uslugy from "./Uslugy/Uslugy";
import Price from "./Price/Price";
import Contacts from "./Contacts/Contacts";

const Pages = () => {

  return (
    <div>

      <Navbar />

      {/* main */}
        <Main />

      {/* uslugy */}
        <Uslugy />

      {/* price */}
      <Price />

      {/* Faq */}
        <Faq />

      {/* contacts */}
      <Contacts />

    </div>
  )
}

export default Pages;