export async function getAllEvents() {
  const response = await fetch('https://nextjs-course-353dc-default-rtdb.firebaseio.com/events.json').then(d => d.json());
  const events = [];

  for (const id in response) {
    events.push({ id: id, ...response[id] });
  }
  return events;
}
