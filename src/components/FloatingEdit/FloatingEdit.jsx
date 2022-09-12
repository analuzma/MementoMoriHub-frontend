import * as React from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';


export default function FloatingEdit() {
  const fabStyle = {
  position: 'absolute',
  bottom: 20,
  right: 20,
};
  return (
<Fab color="secondary" aria-label="add" style={fabStyle}>
  <EditIcon/>
</Fab>
  );
}
