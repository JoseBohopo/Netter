
import db from 'eplant/firebase/admin'
export default async (request, response) => {
  const { query } = request
  const { id } = query

  try {
    const snapshot = await db.collection('nettwits').doc(id).get().then((doc) => {
      const data = doc.data()
      response.json(data)
    }).catch(error => console.log(error))
  } catch (error) {
    response.status(404).end()
    console.log(error)
  }
}
