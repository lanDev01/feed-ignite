import { PencilLine } from 'phosphor-react';
import styles from "./Sidebar.module.css";
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    
      <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
        alt=""
        className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/landev01.png"/>

        <strong>Alan Gonçalves</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
            <PencilLine size={20}/>
            Editar seu Perfil
        </a>
      </footer>
      </aside>
  );
}
