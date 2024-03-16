import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const LoginPage = () => {
  const [teamCode, setTeamCode] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(function () {
    function handleKeyPress(e) {
      if (e.key === "Enter") {
        handleLogin(teamCode, password);
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  function handleLogin(teamCode, password) {
    if (!teamCode || !password) return;
    console.log({ teamCode, password });

    // login logic here

    setTeamCode("");
    setPassword("");
    navigate("/levels/prelevel1");
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.hackerImage}></div>
          <div className={styles.content}>
            <h3 className={styles.heading}>Welcome to TPA_</h3>
            <form className={styles.formContainer} onSubmit={handleLogin}>
              <div className={styles.formGroup}>
                <span>{">"}</span>
                <input
                  type="text"
                  id="code"
                  placeholder="Enter team code"
                  value={teamCode || ""}
                  required
                  onChange={(e) => setTeamCode(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <span>{">"}</span>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  value={password || ""}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p>Press Enter to continue...</p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
