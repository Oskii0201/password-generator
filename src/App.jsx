import {Container} from "./components/Container/Container.jsx";
import {Header} from "./components/Header/Header.jsx";
import {Form} from "./components/Form/Form.jsx";
import {useState} from "react";
import {Footer} from "./components/Footer/Footer.jsx";

export function App() {
    const [isError, setIsError] = useState(false);
    const [settings, setSettings] = useState({
        passwordLength: 10,
        includeLetters: true,
        includeCapitalLetters: false,
        includeNumbers: false,
        includeSpecialChars: false,
    });

  return (
      <Container>
          <Header/>
          <Form settings={settings} setSettings={setSettings} setIsError={setIsError}/>
          <Footer settings={settings} isError={isError}/>
      </Container>
  )
}
