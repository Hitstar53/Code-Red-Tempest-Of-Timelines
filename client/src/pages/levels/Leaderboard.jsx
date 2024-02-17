import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { FaRankingStar } from 'react-icons/fa6'
import styles from './Leaderboard.module.css'
import Podium from './Podium'
export default function Leaderboard(props) {
  const { bgColor, headerColor } = props

  const style = {
    position: 'absolute',
    top: '70%',
    left: '75%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: bgColor,
    boxShadow: 24,
    p: 4,
    opacity: '0.6',
    maxHeight: '400px',
    overflowY: 'scroll',
    borderRadius: '25px',
    '&::-webkit-scrollbar': {
      width: 12.5,
    },
    '&::-webkit-scrollbar-track': {
      background: '#E4DEBE',
      borderRadius: '45px',
      marginTop: '20px',
      marginBottom: '20px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#3E3232',
      borderRadius: '45px',
    },
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <FaRankingStar
        onClick={handleOpen}
        style={{ height: '30px', width: '30px', color: 'white' }}
      ></FaRankingStar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className={styles.header}
            style={{ color: headerColor }}
          >
            LEADERBOARD
          </Typography>
          <hr />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className={styles.ranks}>
              <Podium position={1} name="Team gods" score={69}></Podium>
              <Podium position={2} name="Team gods" score={69}></Podium>
              <Podium position={3} name="Team gods" score={69}></Podium>
              <Team position={4} name="Team gods" score={69}></Team>
              <Team position={5} name="Team gods" score={69}></Team>
              <Team position={6} name="Team gods" score={69}></Team>
              <Team position={7} name="Team gods" score={69}></Team>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

const Team = (props) => {
  const { name, position, score } = props
  let positionColor = '#3b2a1a9d'
  let textColor = 'white'
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
