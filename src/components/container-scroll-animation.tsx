"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
export const ContainerScroll = ({
  users,
  titleComponent,
}: {
  users: {
    name: string;
    designation: string;
    image: string;
    badge?: string;
  }[];
  titleComponent: string | React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[80rem] flex items-center justify-center relative p-20"
      ref={containerRef}
    >
      <div
        className="py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          users={users}
        />
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  users,
}: {
  rotate: any;
  scale: any;
  translate: any;
  users: {
    name: string;
    designation: string;
    image: string;
    badge?: string;
  }[];
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 overflow-hidden p-4">
        {users.map((user, idx: number) => (
          <motion.div
            key={`user-${idx}`}
            className="bg-white rounded-md cursor-pointer relative"
            style={{ translateY: translate }}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
              {user.badge}
            </div>
            <img
              src={user.image}
              className="rounded-tr-md rounded-tl-md text-sm "
              alt="thumbnail"
            />
            <div className="p-4">
              <h1 className="font-semibold text-sm ">{user.name}</h1>
              <h2 className=" text-gray-500 text-xs ">{user.designation}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const users = [

    // {
    //     title:"Edpuzzle",
    //     link:"https://edpuzzle.com",
    //     thumbnail: ""
    //   },
    //   {
    //     title:"Quizlet",
    //     link:"https://quizlet.com",
    //     thumbnail:
    //     "https://th.bing.com/th/id/OIP.lQe4nWY1dlNUCUpHxxYIhAHaEK?w=315&h=180&c=7&r=0&o=5&pid=1.7"
    //   },
    //   {
    //     title:"Quizizz",
    //     link: "https://quizizz.com",
    //     thumbnail:
    //     "https://th.bing.com/th/id/OIP.wTBFhtGjY9X0j280UMOdggHaEK?w=319&h=180&c=7&r=0&o=5&pid=1.7"
    //   },
    //   {
    //     title:"Kahoot",
    //     link:"https://kahoot.com",
    //     thumbnail:
    //     "https://1000marcas.net/wp-content/uploads/2022/04/Kahoot-Logo.jpg"
    //   },
  {
    name: "Edpuzzle",
    designation: "Video learning platform",
    image: "data:image/jpeg;base64,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",
    badge: "Click!",
  },
  {
    name: "Quizlet",
    designation: "Flashcards and stuff 🤔",
    image: "https://th.bing.com/th/id/OIP.lQe4nWY1dlNUCUpHxxYIhAHaEK?w=315&h=180&c=7&r=0&o=5&pid=1.7",
    badge: "Click!",
  },
  {
    name: "Quizizz",
    designation: "Almost like quizlet + kahoot idk",
    image: "https://th.bing.com/th/id/OIP.wTBFhtGjY9X0j280UMOdggHaEK?w=319&h=180&c=7&r=0&o=5&pid=1.7",
    badge: "Click!",
  },
  {
    name: "Kahoot",
    designation: "Love this",
    image: "https://1000marcas.net/wp-content/uploads/2022/04/Kahoot-Logo.jpg",
    badge: "Click!",
  },
//   {
//     name: "Robert Johnson",
//     designation: "Data Scientist, DataWorks",
//     image: "https://picsum.photos/id/14/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Emily Davis",
//     designation: "UX Designer, DesignHub",
//     image: "https://picsum.photos/id/15/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Michael Miller",
//     designation: "CTO, FutureTech",
//     image: "https://picsum.photos/id/16/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Sarah Brown",
//     designation: "CEO, StartUp",
//     image: "https://picsum.photos/id/17/300/300",
//   },
//   {
//     name: "James Wilson",
//     designation: "DevOps Engineer, CloudNet",
//     image: "https://picsum.photos/id/18/300/300",
//     badge: "Something",
//   },
//   {
//     name: "Patricia Moore",
//     designation: "Marketing Manager, MarketGrowth",
//     image: "https://picsum.photos/id/19/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Richard Taylor",
//     designation: "Frontend Developer, WebSolutions",
//     image: "https://picsum.photos/id/20/300/300",
//   },
//   {
//     name: "Linda Anderson",
//     designation: "Backend Developer, ServerSecure",
//     image: "https://picsum.photos/id/21/300/300",
//   },
//   {
//     name: "William Thomas",
//     designation: "Full Stack Developer, FullStack",
//     image: "https://picsum.photos/id/22/300/300",
//     badge: "Badger",
//   },
//   {
//     name: "Elizabeth Jackson",
//     designation: "Project Manager, ProManage",
//     image: "https://picsum.photos/id/23/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "David White",
//     designation: "Database Administrator, DataSafe",
//     image: "https://picsum.photos/id/24/300/300",
//     badge: "Advocate",
//   },
//   {
//     name: "Jennifer Harris",
//     designation: "Network Engineer, NetConnect",
//     image: "https://picsum.photos/id/25/300/300",
//   },
//   {
//     name: "Charles Clark",
//     designation: "Security Analyst, SecureIT",
//     image: "https://picsum.photos/id/26/300/300",
//   },
//   {
//     name: "Susan Lewis",
//     designation: "Systems Analyst, SysAnalyse",
//     image: "https://picsum.photos/id/27/300/300",
//   },
//   {
//     name: "Joseph Young",
//     designation: "Mobile Developer, AppDev",
//     image: "https://picsum.photos/id/28/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Margaret Hall",
//     designation: "Quality Assurance, BugFree",
//     image: "https://picsum.photos/id/29/300/300",
//     badge: "Developer",
//   },
];
