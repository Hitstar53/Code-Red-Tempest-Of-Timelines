import * as React from 'react'

import { FaRankingStar } from 'react-icons/fa6'
import styles from './Leaderboard.module.css'
import Podium from './Podium'
import { styled, useTheme } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { RiNumber1 } from 'react-icons/ri'
import { RiNumber2 } from 'react-icons/ri'
import { RiNumber3 } from 'react-icons/ri'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
const drawerWidth = 400
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,

    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: 'relative',
  })
)
export default function Leaderboard(props) {
  const { bgColor, headerColor, iconColor, textColor, positionColor } = props

  const [open, setOpen] = React.useState(false)

  const theme = useTheme()
  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ width: '30px' }}>
      <FaRankingStar
        style={{ height: '30px', width: '30px', color: iconColor }}
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...open }}
      ></FaRankingStar>
      <Main open={open}></Main>
      <div className="leaderboard" style={{ backgroundColor: bgColor }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              backgroundColor: bgColor,
              opacity: 0.85,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <Divider />
          <div className="Leader">
            <h1 className={styles.header} style={{ color: headerColor }}>
              Leaderboard
            </h1>
          </div>
          <Divider />
          <div className={styles.ranks}>
            <Podium position={1} name="Team gods" score={69}></Podium>
            <Podium position={2} name="Team gods" score={69}></Podium>
            <Podium position={3} name="Team gods" score={69}></Podium>
            <Team
              position={4}
              name="Team gods"
              score={69}
              textColor={textColor}
              positionColor={positionColor}
            ></Team>
            <Team
              position={5}
              name="Team gods"
              score={69}
              textColor={textColor}
              positionColor={positionColor}
            ></Team>
            <Team
              position={6}
              name="Team gods"
              score={69}
              textColor={textColor}
              positionColor={positionColor}
            ></Team>
            <Team
              position={7}
              name="Team gods"
              score={69}
              textColor={textColor}
              positionColor={positionColor}
            ></Team>
          </div>
        </Drawer>
      </div>
    </div>
  )
}

const Team = (props) => {
  const { name, position, score, textColor, positionColor } = props

  const boxShadow = '0 0 2px 2px' + positionColor
  const border = '3px solid ' + positionColor
  return (
    <div
      className={styles.team}
      style={{
        backgroundColor: positionColor,
        color: textColor,
        boxShadow: boxShadow,
        border: border,
      }}
    >
      <Position position={position}></Position>
      <Name name={name}></Name>
      <Score score={score}></Score>
    </div>
  )
}
const Position = ({ position }) => {
  return <span>{position}</span>
}
const Name = ({ name }) => {
  return <span>{name}</span>
}
const Score = ({ score }) => {
  return <span style={{ alignSelf: 'center' }}>{score}</span>
}

export { Team, Position, Name, Score }
