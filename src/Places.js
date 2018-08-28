import { Component } from 'react';

const locations = [
    {title: "McDonald's", location: {lat: -22.192114, lng: -49.960094}},
    {title: 'Old Dog Dogueria', location: {lat: -22.193228, lng: -49.961687}},
    {title: 'Alvorada Churrascaria', location: {lat: -22.190681, lng: -49.963250}},
    {title: 'Hotel Aquarius de Marília', location: {lat: -22.187372, lng: -49.961643}},
    {title: 'Travel Inn Marília', location: {lat: -22.183034, lng: -49.963731}},
    {title: 'Auto Posto Alvorada de Marília Ltda', location: {lat: -22.191720, lng: -49.959906}},
    {title: 'Posto Aquarius - GNV', location: {lat: -22.187565, lng: -49.967719}}
  ];

function Places () {
    return locations
}

export default Places