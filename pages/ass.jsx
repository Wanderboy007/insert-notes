import { useState } from "react";

export default function Ass() {
  const [Que1, setQ1] = useState(false);
  const [Que2, setQ2] = useState(false);
  const [Que3, setQ3] = useState(false);
  const [Que4, setQ4] = useState(false);
  const [Que5, setQ5] = useState(false);

  const [Que6, setQ6] = useState(false);

  const sendDb = {
    1: Que1,
    2: Que2,
    3: Que3,
    4: Que4,
    5: Que5,
  };

  let score = 0;
  for (let i = 1; i <= 5; i++) {
    if (sendDb[i] == true) {
      score++;
    }
  }

  function Submit1() {
    console.log(score);
  }

  return (
    <>
      <h1>Section A : Sociodemographic Characteristics</h1>
      <div>
        <h1>Instructions:-</h1>
        <ul>
          <li>
            Various possible alternative of each question are given in the
            questionnaire
          </li>
          <li>
            Select only one alternative, which is correct and tick mark ( )
            against it
          </li>
          <li>Please do not leave any question unanswered.</li>
        </ul>
      </div>
      <h1 className="text-3xl m-10">
        1.1 Knowledge related to burns and its pathophysiology
      </h1>
      <div className="flex flex-col mx-20">
        <div className="flex flex-col ">
          <h1>What is burn ?</h1>
          <div>
            <input
              type="radio"
              name="q1"
              value="true"
              onChange={() => setQ1(true)}
            />
            A. An injury to the skin or other organic tissue primarily caused by
            heat
          </div>
          <div>
            <input
              type="radio"
              name="q1"
              value="false"
              onChange={() => setQ1(false)}
            />
            B. An injury occur only upper layer of the skin
          </div>
          <div>
            <input
              type="radio"
              name="q1"
              value="false"
              onChange={() => setQ1(false)}
            />
            An injury to skin because of any radiation
          </div>
          <div>
            {" "}
            <input
              type="radio"
              name="q1"
              value="false"
              onChange={() => setQ1(false)}
            />
            D. None of these
          </div>
        </div>
        <div className="flex flex-col ">
          <h1> Which are the classification of burn according to its depth?</h1>
          <div>
            <input
              type="radio"
              name="q2"
              value="CORRECT2"
              onChange={() => setQ2(true)}
            />
            A. 1st degree, second degree, third-degree, Fourth-degree
          </div>
          <div>
            <input
              type="radio"
              name="q2"
              value="WRONG"
              onChange={() => setQ2(false)}
            />
            B. Minor, Moderate, severe burn
          </div>
          <div>
            <input
              type="radio"
              name="q2"
              value="WRONG"
              onChange={() => setQ2(false)}
            />
            C. Primary, secondary
          </div>
          <div>
            {" "}
            <input
              type="radio"
              name="q2"
              value="WRONG"
              onChange={() => setQ2(false)}
            />
            D. None of these
          </div>
        </div>
        <div className="flex flex-col">
          <h1>
            Mention the % of burn at the affected side in the diagram (
            According to rule of 9)
          </h1>
          <div>
            <input
              type="radio"
              name="q3"
              value="CORRECT3"
              onChange={() => setQ3(true)}
            />
            A. 9 %
          </div>
          <div>
            <input
              type="radio"
              name="q3"
              value="WRONG"
              onChange={() => setQ3(false)}
            />
            B. 18 %
          </div>
          <div>
            <input
              type="radio"
              name="q3"
              value="WRONG"
              onChange={() => setQ3(false)}
            />
            C. 27 %
          </div>
          <div>
            <input
              type="radio"
              name="q3"
              value="WRONG"
              onChange={() => setQ3(false)}
            />
            D. 36 %
          </div>
        </div>
        <div className="flex flex-col">
          <h1>
            Mention the % percentage given for the Pediatric palm in Palm
            method.
          </h1>
          <div>
            <input
              type="radio"
              name="q4"
              value="CORRECT4"
              onChange={() => setQ4(true)}
            />
            A. 1 %
          </div>
          <div>
            <input
              type="radio"
              name="q4"
              value="WRONG"
              onChange={() => setQ4(false)}
            />
            B. 0.8 %
          </div>
          <div>
            <input
              type="radio"
              name="q4"
              value="WRONG"
              onChange={() => setQ4(false)}
            />
            C. 0.5%
          </div>
          <div>
            <input
              type="radio"
              name="q4"
              value="WRONG"
              onChange={() => setQ4(false)}
            />
            D. 0.4 %
          </div>
        </div>
        <div className="flex flex-col">
          <h1>
            {" "}
            Fluid plasma accumulation in interstitial spaces result in.....
          </h1>
          <div>
            <input
              type="radio"
              name="q5"
              value="CORRECT5"
              onChange={() => setQ5(true)}
            />
            A. Edema
          </div>
          <div>
            <input
              type="radio"
              name="q5"
              value="WRONG"
              onChange={() => setQ5(false)}
            />
            B. Necrosis of skin
          </div>
          <div>
            <input
              type="radio"
              name="q5"
              value="WRONG"
              onChange={() => setQ5(false)}
            />
            C. Vomiting
          </div>
          <div>
            <input
              type="radio"
              name="q5"
              value="WRONG"
              onChange={() => setQ5(false)}
            />
            D. Haemorrhage
          </div>
        </div>
        <button
          type="button"
          className="bg-green-500 rounded-sm w-1/2 my-10"
          onClick={Submit1}
        >
          Submit Q1
        </button>
        <div>You Scored {score}/5</div>
      </div>
    </>
  );
}
