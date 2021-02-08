import React, { useState, useEffect } from 'react'
import db from './firebase';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './PhoneBookDisplay.css'

const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
});

function PhoneBookDisplay() {

    const [phoneRecords, setPhoneRecords] = useState([]);
    const [searchTerm, setSearch] = useState('');
    const [filterPhoneBook, setFilteredPhonebook] = useState([]);

    useEffect(() => {
        db.collection('PhoneBook').onSnapshot(snapshot => {
            setPhoneRecords(snapshot.docs.map(doc => doc.data()
            ))
        })            
        filterHandler();
    }, [phoneRecords, searchTerm]);

    const filterHandler = () => {
        setFilteredPhonebook(phoneRecords);
        if(searchTerm != "")
            setFilteredPhonebook(phoneRecords.filter(phoneRecord => phoneRecord.Name.toLowerCase().includes(searchTerm.toLowerCase())))
    }
    
    return (
        <div>
            <h2>Phone Book</h2>
        <TextField id="search" label="Search" onChange={event => {setSearch(event.target.value)}} />
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
        <TableHead>
          <TableRow className="tableheader">
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterPhoneBook.map((phoneRecord) => (
            <TableRow className="tablerows" key={phoneRecord.PhoneNumber}>
              <TableCell align="center">{phoneRecord.Name}</TableCell>
              <TableCell align="center">{phoneRecord.PhoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}

export default PhoneBookDisplay
