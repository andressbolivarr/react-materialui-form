const KEYS ={
    Bookings:'Bookings',
    BookingId:'BookingId'
}

export const getcoverCollection = ()=>([
    { id: '1', title: '1' },
    { id: '2', title: '2' },
    { id: '3', title: '3' },
    { id: '4', title: '4' },
    { id: '5', title: '5' },
    { id: '6', title: '6' },
])
export const getCoverHours = ([
    { id: '1', title: '12:00' },
    { id: '2', title: '12:15' },
    { id: '3', title: '12:30' },
    { id: '4', title: '12:45' },
    { id: '5', title: '13:00' },
    { id: '6', title: '13:15' },
    { id: '7', title: '13:30' },
    { id: '8', title: '13:45' },
    { id: '9', title: '14:00' },
    { id: '10', title: '14:15' },
    { id: '11', title: '14:30' },
    { id: '12', title: '14:45' },
    { id: '13', title: '15:00' },
    { id: '14', title: '15:15' },
    { id: '15', title: '15:30' },
    { id: '16', title: '15:45' },
    { id: '17', title: '16:00' },
    { id: '18', title: '16:15' },
    { id: '19', title: '16:30' },
    { id: '20', title: '16:45' },
    { id: '21', title: '17:00' },
    { id: '22', title: '17:15' },
    { id: '23', title: '17:30' },
    { id: '24', title: '17:45' },
    { id: '25', title: '18:00' },
    { id: '26', title: '18:15' },
    { id: '27', title: '18:30' },
    { id: '28', title: '18:45' },
    { id: '29', title: '19:00' },
    { id: '30', title: '19:15' },
    { id: '31', title: '19:30' },
    { id: '32', title: '19:45' },
    { id: '33', title: '20:00' },
    { id: '34', title: '20:15' },
    { id: '35', title: '20:30' },
    { id: '36', title: '20:45' },
    { id: '37', title: '21:00' },
    { id: '38', title: '21:15' },
    { id: '39', title: '21:30' },
    { id: '40', title: '21:45' },
    { id: '41', title: '22:00' },
    { id: '42', title: '22:15' },
    { id: '43', title: '22:30' },
    { id: '44', title: '22:45' },
])

export function insertBooking(data) {
    let Bookings=getAllBookings();
    data['id'] = generateBookingId()
    Bookings.push(data)
    localStorage.setItem(KEYS.Bookings,JSON.stringify(Bookings))
}

export function generateBookingId() {
    if (localStorage.getItem(KEYS.BookingId) == null)
        localStorage.setItem(KEYS.BookingId, '0')
    var id = parseInt(localStorage.getItem(KEYS.BookingId))
    localStorage.setItem(KEYS.BookingId, (++id).toString())
    return id;
}

export function getAllBookings() {
    if (localStorage.getItem(KEYS.Bookings) == null)
        localStorage.setItem(KEYS.Bookings, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.Bookings));
}