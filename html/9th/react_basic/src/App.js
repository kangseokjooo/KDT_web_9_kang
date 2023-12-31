import  { LanguageProvider } from "./14Context/store/lang-context";
import LanguageSelector from "./14Context/LangSelector";

function App() {
  // const [language, setLanguage] = useState("jp");
  return (
    <>
      
        {/* <MyContext.Consumer>
          {(value) => {
            return (
              <div>
                <h2>현재 선택된 언어:{value.language}</h2>
                <select value={value.language} onChange={e=>value.setLanguage(e.target.value)}>
                  <option value="ko">한국어</option>
                  <option value="en">영어</option>
                  <option value="jp">일본어</option>
                </select>
              </div>
            );
          }}
        </MyContext.Consumer> */}
        <LanguageProvider>
        <LanguageSelector/>
        </LanguageProvider>
    </>
  );
}

export default App;
