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
import Prelevel5 from './pages/prelevels/Prelevel5'
import Prelevel6 from './pages/prelevels/Prelevel6'
import Prelevel7 from './pages/prelevels/Prelevel7'
import Level1 from './pages/levels/Level1'
import Level2 from './pages/levels/Level2'
import Level3 from './pages/levels/Level3'
import Level3b from './pages/levels/Level3b'
import Level4a from './pages/levels/Level4a'
import Level4b from './pages/levels/Level4b'
import Level5 from './pages/levels/Level5'
import Level6 from './pages/levels/Level6'
import Level7 from './pages/levels/Level7'
import Level8 from './pages/levels/Level8'
import Level8_1 from './pages/levels/Level8_1'
import Prelevel8_1 from './pages/prelevels/Prelevel8a'
import Prelevel8_2 from './pages/prelevels/Prelevel8b'
import Prelevel8_3 from './pages/prelevels/Prelevel8c'
import Win from './pages/Endings/Win'
import Wrong_choice_ending from './pages/Endings/Wrong_choice_ending'
import Level3_1 from './pages/levels/Level3_1'
import Prelose1 from './pages/prelevels/Prelose1'
import Prelose2 from './pages/prelevels/Prelose2'
import './App.css'

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
          { path: 'level3', element: <Level3 /> },
          { path: 'prelevel3-2', element: <Prelevel3b /> },
          { path: 'level3-2', element: <Level3b /> },
          { path: 'prelevel4', element: <Prelevel4 /> },
          { path: 'level4-1', element: <Level4a /> },
          { path: 'prelevel4-2', element: <Prelevel4b /> },
          { path: 'level4-2', element: <Level4b /> },
          { path: 'prelevel5', element: <Prelevel5 /> },
          { path: 'level5', element: <Level5 /> },
          { path: 'prelevel6', element: <Prelevel6 /> },
          {
            path: 'level6',
            element: (
              <TerminalContextProvider>
                <Level6 />
              </TerminalContextProvider>
            ),
          },
          { path: 'prelevel7', element: <Prelevel7 /> },
          { path: 'level7', element: <Level7 /> },
          { path: 'level8', element: <Level8 /> },
          { path: 'level8_1', element: <Level8_1 /> },
          {
            path: 'prelevel8_1',
            element: <Prelevel8_1 />,
          },
          {
            path: 'prelevel8_2',
            element: <Prelevel8_2 />,
          },
          {
            path: 'prelevel8_3',
            element: <Prelevel8_3 />,
          },
          {
            path: 'prelose1',
            element: <Prelose1 />,
          },
          {
            path: 'prelose2',
            element: <Prelose2 />,
          },
          {
            path: 'win',
            element: <Win />,
          },
          {
            path: 'levelwrong',
            element: <Wrong_choice_ending />,
          },
          {
            path: 'level3_1',
            element: <Level3_1 />,
          },
        ],
      },
    ],
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
