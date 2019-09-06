import React, {Component} from 'react';
import {connect} from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// function createData(name, img, calories, fat, carbs, protein) {
//   return { name, img, calories, fat, carbs, protein };
// }

// const rows = [ 
//   createData('Frozen yoghurt',"http://www.fiba.basketball/api/img/player/headshot/5/208098/60298/194870?alternate=%2fimages%2fdefault_profile.jpg", 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich',"http://www.fiba.basketball/api/img/player/headshot/5/208098/60298/207548?alternate=%2fimages%2fdefault_player_profile.jpg", 237, 9.0, 37, 4.3),
//   createData('Eclair',"http://www.fiba.basketball/api/img/player/headshot/5/208098/60298/210316?alternate=%2fimages%2fdefault_player_profile.jpg", 262, 16.0, 24, 6.0),
//   createData('Cupcake',"http://www.fiba.basketball/api/img/player/headshot/5/208098/60298/207548?alternate=%2fimages%2fdefault_player_profile.jpg", 305, 3.7, 67, 4.3),
//   createData('Gingerbread',"http://www.fiba.basketball/api/img/player/headshot/5/208098/60298/149276?alternate=%2fimages%2fdefault_player_profile.jpg", 356, 16.0, 49, 3.9),
//   createData('Eclair',"http://www.fiba.basketball/api/img/player/headshot/5/208098/60298/203690?alternate=%2fimages%2fdefault_player_profile.jpg", 262, 16.0, 24, 6.0),
// ];

  class DenseTable extends Component {
  render() {  
    const {items}=this.props
  return (
    <div className="roott">
      <Paper className="paperr">
        <Table className="tableee" size="small">
          <TableHead>
            <TableRow className="tab" >
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="center">Calories</TableCell>
              <TableCell align="center">photp</TableCell>
              <TableCell align="center">Fat&nbsp;(g)</TableCell>
              <TableCell align="center">Carbs&nbsp;(g)</TableCell>
              <TableCell align="center">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(row => (
              <TableRow key={row.name}>
                
                <TableCell align="center">
                  <div className="qqq">
                    <img src={row.photo} />
                  </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                  
                  {row.price}
                  
                  
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
}
const mapStateToProps = (state) => {
  return { 
      items: state.reduser 
  };
};

export default connect(mapStateToProps)(DenseTable);
