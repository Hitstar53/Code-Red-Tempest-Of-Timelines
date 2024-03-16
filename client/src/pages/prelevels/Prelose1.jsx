import React from 'react'
import Layout2 from './Layout2'

const Prelose1 = () => {
  const text = [
    'So you chose love, traveler. I thank you. I knew it, I saw the good in you the moment I saw you. Now I will go and meet her. ',
    "See her and talk to her for one last time before we fade away in this illusive reality of time and space and if you think you have committed a heinous crime then do remember that there are infinite timelines and 2 of them, they don't matter, because love is greater than anything else in this universe. ",
    'I call it the 6th force of nature. Now I will take my leave and complete my final wish.',
  ]
  return (
    <div>
      <Layout2 text={text} speed={70} lvl={'wrong'} />
    </div>
  )
}

export default Prelose1
