import './styles.css'
export default function CheckLoginPharm({closeMenu,msgToSee}){
    return(
        <div className='modal_container'>
           <article>
            {msgToSee}
            <button onClick={closeMenu}>
                cerrar
            </button>
            </article>
        </div>
    )
}