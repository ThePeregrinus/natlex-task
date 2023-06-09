import { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  DialogContentText,
  TextField,
  MenuItem,
} from '@mui/material';

import { ChartContextType } from '../../interfaces/ChartContextType';
import { changeDataOptions } from '../../chartData/changeDataOptions';
import { CHART_CONFIG } from '../../chartData/chartConfig';

export const ModalSettings = (props: {
  open: boolean;
  id: number;
  value: ChartContextType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}) => {
  const [name, setName] = useState(
    props.value.chartsState[props.id].title.text
  );
  const [type, setType] = useState(
    props.value.chartsState[props.id].series[0].type
  );
  const [color, setColor] = useState(
    props.value.chartsState[props.id].series[0].color
  );

  return (
    <Dialog open={props.open} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography variant="h4">Setting chart</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Type new chart name</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label={props.value.chartsState[props.id].title.text}
          type="text"
          fullWidth
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
      </DialogContent>

      <DialogContent>
        <DialogContentText>Select new type</DialogContentText>
        <TextField
          margin="dense"
          select
          label={props.value.chartsState[props.id].series[0].type}
          type="email"
          fullWidth
          variant="standard"
          defaultValue={''}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setType(event.target.value);
          }}
        >
          {CHART_CONFIG.TYPES.map((el: string, ind: number) => (
            <MenuItem key={ind} value={el}>
              {el}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogContent>
        <DialogContentText>Select new color</DialogContentText>
        <TextField
          margin="dense"
          label={color}
          type="color"
          fullWidth
          variant="standard"
          value={color}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setColor(event.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() =>
            props.value.setChartsState(
              changeDataOptions(props.value, props.id, name, color, type)
            )
          }
        >
          Save changes
        </Button>
        <Button
          variant="contained"
          onClick={() => props.setOpen(false)}
          color="error"
        >
          Exit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
