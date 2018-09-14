const api = 'https://api.foursquare.com/v2';

const clientId = 'H5MQK4VAXXIWKL15T3TKR1ALTFJIYLNCQXZ5ED1GKLZPU2DE';
const clientSecret = 'HVRXIKKLIXMQR5ZW4GKAL35XR5UKPIHG45CBT2FAISC0RVXU';

// const clientSecret = 'A0CQBYLYCZGCFFFUCLNLPE1AIAQILSD4HNT4XPWWEVQEL5L1';
// const clientId = 'MDHGVCDLILI3Z2NTI433IJ0WUB3XZ1RL0OSADVQDOBFH3NOH';

// const clientId = 'QRSMSATOPDJSIZDJFFCAHH330IROR4TZVJOFENOKBH1I3HA1';
// const clientSecret = 'GQJJOGMCDN4LVG0FF10P52RXB2L0IP13JNZ53V3DZ53TJRRX';


export const getDetails = (venueId) =>
fetch(`${api}/venues/${venueId}?client_id=${clientId}&client_secret=${clientSecret}&v=20180831`)
.then(res => res.json())
.then(data => data.response.venue
)
.catch(err => console.log('Couldn\'t retrieve venue details with ', err))
