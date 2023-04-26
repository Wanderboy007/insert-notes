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
  const[shownavp,setShownavp] = useState(false) 
  console.log(shownavp)
 
  return (
    <>
      <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> 

 

  {shownavp?<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div  className="flex items-center">
        
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Insert Notes</span>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" onClick={()=>setShownavp(!shownavp)}></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        
        {user ? (
            <div className="flex gap-20">
              <div className="text-xl">welcome,{user.name}</div>
              <li>
          <Link href="/api/auth/logout" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</Link>
        </li>
            </div>
          ) : (
            <li>
          <Link href="/api/auth/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
        </li>
          )}
      </ul>
    </div>
  </div>
</nav>  :<nav className="bg-white border-gray-200 dark:bg-gray-900">
<button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" onClick={()=>setShownavp(!shownavp)}></path></svg>
    </button>
  <ul className="flex flex-col items-center">
  <li>
  <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
        </li>
        <li>
          <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
    {user ? (
            <div className="flex gap-20">
              <div className="text-xl">welcome,{user.name}</div>
              <li>
          <Link href="/api/auth/logout" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</Link>
        </li>
            </div>
          ) : (
            <li>
          <Link href="/api/auth/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
        </li>
          )}
  </ul>
</nav> }
   */}

      
{/* {!user ? loggedin() : Notloggedin()}  */}









      {/* <div className="h-screen overflow-hidden">
        <nav className="flex gap-20 justify-center mb-5 py-5 bg-teal-500 rounded-b-lg">
          <Link href="" className="text-xl cursor-pointer">
            Home
          </Link>
          <Link href="" className="text-xl cursor-pointer">
            About us
          </Link>
          {user ? (
            <div className="flex gap-20">
              <div className="text-xl">welcome,{user.name}</div>
              <Link
                className="text-xl cursor-pointer"
                href="/api/auth/logout"
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link
              className="text-xl cursor-pointer"
              href="/api/auth/login"
            >
              Login
            </Link>
          )}
        </nav>
        {!user ? loggedin() : Notloggedin()}
      </div> 

//navbar ends
 


    </>
  );
}  






// navbar


const loggedin = () => {
  return (
    <>
      {/* hero section */}
      <div className="flex justify-center m-20 gap-3 ">
        <div className="flex flex-col"> 





        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <Image class="h-48 w-full object-cover md:h-full md:w-48"src={bgpic}
            height={1500}
            width={1500}
            alt="no pic"></Image>
    </div>
    <div class="p-8">
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">Insert Learning</h1>
      
    <p className="mb-3 text-gray-500 dark:text-gray-700 ">
            Insert Note is a website designed for nursing students to make
            notes, keep track of assignments and access study materials. Its
            user-friendly interface and mobile accessibility make it an ideal
            platform for studying on the go.
          </p>
          <p className="mb-3 text-gray-500 dark:text-gray-700 ">
            Insert Note is a comprehensive website that offers nursing students
            a range of study tools to help them stay on top of their coursework.
            Its note-making tool allows students to organize their notes by
            class and topic, while flashcards and quizzes help them review and
            retain information.
          </p> 
          <Link
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            href="/api/auth/login"
          >
            Login
          </Link>
    </div>
  </div>
</div>
 






{/* 
        
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">Insert Learning</h1>
          <p className="mb-3 text-gray-500 dark:text-gray-700 ">
            Insert Note is a website designed for nursing students to make
            notes, keep track of assignments and access study materials. Its
            user-friendly interface and mobile accessibility make it an ideal
            platform for studying on the go.
          </p>
          <p className="mb-3 text-gray-500 dark:text-gray-700 ">
            Insert Note is a comprehensive website that offers nursing students
            a range of study tools to help them stay on top of their coursework.
            Its note-making tool allows students to organize their notes by
            class and topic, while flashcards and quizzes help them review and
            retain information.
          </p>
          <Link
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            href="/api/auth/login"
          >
            Login
          </Link>
        </div>
        <div className="text-center">
          <Image
            className=" lg:hidden  md: h-auto max-w-lg rounded-lg  "
            src={bgpic}
            height={1500}
            width={1500}
            alt="no pic"
          ></Image> */}
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
    // console.log("");
    const handleSubmit = async () => {
      try {
        const res = await fetch("/api/getuser", {
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
                      <Link className="flex justify-center" href="/home">
          <div className="text-4xl">Next</div>
            <BsFillArrowRightSquareFill className="text-4xl" />
          </Link>
                    } else {
                      setTeacher(false);
                      <Link className="flex justify-center" href="#">
          <div className="text-4xl">Next</div>
            <BsFillArrowRightSquareFill className="text-4xl" />
          </Link>
                    }
                  }}
                  required
                />
              ) : (
                ""
              )}
            </div>
          </div>

          <button
            type="submit"
            onSubmit={(e) => handleSubmit()}
            className="flex items-center justify-center gap-3"
          >
            
          </button>
          <Link className="flex justify-center" href="/home">
          <div className="text-4xl">Next</div>
            <BsFillArrowRightSquareFill className="text-4xl" />
          </Link>
        </form>
      </>
    );
  }
};
