import advantagesData from "../../shared/services/advantagesData";
import css from './Advantages.module.scss';

const Advantages = () => { 
  const advantagesItems = advantagesData?.length
    ? advantagesData.map(({ id, name, description }) => {
    return (
      <li className={css.advantagesItem} key={id}>
        <div>
        <h2 className={css.title}>{name}</h2>
          <p className={css.description}>{description}</p>
        </div>
      </li>
    )
    }) : <p>No advantages available.</p>;
    return (
      <section className={`${css.wrapperSection} ${"container"}`}>
        <ul className={css.advantagesList}>{advantagesItems }</ul>
      </section>
    );
}
export default Advantages;