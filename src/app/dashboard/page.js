import { GET } from '../api/fetch/route'

GET
export default async function Dashboard(props) {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <div>
      <h2>DASHBOARD</h2>
    </div>
  )
}
