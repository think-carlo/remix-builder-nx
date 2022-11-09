import styles from './ui-remix.module.css';

/* eslint-disable-next-line */
export interface UiRemixProps {}

export function UiRemix(props: UiRemixProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiRemix!</h1>
    </div>
  );
}

export default UiRemix;
