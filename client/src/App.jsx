import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { TerminalContextProvider } from 'react-terminal'
import ErrorPage from './pages/ErrorPage'
import Welcome from './pages/welcome/Welcome'
import LoginPage from './pages/login/LoginPage'
import Prelevel1 from './pages/prelevels/Prelevel1'
import Prelevel2 from './pages/prelevels/Prelevel2'
import Prelevel3 from './pages/prelevels/Prelevel3'
import Prelevel3b from './pages/prelevels/Prelevel3b'
import Prelevel4 from './pages/prelevels/Prelevel4'
import Prelevel4b from './pages/prelevels/Prelevel4b'
import Backstory from './pages/Backstory'
import Prelevel5 from './pages/prelevels/Prelevel5'
import Prelevel6 from './pages/prelevels/Prelevel6'
import Prelevel7 from './pages/prelevels/Prelevel7'
import Level1 from './pages/levels/Level1'
import Level2 from './pages/levels/Level2'
import Level3_1 from './pages/levels/Level3_1'
import Level3b from './pages/levels/Level3b'
import Level4a from './pages/levels/Level4a'
import Level4b from './pages/levels/Level4b'
import Level5 from './pages/levels/Level5'
import Level6 from './pages/levels/Level6'
import Level6_2 from './pages/levels/Level6_2'
import Level7 from './pages/levels/Level7'
import Level8_1 from './pages/levels/Level8_1'
import Level8_2 from './pages/levels/Level8_2'
import Prelevel8_1 from './pages/prelevels/Prelevel8a'
import Prelevel8_2 from './pages/prelevels/Prelevel8b'
import Prelevel6_2 from './pages/prelevels/Prelevel6b'
import Prelose1 from './pages/prelevels/Prelose1'
import Prelose2 from './pages/prelevels/Prelose2'
import Wrong_choice_ending from './pages/Endings/Wrong_choice_ending'
import Win from './pages/Endings/Win'
import Level3_2 from './pages/levels/Level3_2'
import Choice from './pages/Choices/Choice'
import Prechoice1 from './pages/prelevels/Prechoice1'
import Prechoice2 from './pages/prelevels/Prechoice2'
import Prechoice3 from './pages/prelevels/Prechoice3'
import Prebackstory from './pages/prelevels/Prebackstory'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './contexts/store'
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Welcome /> },
      { path: 'login', element: <LoginPage /> },
      {
        path: 'levels',
        children: [
          { path: 'prelevel1', element: <Prelevel1 /> },
          { path: 'level1', element: <Level1 /> },
          { path: 'prelevel2', element: <Prelevel2 /> },
          { path: 'level2', element: <Level2 /> },
          { path: 'prelevel3', element: <Prelevel3 /> },
          {
            path: 'level3-1',
            element: <Level3_1 />,
          },
          {
            path: 'level3-2',
            element: <Level3_2 />,
          },
          { path: 'prelevel3-2', element: <Prelevel3b /> },
          { path: 'level3-2', element: <Level3b /> },
          { path: 'prelevel4', element: <Prelevel4 /> },
          { path: 'level4-1', element: <Level4a /> },
          { path: 'prelevel4-2', element: <Prelevel4b /> },
          { path: 'level4-2', element: <Level4b /> },
          { path: 'levelbackstory', element: <Backstory /> },
          { path: 'prelevel5', element: <Prelevel5 /> },
          { path: 'level5', element: <Level5 /> },
          { path: 'prelevel6', element: <Prelevel6 /> },
          {
            path: 'level6-1',
            element: (
              <TerminalContextProvider>
                <Level6 />
              </TerminalContextProvider>
            ),
          },
          { path: 'prelevel6-2', element: <Prelevel6_2 /> },
          {
            path: 'level6-2',
            element: (
              <TerminalContextProvider>
                <Level6_2 />
              </TerminalContextProvider>
            ),
          },
          { path: 'prelevel7', element: <Prelevel7 /> },
          { path: 'level7', element: <Level7 /> },
          { path: 'levelprechoice1', element: <Prechoice1 /> },
          { path: 'levelprechoice2', element: <Prechoice2 /> },
          { path: 'levelPrechoice3', element: <Prechoice3 /> },
          { path: 'levelchoice', element: <Choice /> },
          { path: 'prelose1', element: <Prelose1 /> },
          { path: 'levelwrong', element: <Wrong_choice_ending /> },
          { path: 'prelose2', element: <Prelose2 /> },
          { path: 'prelevel8-1', element: <Prelevel8_1 /> },
          { path: 'level8-1', element: <Level8_1 /> },
          { path: 'prelevel8-2', element: <Prelevel8_2 /> },
          { path: 'level8-2', element: <Level8_2 /> },
          { path: 'win', element: <Win /> },
          { path: 'prebackstory', element: <Prebackstory /> },
        ],
      },
    ],
  },
])

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  )
}

export default App
