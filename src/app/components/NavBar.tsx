import Link from "next/link";
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav className={styles.NavBar}>
            <ul>
                <li><Link href={'/useState'}>useState</Link></li>
                <span>/</span>
                <li><Link href={'/useReducer'}>useReducer</Link></li>
                <span>/</span>
                <li><Link href={'/useRef'}>useRef</Link></li>
                <span>/</span>
                <li><Link href={'/useEffect'}>useEffect</Link></li>
                <span>/</span>
                <li><Link href={'/useLayoutEffect'}>useLayoutEffect</Link></li>
                <span>/</span>
                <li><Link href={'/useMemo'}>useMemo</Link></li>
                <span>/</span>
                <li><Link href={'/useCallback'}>useCallback</Link></li>
                <span>/</span>
                <li><Link href={'/useTransition'}>useTransition</Link></li>
                <span>/</span>
                <li><Link href={'/useContext'}>useContext</Link></li>
            </ul>
        </nav>
    )
}
