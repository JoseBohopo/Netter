
import db from 'eplant/firebase/admin'
export default async (request, response) => {
  const { query } = request
  const { id } = query

  try {
    await db.collection('nettwits').doc(id).get().then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      response.json({
        ...data,
        id,
        createdAt: +createdAt.toDate()
      })
    }).catch(error => console.error(error))
  } catch (error) {
    response.status(404).end()
    console.error(error)
  }
}
