import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { FaRankingStar } from 'react-icons/fa6'
import styles from './Leaderboard.module.css'
export default function Leaderboard(props) {
  const { bgColor, textColor, headerColor } = props
  const style = {
    position: 'absolute',
    top: '70%',
    left: '75%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: bgColor,
    boxShadow: 24,
    p: 4,
    color: textColor,
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
          >
            Leaderboard
          </Typography>
          <hr />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul className={styles.ranks}>
              <Team position={1} name="Team gods" score={69}></Team>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

const Team = (props) => {
  const { name, position, score } = props
  return (
    <li className="team">
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
  return <span className="score">{score}</span>
}
