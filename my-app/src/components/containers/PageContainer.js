
import Header from './Header';
import styles from './PageContainer.module.css';

const PageContainer = ({ title, children }) => {
  return (
    <>
      <Header page={title} />
      <section className={styles.pageBody}>
        {children}
      </section>
    </>
  );
};

export default PageContainer;