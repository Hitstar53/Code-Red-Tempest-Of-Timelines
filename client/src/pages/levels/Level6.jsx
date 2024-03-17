/* eslint-disable react/prop-types */

/**
TODO:
1. Create a text box to paste the file content and print current instruction above the terminal.
2. Create a object/map of questions and answers
3. Check currently typed command with current question answer,
  if both are same, then increment the counter variable.
4. Declare a counter variable outside the function and increment it whenever the answer is correct.
5. If the counter is equal to the length of the questions, turn on the submit button.
 */

import { useState,useEffect } from "react";
import Layout from "./Layout";
import { ReactTerminal } from "react-terminal";
import { useNavigate } from 'react-router-dom'
import background from "../../assets/images/area51.jpeg";
import styles from "./Level6.module.css";
import { getCurrentLevel,getScore,Level6aSol } from "../../api/General";

// Variables declearation -
const noPermission = `----------`;
const readPermission = `-r--------`;
const dirPermission = `d---------`;

const initialFolderStructure = [
  {
    driveName: "A",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "B",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "C",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "D",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "E",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "F",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "G",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "H",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "I",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "J",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "QW5kd3luIGhlcmUsIEhhaGEgZ29vZCBvbmUgc28gZmFyLCBidXQgeW91IHdvbnQgY2F0Y2ggbWUK",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "K",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "L",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "M",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "N",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "O",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "P",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "Q",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "R",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "S",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "T",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "U",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "V",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "W",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "X",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "Y",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
  {
    driveName: "Z",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is the wrong file lol",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is the wrong file lol",
      },
    ],
  },
];

const CommandOutput = ({
  title,
  description = undefined,
  newLine = true,
  color = "yellow",
}) => (
  <span>
    <span style={{ color: color }}>{title}</span>
    {description && <span> - {description}</span>}
    {newLine && <br />}
  </span>
);

const DisplayFiles = ({ currentFolder }) => {
  const path = initialFolderStructure.find(
    (folder) => folder.driveName === currentFolder
  );

  // root directory
  if (path === undefined) {
    return (
      <div>
        {initialFolderStructure.map((folder, index) => (
          <div key={index}>
            <span>{folder.driveName + "/"}</span>
            <span>&nbsp;{folder.permission}</span>
            <br />
          </div>
        ))}
      </div>
    );
  }

  console.log(path.files);

  return (
    <div>
      {path.files.map((file, index) => (
        <div key={index}>
          <span>{file.filename}</span>
          <span>&nbsp;{file.permission}</span>
          <br />
        </div>
      ))}
    </div>
  );
};

const Level6 = () => {
  const navigate = useNavigate()
  const [files, setFiles] = useState(initialFolderStructure);
  const [currentFolder, setCurrentFolder] = useState("");
  const [search, setSearch] = useState('')
  const [score,setScore] = useState(0)

  useEffect(() => {
    getCurrentLevel()
    getScore().then((res) => {setScore(res)})
  }, [])
  const handleCheck = async () => {

    if (await Level6aSol(search)) {
      navigate('/levels/prelevel6-2')
    }
    else{
      setSearch('')
    }
  }

  const commands = {
    ls: () => {
      return <DisplayFiles currentFolder={currentFolder} />;
    },
    chmod: (cmd) => {
      let [number, filename] = cmd.split(" ");
      number = parseInt(number);
      const fileFound = files
        .find((dir) => dir.driveName === currentFolder)
        .files.find((file) => file.filename === filename);

      if (isNaN(number) || !fileFound) {
        return "Invalid read permission number or file not found.";
      }

      fileFound.permission = readPermission;
      setFiles((files) => [
        ...files.filter((file) => file.filename !== fileFound.filename),
        fileFound,
      ]);
    },
    cat: (cmd) => {
      const filename = cmd;
      const fileFound = files
        .find((dir) => dir.driveName === currentFolder)
        ?.files.find((file) => file.filename === filename);
      if (!fileFound) {
        return (
          <CommandOutput
            title="FileNotFound"
            description={`${filename} not found!`}
            color="red"
          />
        );
      }

      const validPermission = fileFound.permission[1] === "r";
      if (!validPermission) {
        return (
          <CommandOutput
            title="PermissionDenied"
            description="You don't have read permission on this file"
            color="red"
          />
        );
      }

      return fileFound.content;
    },
    cd: (cmd) => {
      let folder = cmd;
      if (folder.includes("..")) {
        setCurrentFolder("");
        return (
          <CommandOutput
            title="Success"
            description="Moved to root directory"
          />
        );
      }

      folder = folder.split("")[0].toUpperCase();
      const folderFound = files.find((file) => file.driveName === folder);
      if (currentFolder !== "" || !folderFound) {
        return (
          <CommandOutput
            title="FolderNotFound"
            description={`${folder}/ not found!`}
            color="red"
          />
        );
      }

      setCurrentFolder(folder);
      return (
        <CommandOutput
          title="Success"
          description={`Moved to ${folder}/ directory`}
        />
      );
    },
    pwd: () => {
      return (
        <CommandOutput
          title="CurrentDirectory"
          description={currentFolder === "" ? "/" : `${currentFolder}/`}
        />
      );
    },
    help: (
      <>
        <CommandOutput title="ls" description="list files." />
        <CommandOutput title="cd" description="change directory." />
        <CommandOutput title="cat" description="display file content." />
        <CommandOutput
          title="chmod"
          description="change file permissions (use numbers)."
        />
        <CommandOutput title="pwd" description="print working directory." />
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
        level={6}
        name= {localStorage.getItem("team")? JSON.parse(localStorage.getItem("team")).name : "Team Name"}
        time="00:00:00"
        score= {score}
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
        <div className={styles.outerContainer}>
          <div className={styles.terminal}>
            <ReactTerminal
              welcomeMessage={
                <>
                  <p>Welcome to the Team Gods Terminal. Type help</p>
                  <br />
                </>
              }
              commands={commands}
              prompt={`${currentFolder}/ >`}
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
          <div className={styles.inputContainer}>
            <input className={styles.level6input} value={search} type="text" placeholder="Enter Name" onChange={(e) => setSearch(e.target.value)}/>
            <button className={styles.level6btn} type="submit" onClick={handleCheck}>
              Login
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Level6;
