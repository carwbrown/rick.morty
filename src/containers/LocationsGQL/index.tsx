import React from "react";
import { useQuery, gql } from "@apollo/client";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const GET_LOCATIONS = gql`
  query GetCharacters {
    locations {
      results {
        name
        type
        id
        dimension
        residents {
          name
          id
        }
      }
    }
  }
`;

interface IResident {
  name: string;
  id: string;
}
interface ILocation {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: IResident[];
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const LocationsGQL = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) {
    return <div>Loading Locations...</div>;
  }
  if (error) {
    return <div>ERROR</div>;
  }

  const formatResidents = (residents: IResident[]) => {
    const residentNames = residents.map((resident: IResident) => resident.name);
    return residentNames.join(", ");
  };

  return (
    <div>
      <div className="SectionTitles">Locations</div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Dimension</TableCell>
              <TableCell align="right">Residents</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.locations.results.map((location: ILocation) => (
              <TableRow key={location.id}>
                <TableCell component="th" scope="row">
                  {location.name}
                </TableCell>
                <TableCell align="right">{location.type}</TableCell>
                <TableCell align="right">{location.dimension}</TableCell>
                <TableCell align="right">
                  {formatResidents(location.residents)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
