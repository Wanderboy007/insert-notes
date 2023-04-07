import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import bgpic from "../public/bgpic.png";
import styles from "@/styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Link from "next/dist/client/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const { user, error, isLoading } = useUser();
  return (
    <>
      <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="h-screen overflow-hidden">
        <nav className="flex gap-20 justify-center mb-5 py-5 bg-teal-500 rounded-b-lg">
          <Link href="http://localhost:3000" className="text-xl cursor-pointer">
            Home
          </Link>
          <Link href="http://localhost:3000" className="text-xl cursor-pointer">
            About us
          </Link>
          {user ? (
            <div className="flex gap-20">
              <div className="text-xl">welcome,{user.name}</div>
              <Link
                className="text-xl cursor-pointer"
                href="http://localhost:3000/api/auth/logout"
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link
              className="text-xl cursor-pointer"
              href="http://localhost:3000/api/auth/login"
            >
              Login
            </Link>
          )}
        </nav>
        {!user ? loggedin() : Notloggedin()}
      </div>
    </>
  );
}

const loggedin = () => {
  return (
    <>
      {/* hero section */}
      <div className="flex justify-center m-20 gap-3 ">
        <div className="flex flex-col">
          <h1 className="text-5xl my-20">Insert Learning</h1>
          <p className="m-3 text-slate-700 ">
            Insert Note is a website designed for nursing students to make
            notes, keep track of assignments and access study materials. Its
            user-friendly interface and mobile accessibility make it an ideal
            platform for studying on the go.
          </p>
          <p className="m-3 text-slate-700 ">
            Insert Note is a comprehensive website that offers nursing students
            a range of study tools to help them stay on top of their coursework.
            Its note-making tool allows students to organize their notes by
            class and topic, while flashcards and quizzes help them review and
            retain information.
          </p>
          <Link
            className=" bg-blue-500 my-10 p-2 w-fit text-3xl rounded-md"
            href="http://localhost:3000/api/auth/login"
          >
            Login
          </Link>
        </div>
        <div className="text-center">
          <Image
            className="relative object-cover"
            src={bgpic}
            height={1500}
            width={1500}
            alt="no pic"
          ></Image>
        </div>
      </div>
    </>
  );
};

const Notloggedin = () => {
  const { user, error, isLoading } = useUser();
  const [student, setStudent] = useState("");
  const [batch, setBatch] = useState("");
  const [year, setYear] = useState("");
  const [hidepass, setHidepass] = useState("");
  const [teacher, setTeacher] = useState(false);
  console.log(batch);
  console.log(year);
  console.log(teacher);
  console.log("s" + student);

  if (user) {
    console.log("");
    const handleSubmit = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/getuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            batch,
            year,
            teacher,
          }),
        });
        const res2 = await res.json();
        if (res2.error) {
          console.log(res2.json());
        } else {
          console.log(res2.error);
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <>
        <form onSubmit={(e) => handleSubmit()}>
          <div className="flex gap-52 m-50 justify-center">
            <div className="m-5">
              <h1 className="text-5xl my-5 ">Batch</h1>
              <div className="flex flex-col gap-2 items-center">
                <select
                  onChange={(e) => {
                    const batch = e.target.value;
                    setBatch(batch);
                  }}
                >
                  <option>--Choose your batch--</option>
                  <option>B1</option>
                  <option>B2</option>
                  <option>B3</option>
                </select>
              </div>
            </div>
            <div className="m-5">
              <h1 className="text-5xl my-5 ">Year</h1>
              <select
                onChange={(e) => {
                  const year = e.target.value;
                  setYear(year);
                }}
              >
                <option>--Choose your Year--</option>
                <option>1 Year</option>
                <option>2 Year</option>
                <option>3 Year</option>
              </select>
            </div>
            <div className="m-5">
              <h1 className="text-5xl my-5 ">Login As</h1>

              <select
                onChange={(e) => {
                  const teach = e.target.value;
                  setStudent(teach);
                }}
              >
                <option>--Student--</option>
                <option value="student">Student</option>
                <option value="teacher">Faculty</option>
              </select>
              {student == "teacher" ? (
                <input
                  className="p-2 m-2 border-2 border-slate-600 rounded-sm"
                  type="password"
                  placeholder="Faculty Password"
                  onChange={(e) => {
                    if (e.target.value == "hello") {
                      setTeacher(true);
                    } else {
                      setTeacher(false);
                    }
                  }}
                />
              ) : (
                ""
              )}
            </div>
          </div>

          {/* <Link className="flex justify-center  " href="#"> */}
          <button
            type="submit"
            onSubmit={(e) => handleSubmit()}
            className="flex items-center justify-center gap-3"
          >
            <div className="text-4xl">Next</div>
            <BsFillArrowRightSquareFill className="text-4xl" />
          </button>
          {/* </Link> */}
        </form>
      </>
    );
  }
};
