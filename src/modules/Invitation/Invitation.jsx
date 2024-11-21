import css from './Invitation.module.scss';

const Invitation = () => {
    return (
        <section className={`${css.wrapperSectionInvitation} ${"container"}`}>
            <h2 className={css.titleInvitation}>Не зволікай, на тебе чекає багато «плюшок»</h2>
        </section>
    )
}
export default Invitation;