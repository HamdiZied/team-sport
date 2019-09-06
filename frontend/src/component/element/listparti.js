// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// // const useStyles = makeStyles(theme => ({
// //   root: {
// //     width: '90%',
// //     margin: "auto",
// //     opacity: ".8",
// //   },
// //   paper: {
// //     marginTop: theme.spacing(),
// //     width: '90%',
// //     margin: "auto",
// //     overflowX: 'auto',
// //     marginBottom: theme.spacing(8),
// //   },
// //   table: {
// //     paddingLeft: 50,
// //     minWidth: 650,
// //     textAlign: "center",
    
// //   },
// //   tabl: {
// //     height: "50px",
// //     background: "#777",
    
// //   },
// //   tablee:{
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   }
// // }));

// function createData(name,im, calories,mi, fat, carbs, protein) {
//   return { name,im, calories,mi, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt',"https://lagrinta.tn/wp-content/uploads/2017/10/Jeunesse_sportive_kairouanaise.png", 159,"https://upload.wikimedia.org/wikipedia/fr/3/33/Logo_Club_africain.svg", 6.0, 24, 4.0),
//   createData('Ice cream sandwich',"https://lagrinta.tn/wp-content/uploads/2017/10/Jeunesse_sportive_kairouanaise.png", 237,"https://upload.wikimedia.org/wikipedia/fr/3/33/Logo_Club_africain.svg", 9.0, 37, 4.3),
//   createData('Eclair',"https://lagrinta.tn/wp-content/uploads/2017/10/Jeunesse_sportive_kairouanaise.png", 262,"https://upload.wikimedia.org/wikipedia/fr/3/33/Logo_Club_africain.svg", 16.0, 24, 6.0),
//   createData('Cupcake',"https://lagrinta.tn/wp-content/uploads/2017/10/Jeunesse_sportive_kairouanaise.png", 305,"https://upload.wikimedia.org/wikipedia/fr/3/33/Logo_Club_africain.svg", 3.7, 67, 4.3),
//   createData('Gingerbread',"https://lagrinta.tn/wp-content/uploads/2017/10/Jeunesse_sportive_kairouanaise.png", 356,"https://upload.wikimedia.org/wikipedia/fr/3/33/Logo_Club_africain.svg", 16.0, 49, 3.9),
//   createData('Gingerbread',"https://lagrinta.tn/wp-content/uploads/2017/10/Jeunesse_sportive_kairouanaise.png", 356,"https://upload.wikimedia.org/wikipedia/fr/3/33/Logo_Club_africain.svg", 16.0, 49, 3.9),
//   createData('Gingerbread',"https://lagrinta.tn/wp-content/uploads/2017/10/Jeunesse_sportive_kairouanaise.png", 356,"https://upload.wikimedia.org/wikipedia/fr/3/33/Logo_Club_africain.svg", 16.0, 49, 3.9),
//   createData('Gingerbread',"https://lagrinta.tn/wp-content/uploads/2017/10/Jeunesse_sportive_kairouanaise.png", 356,"https://upload.wikimedia.org/wikipedia/fr/3/33/Logo_Club_africain.svg", 16.0, 49, 3.9),
// ];

// export default function DenseTable() {
//   // const classes = useStyles();

//   return (
//     <div className="roo">
//       <Paper className="pap">
//         <Table className="taa" size="small">
//           <TableHead>
//             <TableRow className="tablll" >
//               <TableCell align="center">JSK</TableCell>
//               <TableCell align="center">VS</TableCell>
//               <TableCell align="center">adverseure</TableCell>
//               <TableCell align="center">round</TableCell>
//               <TableCell align="center">stade</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody >
//             {rows.map(row => (
//               <TableRow key={row.name}>
//                 <TableCell align="justify" component="th" scope="row" className="tableee">
//                     <div className="logoclub">
//                         <img src={row.im} />
//                     </div>
//                 </TableCell>
//                 <TableCell align="center">VS</TableCell>
//                 <TableCell align="justify" className={classes.tablee}>
//                     <div className="logoclub">
//                         <img src={row.mi} />
//                     </div>
//                 </TableCell>
//                 <TableCell align="center">{row.carbs}</TableCell>
//                 <TableCell align="center">{row.protein}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     </div>
//   );
// }




import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

class DenseTable extends Component {
  render() {
    const {items}=this.props
    return (
      <div className="container partii">
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Username</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    {
      items.map((item)=><tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.subcaption}</td>
        <td>
          <div className="logoclub">
            <img src={item.photo} />
          </div>
        </td>
        <td>@mdo</td>
        <td>@mdo</td>
    </tr>
      )
    }
    

  </tbody>
</Table>
        
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { 
      items: state.reduser 
  };
};

export default connect(mapStateToProps)(DenseTable);







