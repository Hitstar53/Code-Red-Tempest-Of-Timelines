/* eslint-disable react/prop-types */
import Layout from "./Layout";
import { ReactTerminal } from "react-terminal";

import background from "../../assets/images/hacking-background.webp";
import styles from "./Level8_3.module.css";
import { useEffect, useState } from "react";

const CommandOutput = ({
  title = undefined,
  description = undefined,
  newLine = true,
  color = "yellow",
}) => (
  <span>
    {title && <span style={{ color: color }}>{title}</span>}
    {description && <span> - {description}</span>}
    {newLine && <br />}
  </span>
);

const listOfCommands = [
  /netstat -anp|netstat -ano/i,
  /netstat --verbose|netstat \//i,
  /netstat -s|netstat -s -p icmpv6/i,
];

const questions = [
  "Now that we are in the human life database server, we need to check all the active TCP and UDP ports on the system with their IP addresses and process IDs and port numbers expressed numerically. Please enter a command to check all ports.",
  "You have forgotten netstat documentation and need to find a command. Enter a command which lets you see all the netstat commands and their description.",
  "We need to check the statistics of the protocol ICMPv6. Enter a command which lets us do that",
];

const Level8_3 = () => {
  const [counter, setCounter] = useState(0);
  const [command, setCommand] = useState("");

  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key === "Enter") {
        if (command.match(listOfCommands[counter])) {
          setCounter((counter) => counter + 1);
          console.log("Counter", counter);
        }

        if (counter >= 3) {
          console.log("Move to next level");
          return;
        }
      }
    }
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [counter, command]);

  const commands = {
    netstat: (cmd) => {
      const currentCommand = String(cmd).trim();
      if (currentCommand.match(/-anp|-ano/i)) {
        setCommand(`netstat ${currentCommand}`);
        return (
          <div>
            <h6>Active Internet connections (servers and established)</h6>
            <h6>
              Proto Recv-Q Send-Q Local Address Foreign Address State Timer
            </h6>
            <h6>tcp 0 0 127.0.0.53:53 0.0.0.0:* LISTEN off (0.00/0/0)</h6>
            <h6>
              tcp 0 0 172.29.202.91:39932 185.125.188.55:443 ESTABLISHED
              keepalive (14.21/0/0)
            </h6>
          </div>
        );
      } else if (currentCommand.match(/--verbose|\/|/i)) {
        setCommand(`netstat ${currentCommand}`);
        return (
          <div>
            <h6>Active UNIX domain sockets (w/o servers)</h6>
            <h6>Proto RefCnt Flags Type State I-Node Path</h6>
            <h6>
              unix 2 [ ] DGRAM CONNECTED 132 /run/user/1000/systemd/notify
              <br />
              unix 3 [ ] DGRAM CONNECTED 29 /run/user/1000/systemd/notify
              <br />
              unix 4 [ ] DGRAM CONNECTED 45 /run/user/1000/systemd/notify
            </h6>
          </div>
        );
      } else if (
        currentCommand.match(/-s|-s -p icmpv6/i) ||
        currentCommand.match(/-s -p icmpv6/i)
      ) {
        setCommand(`netstat ${currentCommand}`);
        return (
          <div>
            <h6>
              Ip:
              <br />
              Forwarding: 2<br />
              423 total packets received
              <br />
              0 forwarded
              <br />
              0 incoming packets discarded
              <br />
              369 incoming packets delivered
              <br />
              302 requests sent out
              <br />
              Icmp:
              <br />
              0 ICMP messages received
              <br />
              0 input ICMP message failed
              <br />
              ICMP input histogram:
              <br />
              0 ICMP messages sent
              <br />
              0 ICMP messages failed
              <br />
              ICMP output histogram:
              <br />
              Tcp:
              <br />
              9 active connection openings
              <br />
              0 passive connection openings
              <br />
              0 failed connection attempts
              <br />
              1 connection resets received
              <br />
              0 connections established
              <br />
              339 segments received
              <br />
              285 segments sent out
              <br />
              0 segments retransmitted
              <br />
              0 bad segments received
              <br />
              3 resets sent
              <br />
              Udp:
              <br />
              16 packets received
              <br />
              0 packets to unknown port received
              <br />
              0 packet receive errors
              <br />
              19 packets sent
              <br />
              0 receive buffer errors
              <br />
              0 send buffer errors
              <br />
              IgnoredMulti: 14
              <br />
            </h6>
          </div>
        );
      }
    },
    help: (
      <>
        <CommandOutput
          title="netstat"
          description="monitor network connection"
        />
      </>
    ),
  };

  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Layout
        level={8}
        name="Team Gods"
        time="00:00:00"
        score="69420"
        backgroundPicURL={background}
        colors={{
          textColor: "white",
          boxBackgroundColor: "#04364A",
          leaderboardHeaderColor: "white",
          iconColor: "white",
          leaderboardPositionColor: "#CCD3CA",
          hintTextColor: "white",
          leaderboardColor: "#04364A",
          leaderboardTextColor: "black",
        }}
        hintText="A bunch of random misleading sentences which make no sense? Worry not, because all you have to do is to gather the underlying details from each sentence and construct a filepath. Use terminal commands to help you reach the final destination."
      >
        <div className={styles.instructionBox}>
          <p className={styles.instruction}>{questions[counter]}</p>
        </div>
        <div className={styles.terminal}>
          <ReactTerminal
            welcomeMessage={
              <>
                <p>Welcome to the Team Gods Terminal. Type help</p>
                <br />
              </>
            }
            commands={commands}
            prompt={` >`}
            themes={{
              myTheme: {
                themeBGColor: "#282c34",
                themeToolbarColor: "#323e4a",
                themePromptColor: "#fff",
                themeColor: "#FFFEFC",
              },
            }}
            theme="myTheme"
            errorMessage=<CommandOutput
              title="Error"
              description="Command not found!"
              color="red"
            />
          />
        </div>
      </Layout>
    </div>
  );
};

export default Level8_3;
