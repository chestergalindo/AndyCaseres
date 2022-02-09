import './Curriculum.scss'
import Skill from './Skill'
import { AiFillHtml5 } from 'react-icons/ai'

const Curriculum = () => {
  return (
    <div className='Curriculum'>
      <h1 className='title-skill '> Skills</h1>
      <div className='curriculum-content'>
        <Skill
          skill={
            'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fhtml.svg?alt=media&token=d3e27dc7-58a5-4c81-9130-4e27b1cc9ed2'
          }
        />
        <Skill
          skill={
            'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fcss.svg?alt=media&token=b1ad80fe-fc7d-4d59-b5f0-1def14d90f7e'
          }
        />
        <Skill
          skill={
            'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fjavascript.svg?alt=media&token=516f1670-f175-4342-90e8-6e412c464a46'
          }
        />
        <Skill
          skill={
            'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Ftypescript.svg?alt=media&token=2afa083f-4aea-42a1-9dff-7b24e926d2c6'
          }
        />
        <Skill
          skill={
            'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Freact.svg?alt=media&token=f7d71823-8896-4783-8ea0-297ca6029460'
          }
        />
        <Skill
          skill={
            'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fgit.svg?alt=media&token=fcc60141-6f40-42fd-8bd7-84fc94a7d238'
          }
        />
        <Skill
          skill={
            'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Fsass.svg?alt=media&token=52c3719b-c18b-46f1-93d3-8de7b8567a3a'
          }
        />
        <Skill
          skill={'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg'}
        />

        <Skill
          skill={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png'
          }
        />

        <Skill
          skill={
            'https://firebasestorage.googleapis.com/v0/b/test1-d2593.appspot.com/o/assets%2Fsvg%2Ffigma.svg?alt=media&token=8bceba1b-7201-4e93-871e-011ba8d99045'
          }
        />
      </div>
    </div>
  )
}

export default Curriculum
