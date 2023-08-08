import styles from '@/styles/Home.module.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar'
import Mainscreen from './component/Mainscreen';

export default function Home() {
  return (
    <>
      <div className={styles?.Messagescreen}>
        <Navbar />
        <Mainscreen />
      </div>
    </>
  )
}
