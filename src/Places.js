import chef from './img/chef-icon.png';
import hotel from './img/hotel-icon.png';
import gas from './img/gas-station.png';
import chefChecked from './img/chef-icon-clicked.png';
import hotelChecked from './img/icon-hotel-open.png';
import gasChecked from './img/icon-gas-open.png';

const Places = [
    {
      id: '52795a7a498ecc6c443e533b',
      title: "McDonald's",
      location: { lat: -22.192114, lng: -49.960094 },
      type: 'restaurant',
      iconOpen: chefChecked,
      iconClosed: chef
    },
    {
      id: '51fc382d498e6f7538dd7f79',
      title: 'Old Dog Dogueria',
      location: { lat: -22.193228, lng: -49.961687 },
      type: 'restaurant',
      iconOpen: chefChecked,
      iconClosed: chef
    },
    {
      id: '527d637011d20f60d6776123',
      title: 'Alvorada Churrascaria',
      location: { lat: -22.190681, lng: -49.96325 },
      type: 'restaurant',
      iconOpen: chefChecked,
      iconClosed: chef
    },
    {
      id: '531b2bff11d2d9a541f5eca7',
      title: 'Travel Inn Marília',
      location: { lat: -22.183034, lng: -49.963731 },
      type: 'hotel',
      iconOpen: hotelChecked,
      iconClosed: hotel
    },
    {
      id: '4e921ba8cc2178bffdbabce2',
      title: 'Posto Aquarius - GNV',
      location: { lat: -22.187565, lng: -49.967719 },
      type: 'gas',
      iconOpen: gasChecked,
      iconClosed: gas
    }
];
 
export default Places;