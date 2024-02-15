import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import styles from './Hint.module.css'
import { FaRegLightbulb } from 'react-icons/fa'

export default function Hint(props) {
  const { bgColor, textColor, headerColor } = props
  const style = {
    position: 'absolute',
    top: '70%',
    left: '75%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: bgColor,
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
    color: textColor,
    maxHeight: '400px',
  }
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <FaRegLightbulb
        onClick={handleOpen}
        style={{
          height: '30px',
          width: '30px',
        }}
      />
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
            Hint
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              sapiente ad similique exercitationem, corrupti cupiditate quasi
              repellendus eaque dolore tempore sit fugiat minus porro
              accusantium ex distinctio, vitae nesciunt laborum ipsam incidunt,
              id ea animi beatae? Quibusdam beatae deserunt neque?
            </>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
