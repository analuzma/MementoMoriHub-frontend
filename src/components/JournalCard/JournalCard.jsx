import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const JournalCard = ({journalEntry}) => {
    const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/journal/${journalEntry.id}`);
  };

    const deleteRequest = async () => {

  };

  return (
    <div>JournalCard</div>
  )
}

export default JournalCard