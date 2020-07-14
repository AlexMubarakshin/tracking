import React from 'react';

import moment from 'moment';

import CircularProgress from '@material-ui/core/CircularProgress';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import { TrackInfo } from '../../../../service/tracker';

type TrackInfoComponentProps = {
  info?: TrackInfo;
  hasError?: boolean;
};

const TrackInfoComponent: React.FC<TrackInfoComponentProps> = ({
  info,
  hasError,
}: TrackInfoComponentProps) => {
  const isLoading = !info && !hasError;

  if (isLoading) {
    return <CircularProgress />;
  }

  if (hasError) {
    return (
      <Typography variant="h3" component="h3" gutterBottom align="center" color="error">
        Error
        <span role="img" aria-label="">
          😵
        </span>
      </Typography>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" style={{ width: 160 }}>
              ID
            </TableCell>
            <TableCell align="left">{info?.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" style={{ width: 160 }}>
              Last seen
            </TableCell>
            <TableCell align="left">{moment(info?.lastSeen).fromNow()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" style={{ width: 160 }}>
              Session
            </TableCell>
            <TableCell align="left">{info?.session}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TrackInfoComponent;
