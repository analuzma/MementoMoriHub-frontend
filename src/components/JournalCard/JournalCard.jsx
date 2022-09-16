import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { TableCell, tableCellClasses, TableRow,  } 
from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import formatDate from '../../utils/format-date';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
    '&:hover': {
    cursor: "pointer",
    backgroundColor: theme.palette.common.black,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const JournalCard = ({journalEntry, _id, title, description, coverUrl, isFeatured, date}) => {
    const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/journal/${_id}`);
  };


  return (<>
            <StyledTableRow  key={date} onClick={handleDetail}>
              <StyledTableCell component="th" scope="row">
              {formatDate(date)}</StyledTableCell>
              <StyledTableCell align="left">{title}</StyledTableCell>
              <StyledTableCell align="left">{isFeatured? <BookmarkIcon/>:null}</StyledTableCell>
            </StyledTableRow>
            </>

  )
}

export default JournalCard