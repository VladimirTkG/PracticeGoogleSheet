import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
//import Footer from "./Footer";

import { IntlProvider } from "react-intl";
import { LOCALES } from "../i18n/locales";
import { messages } from "../i18n/messages";

const App = () => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  const handleChange = (e) => {
    setCurrentLocale(e.target.value);
    // storing locale in the localstorage
    localStorage.setItem("locale", e.target.value);
  };

  //localstorage
  function getInitialLocal() {
    // getting stored items
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className="mainDiv">
        <Header currentLocale={currentLocale} handleChange={handleChange} />
        <Content />
      </div>
    </IntlProvider>
  );
};

export default App;
