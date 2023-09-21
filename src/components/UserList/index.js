

import React, { useState, useEffect } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const UserList = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Retrieve user data from local storage
        const userDetails = localStorage.getItem('userData');

        if (userDetails) {
            // If user data exists in local storage, set it to state
            setUserData(JSON.parse(userDetails));
        } else {
            // If no user data exists, create a default user and set it to local storage
            const defaultUser = {
                id: 0,
                fname: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                address: '123 Main St',
            };

            // Set the default user to local storage
            localStorage.setItem('userData', JSON.stringify([defaultUser]));

            // Set the default user to state
            setUserData([defaultUser]);
        }
    }, []);

    const handleDelete = (id) => {
        const updatedUserData = [...userData];
        updatedUserData.splice(id, 1);
        setUserData(updatedUserData);
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
    }

    return (
        <>
            <TableContainer component={Paper} className="main">
                <Button variant="contained" isableRipple onClick={() => navigate('/')} > Add User </Button>

                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Fname</TableCell>
                            <TableCell>Lname</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Mobile No.</TableCell>

                            <TableCell>Address</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map((user, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.fname}</TableCell>
                                    <TableCell>{user.lastName}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phoneNumber}</TableCell>

                                    <TableCell>{user.address}</TableCell>
                                    <TableCell>
                                        <DeleteIcon onClick={() => handleDelete(index)} />
                                        {/* <EditIcon /> */}

                                        <Link to={`/edit-user/${user.id}`}>
                                            <EditIcon />
                                        </Link>

                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default UserList;



