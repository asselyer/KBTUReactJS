import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';


import { Form, Button, FormControl } from 'react-bootstrap';


export const Home = () => (
    <div>
       <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
            <Form className="form-poisk" inline>
            <FormControl type="text" placeholder="Искать" className="mr-sm-2" />
            <Button variant="outline-success">Поиск</Button>
            </Form>
        
        </header>
    </div>
)