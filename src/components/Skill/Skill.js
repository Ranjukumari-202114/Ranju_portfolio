import React from "react";
import mySkills from "../assest/skill.svg";
import "./Skill.css";
import Avatar from "@mui/material/Avatar";
import { useInView } from "react-intersection-observer";
import Tooltip from "@mui/material/Tooltip";

const Skill = () => {
  const { ref: myRef, inView: isMyElementInView } = useInView();
  return (
    <div className="container" id="Skills">
      <div className="skill_main_content" ref={myRef}>
        <div className={`Skill_image ${isMyElementInView ?"i-am-visible":'left-element'}`}  >
          <h1>Skills</h1>
          <img src={mySkills} alt="myskills" />
        </div>
        <div className= {`Skill_known ${
            isMyElementInView ? "i-am-visible" : "right-element"
          }`}>
          <div className="language_known">
            <h1>Language Known</h1>
            <div className="language_logo">
              <Tooltip title="javascript" placement="top">
                <Avatar
                  className={` ${
                    isMyElementInView ? "me_visible_logo1" : "logohide"
                  }`}
                  variant="rounded"
                  sx={{ bgcolor: "#f7df1e", width: 60, height: 60 }}
                >
                  <svg
                    height="30"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fafafa"
                      d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                    />
                  </svg>
                </Avatar>
              </Tooltip>
              <Tooltip title="Python" placement="top">
                <Avatar
                  className={` ${
                    isMyElementInView ? "me_visible_logo2" : "logohide"
                  }`}
                  variant="rounded"
                  sx={{ bgcolor: "#3776ab", width: 60, height: 60 }}
                >
                  <svg
                    height="30"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
                      fill="#fafafa"
                    />
                  </svg>
                </Avatar>
              </Tooltip>
              <Tooltip title="C++" placement="top">
                <Avatar
                  className={` ${
                    isMyElementInView ? "me_visible_logo3" : "logohide"
                  }`}
                  variant="rounded"
                  sx={{ bgcolor: "#00599c", width: 60, height: 60 }}
                >
                  <svg
                    height="30"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fafafa"
                      d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"
                    />
                  </svg>
                </Avatar>
              </Tooltip>
              <Tooltip title="HTML" placement="top">
                <Avatar
                  className={` ${
                    isMyElementInView ? "me_visible_logo4" : "logohide"
                  }`}
                  variant="rounded"
                  sx={{ bgcolor: "#e34f26", width: 60, height: 60 }}
                >
                  <svg
                    height="30"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fafafa"
                      d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                    />
                  </svg>
                </Avatar>
              </Tooltip>

            </div>

            <div className="frontend">
              <h1>Frontend</h1>
              <div
                className={`language_logo ${
                  isMyElementInView ? "me_visible_logo2" : "sklimg"
                }`}
              >
                <Tooltip title="React.js" placement="top">
                  <Avatar
                    className={` ${
                      isMyElementInView ? "me_visible_logo1" : "logohide"
                    }`}
                    variant="rounded"
                    sx={{ bgcolor: "#61dafb", width: 60, height: 60 }}
                  >
                    <svg
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fafafa"
                        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                      />
                    </svg>
                  </Avatar>
                </Tooltip>
                <Tooltip title="CSS" placement="top">
                <Avatar
                  className={` ${
                    isMyElementInView ? "me_visible_logo5" : "logohide"
                  }`}
                  variant="rounded"
                  sx={{ bgcolor: "#1572b6", width: 60, height: 60 }}
                >
                  <svg
                    height="30"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fafafa"
                      d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                    />
                  </svg>
                </Avatar>
              </Tooltip>
                <Tooltip title="Vercel" placement="top">
                  <Avatar
                    className={` ${
                      isMyElementInView ? "me_visible_logo2" : "logohide"
                    }`}
                    variant="rounded"
                    sx={{ bgcolor: "#000000", width: 60, height: 60 }}
                  >
                    <svg
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fafafa"
                        d="M24 22.525H0l12-21.05 12 21.05z"
                      />
                    </svg>
                  </Avatar>
                </Tooltip>
                <Tooltip title="Material UI" placement="top">
                  <Avatar
                    className={` ${
                      isMyElementInView ? "me_visible_logo3" : "logohide"
                    }`}
                    variant="rounded"
                    sx={{ bgcolor: "#0081cb", width: 60, height: 60 }}
                  >
                    <svg
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fafafa"
                        d="M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z"
                      />
                    </svg>
                  </Avatar>
                </Tooltip>
                
                <Tooltip title="Netlify" placement="top">
                  <Avatar
                    className={` ${
                      isMyElementInView ? "me_visible_logo5" : "logohide"
                    }`}
                    variant="rounded"
                    sx={{ bgcolor: "#02c7b7", width: 60, height: 60 }}
                  >
                    <svg
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fafafa"
                        d="M17.3877 8.3286l-.0088-.0037c-.005-.002-.01-.0038-.0144-.0082a.0689.0689 0 0 1-.0176-.0582l.4839-2.9581 2.269 2.2696L17.74 8.574a.052.052 0 0 1-.0206.0037H17.71a.0647.0647 0 0 1-.0126-.0106 1.074 1.074 0 0 0-.3097-.2385zm3.291-.1802l2.4262 2.426c.5039.5045.7561.7562.8481 1.0479.0138.0431.025.0863.0338.1308l-5.798-2.4555a.4557.4557 0 0 0-.0093-.0038c-.0232-.0094-.0501-.02-.0501-.0439 0-.0237.0275-.035.0507-.0444l.0075-.0031zm3.2092 4.3833c-.1252.2354-.3693.4795-.7824.8932l-2.7353 2.7347-3.5377-.7367-.0188-.0038c-.0313-.005-.0645-.0107-.0645-.0388a1.0678 1.0678 0 0 0-.41-.7467c-.0144-.0144-.0106-.037-.0063-.0576 0-.003 0-.0063.0013-.0088l.6654-4.0848.0025-.0138c.0038-.0313.0094-.0676.0376-.0676a1.0829 1.0829 0 0 0 .726-.4162c.0056-.0063.0094-.0131.017-.0169.02-.0094.0437 0 .0644.0088l6.0402 2.555zm-4.1467 4.257l-4.498 4.4979.77-4.732.0012-.0063a.083.083 0 0 1 .0038-.0182c.0063-.015.0226-.0213.0382-.0275l.0075-.0031a1.158 1.158 0 0 0 .435-.3236c.015-.0176.0332-.0345.0564-.0376a.0563.0563 0 0 1 .0181 0l3.1672.651zm-5.45 5.4499l-.507.507-5.6052-8.1007a.2654.2654 0 0 0-.0062-.0088c-.0088-.012-.0182-.0238-.0163-.0376.0006-.01.0069-.0188.0138-.0263l.0062-.0081c.017-.025.0313-.05.047-.077l.0125-.0219.0019-.0019c.0087-.015.0169-.0294.0319-.0376.0131-.0063.0313-.0038.0457-.0006l6.2098 1.2807a.1027.1027 0 0 1 .0476.0206c.008.0081.01.017.0119.027a1.0998 1.0998 0 0 0 .6434.7354c.0175.0088.01.0282.002.0488a.149.149 0 0 0-.0095.0282c-.0782.4757-.7492 4.568-.9295 5.6728zm-1.059 1.0584c-.3737.37-.594.5659-.8432.6447a1.2519 1.2519 0 0 1-.7549 0c-.2916-.0926-.5439-.3442-1.0478-.8487l-5.629-5.629 1.4704-2.2802a.0938.0938 0 0 1 .025-.0294c.0157-.0113.0382-.0063.057 0a1.5235 1.5235 0 0 0 1.0253-.052c.0169-.0063.0338-.0106.0469.0013a.119.119 0 0 1 .0175.02l5.6327 8.174zm-8.8175-6.3756L3.1234 15.63l2.55-1.0879a.0526.0526 0 0 1 .0207-.0044c.0213 0 .0338.0213.045.0407a1.8214 1.8214 0 0 0 .0814.1152l.0082.01c.0075.0106.0025.0213-.005.0313l-1.4084 2.1864zm-1.8628-1.8628L.9183 13.4249c-.278-.2779-.4795-.4794-.6197-.6528l4.9674 1.0303a.5258.5258 0 0 0 .0187.003c.0307.005.0645.0107.0645.0395 0 .0313-.037.0457-.0682.0576l-.0144.0063zM.0132 11.932a1.2519 1.2519 0 0 1 .0563-.3098c.0927-.2917.3443-.5434.8488-1.0478l2.0906-2.0906a1361.7196 1361.7196 0 0 0 2.8955 4.1855c.017.0226.0357.0476.0163.0664-.0914.1008-.1828.211-.2473.3305a.1001.1001 0 0 1-.0313.0388c-.008.005-.0169.003-.0262.0013h-.0013l-5.6014-1.175zm3.5553-4.0078l2.811-2.811c.2641.1157 1.2256.522 2.0856.885.651.2754 1.2443.5258 1.4308.6071.0188.0076.0357.015.0439.0338.005.0113.0025.0257 0 .0376a1.2537 1.2537 0 0 0 .3273 1.1442c.0188.0188 0 .0457-.0163.0689l-.0088.0131-2.8542 4.421c-.0075.0124-.0144.023-.0269.0312-.015.0094-.0363.005-.0538.0006a1.4234 1.4234 0 0 0-.34-.0463c-.1026 0-.214.0188-.3266.0395h-.0007c-.0125.0019-.0238.0044-.0338-.0031a.1314.1314 0 0 1-.0281-.032zm3.3787-3.3788l3.6391-3.639c.504-.5039.7562-.7561 1.0478-.8481a1.2519 1.2519 0 0 1 .755 0c.2916.092.5438.3442 1.0477.848l.7887.7888-2.5882 4.0084a.097.097 0 0 1-.0257.03c-.0156.0107-.0375.0063-.0563 0a1.3126 1.3126 0 0 0-1.2018.2316c-.0169.0176-.042.0075-.0632-.0019-.338-.147-2.967-1.258-3.343-1.4177zm7.8278-2.3009l2.3898 2.3898-.5758 3.5665v.0094a.0845.0845 0 0 1-.005.0238c-.0063.0125-.0188.015-.0313.0188a1.1454 1.1454 0 0 0-.343.1709.0964.0964 0 0 0-.0125.0106c-.007.0075-.0138.0144-.025.0157a.0714.0714 0 0 1-.027-.0044l-3.6416-1.5473-.007-.0031c-.0231-.0094-.0506-.0207-.0506-.0445a1.3758 1.3758 0 0 0-.194-.5727c-.0176-.0288-.037-.0588-.022-.0883zm-2.461 5.3868l3.4138 1.446c.0188.0087.0394.0168.0476.0362a.0663.0663 0 0 1 0 .0357.848.848 0 0 0-.0188.1646v.0958c0 .0238-.0244.0338-.047.0432l-.0069.0025c-.5408.231-7.5924 3.238-7.603 3.238-.0107 0-.022 0-.0326-.0107-.0188-.0188 0-.0451.0169-.0689a.4757.4757 0 0 0 .0087-.0125l2.8054-4.344.005-.0074c.0163-.0263.035-.0557.0651-.0557l.0282.0043c.0638.0088.1202.017.1771.017.4257 0 .82-.2072 1.0579-.5615a.1001.1001 0 0 1 .0212-.025c.017-.0126.042-.0063.0614.0024zm-3.9095 5.7492l7.6863-3.278s.0113 0 .022.0106c.0419.042.0776.0701.112.0964l.0169.0107c.0156.0088.0313.0188.0325.035 0 .0063 0 .01-.0013.0157l-.6584 4.0447-.0025.0163c-.0044.0313-.0088.067-.0382.067a1.0822 1.0822 0 0 0-.8594.5301l-.0031.005c-.0088.0144-.017.0282-.0313.0357-.0131.0063-.03.0038-.0438.0006L8.5064 13.706c-.0063-.0013-.0952-.3249-.102-.3255z"
                      />
                    </svg>
                  </Avatar>
                </Tooltip>
                <Tooltip title="Bootstrap" placement="top">
                  <Avatar
                    className={` ${
                      isMyElementInView ? "me_visible_logo6" : "logohide"
                    }`}
                    variant="rounded"
                    sx={{ bgcolor: "#7952b3", width: 60, height: 60 }}
                  >
                    <svg
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fafafa"
                        d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"
                      />
                    </svg>
                  </Avatar>
                </Tooltip>
              </div>
            </div>

            {/*  */}

            <div className="frontend">
              <h1>Backend, Database, Cloud</h1>
              <div
                className={`language_logo ${
                  isMyElementInView ? "me_visible_logo3" : "sklimg"
                }`}
              >
                
                <Tooltip title="Node.js" placement="top">
                  <Avatar
                    className={` ${
                      isMyElementInView ? "me_visible_logo2" : "logohide"
                    }`}
                    variant="rounded"
                    sx={{ bgcolor: "#55a445", width: 60, height: 60 }}
                  >
                    <svg
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fafafa"
                        d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
                      />
                    </svg>
                  </Avatar>
                </Tooltip>
                <Tooltip title="My SQL" placement="top">
                  <Avatar
                    className={` ${
                      isMyElementInView ? "me_visible_logo3" : "logohide"
                    }`}
                    variant="rounded"
                    sx={{ bgcolor: "#00758f", width: 60, height: 60 }}
                  >
                    <svg
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fafafa"
                        d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"
                      />
                    </svg>
                  </Avatar>
                </Tooltip>
                <Tooltip title="Firebase" placement="top">
                  <Avatar
                    className={` ${
                      isMyElementInView ? "me_visible_logo4" : "logohide"
                    }`}
                    variant="rounded"
                    sx={{ bgcolor: "#F0E68C", width: 60, height: 60 }}
                  >
                    <svg
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#FFA611"
                        d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"
                      />
                    </svg>
                  </Avatar>
                </Tooltip>
                <Tooltip title="Heroku" placement="top">
                  <Avatar
                    className={` ${
                      isMyElementInView ? "me_visible_logo5" : "logohide"
                    }`}
                    variant="rounded"
                    sx={{ bgcolor: "#430098", width: 60, height: 60 }}
                  >
                    <svg
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fafafa"
                        d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"
                      />
                    </svg>
                  </Avatar>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;