const api = 'https://api.foursquare.com/v2/venues/'
const clientId = 'QRSMSATOPDJSIZDJFFCAHH330IROR4TZVJOFENOKBH1I3HA1'
const clientSecret = 'GQJJOGMCDN4LVG0FF10P52RXB2L0IP13JNZ53V3DZ53TJRRX'

// https://api.foursquare.com/v2/venues/51fc382d498e6f7538dd7f79?client_id=QRSMSATOPDJSIZDJFFCAHH330IROR4TZVJOFENOKBH1I3HA1&client_secret=GQJJOGMCDN4LVG0FF10P52RXB2L0IP13JNZ53V3DZ53TJRRX&v=20180831

export const getDetails = (venueId) => {
    fetch(`${api}${venueId}?client_id=${clientId}&client_secret=${clientSecret}&v=20180831`)
    .then(function(res) {
        return res.json()
    })
    .catch(function(err) {
        console.log('Couldn\'t retrieve venue details with ', err)
    });
}
