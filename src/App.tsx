import React, {useState} from 'react';
import ThemeProvider from "./theme/themeProvider";
import {Timer} from "./components/Timer";
import {darkTheme, lightTheme, THEME_MODE, THEME_STATE} from "./theme/themes";

function App() {
  const [step, setStep] = useState<number>(1);
  const [themeMode, setThemeMode] = useState<THEME_MODE>(THEME_MODE.LIGHT);
  const [themeState, setThemeState] = useState<THEME_STATE>(THEME_STATE.FOCUS);

  const changeTheme = () => {
    setThemeMode(themeMode === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK);
  };

  const setSteps = () => {
      const nextStep = step + 1;
      setStep(nextStep === 4 ? 0 : nextStep);
      changeColor(nextStep)
  }

  const changeColor = (nextStep: number) => {
    if(nextStep % 2 !== 0) setThemeState(THEME_STATE.FOCUS)
    if(nextStep === 2) setThemeState(THEME_STATE.SHORT_BREAK)
    if(nextStep === 4) setThemeState(THEME_STATE.LONG_BREAK)
  };

  return (
      <ThemeProvider theme={themeMode === THEME_MODE.LIGHT ? lightTheme : darkTheme}>
        <Timer setTheme={changeTheme} nextStep={setSteps} state={themeState} />
      </ThemeProvider>
  );
}

export default App;
