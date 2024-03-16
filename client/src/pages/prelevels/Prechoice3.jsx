import React from 'react'
import Layout2 from './Layout2'

const Prechoice3 = () => {
  const text = [
    'So it happened at last I see… You know another interesting fact about scientists, their foresight is insane. ',
    'You can always be sure that a scientist has thought of what can go wrong a hundred times more than whatever goes right. I applied the same principle here. ',
    'In Bastille, I had placed a miniature bomb within the outer bomb which was set to detonate ten minutes after the outer one was defused. Hence, I successfully ruined France. ',
    'In Area 51, I had secretly planted an AI virus within the primitive computer systems which would anyways start the self-destruct sequence soon after you left, thinking you had successfully stopped it. This way no more microprocessors in the 20th century. ',
    'North Korea was a bloody job, but yes, I killed the assassins there one by one ensuring there was no one who would kill Kim Jong Un in the first place. The nanoparticle shield was just a distraction and Kim Jong Un ended up surviving after all. ',
    'So there you go, all my backups to ensure I disrupted the right moments in history.',
    "That's the power of love, traveler. All this scheming wouldn't have been possible had my ambition to build the time machine to see Gertrude been weak. ",
    "I am ready to sacrifice anything, whether it's two lives or two timelines, to see my dear wife once again. ",
    'No one shall come in between, not even you.',
  ]
  return (
    <div>
      <Layout2 text={text} speed={70} lvl={'C3'} />
    </div>
  )
}

export default Prechoice3
