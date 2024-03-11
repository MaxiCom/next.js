import style1 from '../style1.module.css'
import style2 from '../style2.module.css'
import style3 from '../style3.module.css'
import Nav from '../../nav'

export default function Page() {
  return (
    <div>
      <p
        className={`${style1.name} ${style2.name} ${style3.name}`}
        id="helloia"
      >
        hello world
      </p>
      <Nav />
    </div>
  )
}
