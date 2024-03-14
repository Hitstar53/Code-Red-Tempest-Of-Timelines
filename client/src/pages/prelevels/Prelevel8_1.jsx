import React from 'react'
import Layout2 from './Layout2'

const Prelevel8_1 = () => {
  const text = [
    'Oh, traveler! We met at last! \nThe one who has been thwarting all my plans. ',
    "If you managed to make it here, I presume you must know why I am on this quest. There's just something about love, and especially more so for scientists. ",
    'Scientists are weird creatures… spending their entire lives chasing answers. ',
    'I am sort of the same, because all I want is to meet the most special person to me once again. I am ready to do whatever it takes. ',
    'You see, all my life I spent so much time in theory that people gave up on understanding and talking to me. I… never had anyone close I could share moments with… anyone who would bring me happiness… I was just alone. ',
    'Every day left me with more loneliness, a constant growing void in my heart. The isolation hurt, and I nearly gave up on the world… before… before Gertrude came. ',
    'She was the first person who treated me like a friend… and soon before we knew it we were married. ',
    'I got to taste happiness like never before… thanks to the person of my dreams. Gertrude was just a phenomenal human being. ',
    'You know, the day she died… the darkness returned. I lost my smile, my cheerfulness, I lost a piece of my being. ',
    "She didn't deserve it. I wish it would have been me that day… I would have gladly died in her place. I cannot live with myself without seeing her one last time.",
    'I want to apologize, to feel her yet again, and I can do anything to achieve that.',
  ]
  return (
    <div>
      <Layout2 text={text} speed={70} lvl={'8_1'} />
    </div>
  )
}

export default Prelevel8_1
