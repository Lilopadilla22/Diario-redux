import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNotes } from '../../Store/Journal/thunks';

export const JournalPage = () => {

  const dispatch = useDispatch()

  const {isSaving, active: note} = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNotes())
  }


  return (
    <JournalLayout>  

      {
        (!!note) ? <NoteView/> : <NothingSelectedView />
      }  
      
      <IconButton
        onClick={onClickNewNote}
        size='large'
        disabled={isSaving}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
