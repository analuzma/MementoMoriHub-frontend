import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export default function FloatingAdd() {
  const fabStyle = {
  position: 'absolute',
  bottom: 20,
  right: 20,
};
  return (
<Fab color="primary" aria-label="add" style={fabStyle}>
  <AddIcon/>
</Fab>
  );
}
