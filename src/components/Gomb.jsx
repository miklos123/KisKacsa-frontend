export default function FeketeGomb({ szin, onClick, text }) {
    return (
        <button className={szin} onClick={onClick}>
            {text}
        </button>
    )
}