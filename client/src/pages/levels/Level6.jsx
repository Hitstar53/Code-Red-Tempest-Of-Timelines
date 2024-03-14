/* eslint-disable react/prop-types */
import { useState } from "react";
import Layout from "./Layout";
import { ReactTerminal } from "react-terminal";

import background from "../../assets/images/area51.jpeg";
import styles from "./Level6.module.css";

// Variables declearation -
const noPermission = `----------`;
const readPermission = `-r--------`;
const dirPermission = `d---------`;

const initialFolderStructure = [
  {
    driveName: "D",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "file.txt",
        type: "file",
        permission: noPermission,
        content: "This is a file.",
      },
      {
        filename: "unknown.txt",
        type: "file",
        permission: readPermission,
        content: "This is another file.",
      },
    ],
  },
  {
    driveName: "E",
    type: "folder",
    permission: dirPermission,
    files: [
      {
        filename: "gdsc.txt",
        type: "file",
        permission: noPermission,
        content: "This is a GDSC file.",
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
  const [files, setFiles] = useState(initialFolderStructure);
  const [currentFolder, setCurrentFolder] = useState("");

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
      >
        <div className={styles.instructionBox}>
          {/* <p className={styles.instruction}>Hello World</p> */}
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
      </Layout>
    </div>
  );
};

export default Level6;
