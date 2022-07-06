import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './Layout/layout'
import { Home } from './pages/Home/home'
import { Celsu } from './pages/CelsU/CelsU'
import { SignIn } from './pages/SignIn/SignIn'
import { SignUp } from './pages/SignIn/SignUp'
import { ThemeProvider } from 'styled-components'
import { DataContext } from './context/context'
import { useContext } from 'react'
import { SetTheme } from './Styles/themes'

function App() {
  const ctx = useContext(DataContext);
  const ruta = '/'

  return (
    <BrowserRouter>
      <ThemeProvider theme={SetTheme(ctx.Theme)}>
        <Layout>
          <Routes>
            <Route exact path={ruta} element={<Home />} />
            <Route exact path={ruta + 'celsu'} element={<Celsu />} />
            <Route exact path={ruta + 'signin'} element={<SignIn />} />
            <Route exact path={ruta + 'signup'} element={<SignUp />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
