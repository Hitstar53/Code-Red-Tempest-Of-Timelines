import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { FaRankingStar } from 'react-icons/fa6'
import styles from './Leaderboard.module.css'
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

    maxHeight: '400px',
    overflowY: 'scroll',
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <FaRankingStar
        onClick={handleOpen}
        style={{ height: '30px', width: '30px' }}
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
            <ul className={styles.ranks}>
              <Team position={1} name="Team gods" score={69}></Team>
              <Team position={2} name="Team gods" score={69}></Team>
              <Team position={3} name="Team gods" score={69}></Team>
              <Team position={4} name="Team gods" score={69}></Team>
              <Team position={5} name="Team gods" score={69}></Team>
              <Team position={6} name="Team gods" score={69}></Team>
              <Team position={7} name="Team gods" score={69}></Team>
            </ul>
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
  if (position == 1) {
    positionColor = '#FFD95A'

    textColor = 'black'
  }
  if (position == 2) {
    positionColor = '#C7C8CC'
    textColor = 'black'
  }
  if (position == 3) {
    positionColor = '#B67352'
    textColor = 'black'
  }
  const boxShadow = '0 0 5px 2px' + positionColor
  const border = '3px solid ' + positionColor
  return (
    <li
      className={styles.team}
      style={{
        backgroundColor: positionColor,
        color: textColor,
        // boxShadow: boxShadow,
        border: border,
      }}
    >
      <Position position={position}></Position>
      <Name name={name}></Name>
      <Score score={score}></Score>
    </li>
  )
}
const Position = ({ position }) => {
  return <span className="position">{position}</span>
}
const Name = ({ name }) => {
  return <span className="name">{name}</span>
}
const Score = ({ score }) => {
  return (
    <span className="score" style={{ alignSelf: 'center' }}>
      {score}
    </span>
  )
}
