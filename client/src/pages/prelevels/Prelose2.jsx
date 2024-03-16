import React from 'react'
import Layout from './Layout'

const Prelose2 = () => {
  const text = [
    "Well… you allied with him. When I said it's Code Red I didn't mean the color of love. You have destroyed two timelines. Billions of people faded away just so one scientist could meet his wife.",
    "Well… this is a gray world and I do agree that love can make people do impossible things and that's what Andwyn did. That's what you did. But love also makes people blind. Andwyn was so obsessed about meeting his deceased wife that he sacrificed two timelines. ",
    "Love made him so blind that he didn't figure out what would happen afterwards. He knew about the destruction of the timelines but he did not know that they would reset themselves. That's how it really works. ",
    'How do I know this ? I am ANDWYN. After I destroyed both the timelines, I sort of became a variant in the temporal continuum. The TPA recruited me and gave me the mission of successfully restoring those two timelines and repairing my mess. ',
    'I am here to stop myself… so the universe has given you one more chance. So see you at the beginning…',
  ]
  return (
    <div>
      <Layout text={text} speed={90} lvl={'1'} />
    </div>
  )
}

export default Prelose2
