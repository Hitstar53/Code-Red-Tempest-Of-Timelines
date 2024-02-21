import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.hackerImage}></div>
          <div className={styles.content}>
            <h3 className={styles.heading}>Welcome to TPA</h3>
            <form className={styles.formContainer}>
              <input
                type="text"
                id="code"
                placeholder="Enter team code"
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
