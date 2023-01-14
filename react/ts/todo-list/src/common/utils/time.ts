export default function timeToSeconds(time: string) {
  // time --> "00:00:00"
  const [hours = '0', minutes = '0', seconds = '0'] = time.split(':')

  const oneHourInSeconds = 3600
  const oneMinuteInSeconds = 60


  const hourInSeconds = Number(hours) * oneHourInSeconds
  const minutesInSeconds = Number(minutes) * oneMinuteInSeconds
  
  return hourInSeconds + minutesInSeconds + Number(seconds)

}