import request from 'superagent'

const CALENDAR_ID = 'tl7tbqqlini4meimdrjgcmrdos@group.calendar.google.com'
const API_KEY = 'AIzaSyC-nQ0Jy1JvKVko4z43O51zb9Krj7dOs_M'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}