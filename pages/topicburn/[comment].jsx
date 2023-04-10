import { FaChalkboardTeacher } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import React, { useState , useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Styles from "../../styles/viewpdf.module.css";
import Link from "next/link"; 
import plams from "../../public/plams.png"
import phy from "../../public/phy.png"
import rule from "../../public/rule.png"
import lund from "../../public/lund.png"


import clientPromise from "../../lib/mongodb";


export default function Topicburn({comment}) {
  const { user, error, isLoading } = useUser();
  const [scroller, setscroller] = useState(false);
  const [mess, setMessage] = useState("");
  const [extra, setextra] = useState(""); 

  const[res,setRes] = useState([])

// --------------------------------------------------------------------------
const demo = {count:0,extra:""}
  const[notestab,setNotestab] = useState(false)
  const [notes,setNotes] = useState([demo]); 
  
  

 

  useEffect(() => {
    if(localStorage.getItem('hi') == null && localStorage.getItem('hi') !== undefined ){window.localStorage.setItem("hi", JSON.stringify(notes));}
    else{
    []
    const stored = localStorage.getItem("hi")
    setNotes(JSON.parse(stored))}
    
    
}, [notestab]);
  
    function onnotes(){ 

      setNotes((prev)=>[...prev,{count,extra}]) 
      setCount(count+1)
      window.localStorage.setItem("hi", JSON.stringify(notes));
    
    }

    // const [value, setValue] = useState("");


const[count,setCount] = useState(1) 


// -----------------------------------------------------------------------------
  
  useEffect(() => {
   
      
    const res =  fetch("/api/com").then((response) =>{return response.json()}).then((data) =>{setRes(data)})
    
    
}, []);



if (user) {
  console.log(user.name);
} 

  const handleSubmit = async (e) => {
    try {
      const BaseURL = process.env.AUTH0_BASE_URL
      const res = await fetch(`/api/com`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          comment: mess,
          extra: extra,
          teacher: false,
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
  // -------------------------------------------------------------------------

  const selecttext = (event) => {
    const a = window.getSelection().toString();
    setextra(a);

    let posx = event.clientX;
    let posy = event.clientY;
    let scrolly = window.scrollY;
    // console.log(scrolly);
    const elem = document.getElementById("askprompt");
    var totaly = posy + scrolly - 60;
    elem.style.top = totaly + "px";
    elem.style.left = posx - 50 + "px";
  };
// --------------------------------------------------------------------------------
  function scrl(x) {
    window.scrollTo(0, x);
  }

  function Askclick() {
    scrl("18800");
    const elem = document.getElementById("askprompt");
    elem.style.left = -500 + "px";
  }

  return (
    <>
      <nav className="flex gap-20 justify-center mb-5 py-5 bg-teal-500 rounded-b-lg">
        <Link href="" className="text-xl cursor-pointer">
          Home
        </Link>
        <Link href="" className="text-xl cursor-pointer">
          About us
        </Link>
        <Link
          href="/ass"
          className="text-xl cursor-pointer"
        >
          Assessment
        </Link>
        <div onClick={()=>setNotestab(!notestab)} className="text-xl cursor-pointer inline">
          Notes
        </div> 
        {user ? (
          <div className="flex gap-20">
            <div className="text-xl">welcome,{user.nickname}</div>
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

      

      {/* ---------------------------------------navbar ends------------------------------------------- */}
    

{/* -----------------------------------notes---------------------------------------- */}

{notestab?<div className="w-2/3 h-1/2 fixed left-8 bg-white  overflow-y-auto "><div className="flex items-center  justify-around"><h1 className="text-3xl">Saved notes</h1> <div onClick={()=>setNotestab(!notestab)} className="text-xl cursor-pointer inline">
          <GrClose/>
        </div> </div>
  {notes.map((note)=>
  <div className="flex" key={note.count}><div className="my-2 border-2 shadow-lg"  >{note.extra}</div></div>)}
 
</div>:<div></div>}

{/* -----------------------------------notes ends---------------------------------------- */}


















      <div>
        <h1 className="text-7xl text-center m-5">Burn Management</h1>
        <div
          className="w-50 p-5 rounded-xl fixed bottom-5 z-10 left-1 bg-gray-500"
          onClick={() => setscroller(!scroller)}
        >
          Quick Navagation
        </div>
        {scroller ? (
          <ul className={Styles.quicknav}>
            <li className={Styles.quicknavitm} onClick={() => scrl("80")}>
              INTRODUCTION
            </li>
            <li className={Styles.quicknavitm} onClick={() => scrl("800")}>
              BURNS{" "}
            </li>
            <li className={Styles.quicknavitm} onClick={() => scrl("850")}>
              TYPES OF BURNS INJURY
            </li>
            <li className={Styles.quicknavitm} onClick={() => scrl("1900")}>
              CLASSIFICATION OF BURNS
            </li>
            <li className={Styles.quicknavitm} onClick={() => scrl("4700")}>
              PREHOSIPTAL PHASE
            </li>
            <li className={Styles.quicknavitm} onClick={() => scrl("9000")}>
              ACUTE PHASE
            </li>
          </ul>
        ) : (
          <> </>
        )}
        <div className={Styles.paracont}>
          <h2 className="text-4xl font-bold dark:text-white">INTRODUCTION</h2>
          <p onMouseUp={selecttext} className="my-4 text-lg text-gray-500">
            Skin is the outermost covering and the largest organ of the
            integumentary system of our body. It protects deeper tissue from
            harsh environment, regulate temperature, and prevents loss of water;
            the sensory receptors attached to it are involved in detecting pain,
            pressure and temperature. other functions are insulation, vitamin D
            synthesis and immunity to protect against pathogen invaders, hence
            skin function as overall protection barrier but burns destroy the
            protection barrier but burns destroy the protection shield, and our
            body gets exposed to various external impetuses.
          </p>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            A burn occurs when heat, chemicals, sunlight, electricity or
            radiation damages skin tissue. Most burns happen accidentally. There
            are different degrees of burns. Your healthcare provider determines
            the seriousness (degree) of a burn based on the depth of the burn
            and the amount of affected skin. Burns can be painful. Left
            untreated, a burn can lead to infection.
          </p>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Burn is associated with severe skin damage. therefore, serious burns
            injury needs immediate medical support to prevent further
            complication and death. Burns occurs when energy from a heat source
            is transferred to the tissues of the body. Heat may be transferred
            through conduction or electromagnetic radiation.
          </p>
          <h2 className="text-4xl font-extrabold dark:text-white">Burns</h2>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            A burn is an injury to the skin or other organic tissue primarily
            caused by heat or due to radiation, radioactivity, electricity,
            friction or contact with chemicals.
            <br />
            Thermal (heat) burns occur when some or all of the cells in the skin
            or other tissues are
            <br />
            <strong>destroyed by :</strong>
          </p>
          <ol className="flex flex-col">
            <em>-hot liquids (scalds)</em>
            <em>-hot solids (contact burns)</em>
            <em>-flames (flame burns)</em>
          </ol>
          <h3 className="text-4xl font-extrabold dark:text-black">TYPES OF BURNS INJURY :</h3>
          <h3 className="text-3xl my-10">Primary Injury</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            It is the immediately damage caused by the burns . Little can be
            done to limit the primary injury in most cases of trauma. However a
            prompt removal of the heat source and rapid cooling of the burns
            limit the extent of primary injury
          </p>
          <h3 className="text-3xl my-10">Secondary injury</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            It is the deleterious effect resulting from the primary injury. A
            major burns can result in loss of fluids, secondary infection,
            endogenous and exogenous release of toxins, fluids shift ,
            coagulopathy oedema , constriction caused by burns eschar.
          </p>
          <h3 className="text-3xl my-10">CAUSES OF BURNS :</h3>

          <ol className="flex flex-col">
            <em>-Thermal burns</em>
            <em>-Chemical burns</em>
            <em>-Electric burns</em>
            <em>-Radiation burns</em>
            <em>-Inhalation injury</em>
          </ol>

          <h2 className="text-4xl font-extrabold dark:text-white">
            CLASSIFICATION OF BURNS{" "}
          </h2>
          <h3 className="text-3xl my-10">A: According to burn depth :</h3>
          <h3 className="text-3xl my-10">
            • Superficial Partial thickness or 1st degree burns:
          </h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            In this involve only upper layer of skin the epidermis ( skin
            surface).it usually produce a pink to reddish colour on the burned
            skin and very sensitive to touch and skin appear blanched when light
            pressure is applied. This burns is produce redness pain and minor
            swelling. Healing time is about 3 – 6 days.
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">
            • Deep partial thickness and second degree burns:
          </h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            It affect both the outer layer ( epidermis ) and under layer lining
            of skin ( dermis ) causing redness, pain , swelling and blisters.
            There symptoms include red, blistered, and may be swollen and
            painful.
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">
            • Full thickness and third-degree burns:
          </h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Third-degree burns destroy the epidermis and dermis. They may go
            into the innermost layer of skin, the subcutaneous tissue. The burn
            site may look white or blackened and charred.
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">• Fourth-degree burns:</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Fourth-degree burns go through both layers of the skin and
            underlying tissue as well as deeper tissue, possibly involving
            muscle and bone. There is no feeling in the area since the nerve
            endings are destroyed.
          </p>
          <h2 className="text-4xl font-extrabold dark:text-white">
            B) According to burn severity:
          </h2>
          <h3 className="text-4xl font-extrabold dark:text-black">1) Minor Burns :</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            All 1st degree burns as well as second degree burns that involves
            less than 10% of the body surface usually are classified as minor
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">2) Moderate burns:</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Burns involving hand s and feet face or genital , second degree
            burns involving more than 10 % body surface area . superficial
            partial thickness burns of the head hand and feet or perineum
            suspected child abuse concomitant trauma and significant
            pre-existing disease
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">3) Severe Burns :</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Burns surface involvement of 25% body surface area .All third degree
            burns classified as moderate or more often or severe Full thickness
            burn 10% Body surface area.
          </p>
          <h2 className="text-4xl font-extrabold dark:text-white">
            C) According to the extent of body surface area injured:
          </h2>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Burns surface involvement of 25% body surface area .All third degree
            burns classified as moderate or more often or severe Full thickness
            burn 10% Body surface area.
          </p>
          <div>
          <h3 className="text-3xl my-10">✓ The rule of nine :</h3>
          <Image src={rule} width={500} height={500} alt="no image yet"></Image>
          </div>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            This allows the emergency medical provider to obtain a quick
            estimate of how much body surface area is burned. For example, if a
            patient&apos;s entire back (18%) and entire left leg (18%) are
            burned, about 36% of the patient&apos;s BSA is affected. The BSAs
            assigned to each body part refer to the entire body part. So, for
            example, if half of a patient&apos;s left leg were burned, it would
            be assigned a BSA value of 9% (half the total surface area of the
            leg). Thus, if a patient&apos;s entire back (18%), but only half of
            their left leg (9%) was burned, the amount of BSA affected would be
            27%.
          </p> 
          <div>
          <h3 className="text-3xl my-10">✓ Lund and Browder method :</h3>
          <Image src={lund} width={500} height={500} alt="no image yet"></Image>
          </div>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            For children and infants, the Lund-Browder chart is used to assess
            the burned body surface area. Different percentages are used because
            the ratio of the combined surface area of the head and neck to the
            surface area of the limbs is typically larger in children than that
            of an adult.
          </p>
          <div>
          <h3 className="text-3xl my-10">✓ Palm method</h3>
          <Image src={plams} width={500} height={500} alt="no image yet"></Image>
          </div>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            The &quot;rule of palm&quot; is another way to estimate the size of
            a burn. The palm of the person who is burned (not fingers or wrist
            area) is about 1% of the body. Use the person&apos;s palm to measure
            the body surface area burned. It can be hard to estimate the size of
            a burn
          </p>
          <div>
          <h2 className="text-3xl text-center my-10">
            ❖ Pathophysiology of burns :
          </h2> 
          <Image src={phy} width={500} height={500} alt="no image yet"></Image>
          </div>
          <h3 className="text-3xl my-10">❖ Diagnostic studies in burns:</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            1) Complete blood test : initial increased haematocrit (Hct) due to
            fluid loss, decreased haematocrits Hct and RBC may occur due to heat
            damage due to vascular endothelium.
            <br />
            2) ABG :<br />
            3) Serum electrolyte : hyponatremia fluid loss , potassium level may
            initially increased injured tissue.
            <br />
            4) Serum albumin : loss protein in fluid
            <br />
            5) Urine routine
            <br />
            6) Chest Xray
            <br />
            7) ECG
            <br />
            8) Bronchoscopy
          </p>
          <h2 className="text-3xl text-center my-10">Management of burns :</h2>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Burn managements can be organized chronologically into three phases
            emergent (resuscitative) , acute ( wound healing ) , and
            rehabilitative (restorative ) . For example , the emergent phase
            begin at the time of the burn injury, and care often begin in the
            prehospital phase, depending on the skill level of providers at the
            scene . Planning for rehabilitation begins on the day of the burn
            injury or admission to the burn center. Formal rehabilitation begins
            as soon as functional assessment can be performed . wound care is
            the primary focus on acute phase , but wound care also takes place
            in both the emergent and rehabilitation phase.
          </p>
          <h2 className="text-3xl text-center my-10">PREHOSPITAL PHASE :</h2>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            • At the scene of the injury, priority is given to removing the
            person from the source of the burn and stopping the urning process.
            <br />
            • Small thermal burns ( 10 % or less of TBSA ) should be covered
            with a clean , cool, tap water dampened towel for the patients
            comfort and protection until medical care is available.
            <br />• If the burn is large ( greater than 10% TBSA ) or an
            electrical or inhalation burn is suspected , first focus ABC:
          </p>
          <h3 className="text-3xl my-10">1) Airway management :</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            ➢ Airway stability should be assessed rapidly in burns involving
            facial or suspected inhalation injuries, particularly in the early
            period following injury when the airway is at risk of obstruction
            due to swelling of the oropharynx and soft tissues of the neck.
            <br />➢ Airway burns, smoke inhalation syndrome, severe burns of
            face and neck, laryngeal edema may need intubation and tracheostomy.
          </p>
          <h3 className="text-3xl my-10">2) Breathing :</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Check adequacy of ventilation
          </p>
          <h3 className="text-3xl my-10">3) Circulation :</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            - Check for the presence and regularity of pulses and elevate the
            burned limb above the heart to decrease pain and swelling
          </p>
          <h3 className="text-3xl my-10">Hyperbaric oxygen therapy :</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            ➢ Oxygen administration is pivotal increasing the gradient for
            oxygen binding to haemoglobin, so that unbound CO can be exhaled
            through the lungs. Oxygen saturation is an unreliable oxygenation
            parameter in &apos;patients with carbon monoxide poisoning.
            <br />➢ The use of HBOT, or hyperbaric oxygen, greatly reduces the
            burn victims chances of severe infection or death.
          </p>
          <h2 className="text-4xl font-extrabold dark:text-black">NURSING ASSESSMENT:-</h2>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            ➢ Remove jewellery and clothing in contact with burn source
            <br />
            ➢ Cool affected area as soon as possible (within 3 hours from time
            of burn) for 20 minutes with cool running water
            <br />
            ▪ If unavailable, other options include: frequently changed cold
            water compresses, immersion in a basin, irrigation via an open
            giving set
            <br />
            ▪ Flush the affected area with copious amount of water to irrigate
            the skin anywhere from 20 min to 2 hour postexposure 15
            <br />
            ➢ Never apply ice and avoid use of hydrogel burn products, since
            this can cause hypothermia and vasoconstriction of blood vessels ,
            thus further reducing blood flow to the injury. Cover burn with
            plastic cling film lengthways along the burn (do not wrap
            circumferentially)
            <br />
            • Do not apply plastic cling film to face (use paraffin ointment)
            <br />
            • Do not apply plastic cling film to a chemical burn
            <br />
            ➢ Appropriately consented photos of burns prior to dressings are
            useful for ongoing management
            <br />
            ➢ Prevent hypothermia
            <br />
            o Remove wet clothes/dressings after initial cooling
            <br />
            o Cover the wound after assessment
            <br />
            o When possible, warm intravenous fluids and the room
            <br />
            Tap water is acceptable for flushing eyes exposed to chemicals.
            Tissue destruction may continue for up to 72 hour after contact with
            some chemicals.
          </p>
          <h2 className="text-4xl font-extrabold dark:text-black">EMERGENT PHASE :</h2>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            The emergent ( resuscitative ) phase is the time required to resolve
            the immediate , life threatening problems resulting from burn
            injury. This phase usually last up to 48 hours from the time the
            burn occurred. <br />
            The primary concerns are the onset of hypovolemic shock and edema
            formation. The emergent phase ends when fluid mobilization and
            diuresis begins.
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">EMERGENT PHASE :</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Hypovolemic shock caused by a massive shift of fluids out of the
            blood vessels as a result of increased capillary permeability and
            can begins as early as 20 minutes postburn. As the capillary walls
            become more permeable water , sodium , and plasma proteins (
            especially albumin) move into their interstitial spaces and other
            surrounding tissue.
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">Fluid management: </h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Replacing fluids and electrolyte is an essential part of the
            treatment of burns victim and initiated as soon as possible as the
            severity of the burns and the patient condition is the unknown.
            <br /> Fluid therapy is the started within an hour after a severe
            burn to prevent hypovolemic shock. Fluid administered during the 1st
            48 hour are given to maintain circulating blood volume . The
            parkland formula was introduced in the 1970 and has been accepted
            worldwide for fluid resuscitation. The formula calculate the volume
            of fluid required based on TBSA involved
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">1) Parkland formula: </h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            4ml × Body weight (kg) ×TBSA (%) = Total fluid volume in 1st 24
            hours (1/2 of volume given in 1st 8 hours, ½ of the volume given
            over next 16 hour) Initial 24 hours : Ringer lactated ( RL) solution
            4 ml / kg/% burn for children. <br />
            RL solution is added for maintenance of children:
            <br />
            • About 4ml/kg/hr for children weighing 0-10 kg
            <br />
            • About 40 ml /hr+ 2ml/hr for children weighing10-20 kg
            <br />
            • About 60 ml/ hr + 1 ml / kg/ hr for children weighing 20 kg or
            higher.
            <br />
            According to the formula no colloid should be administered in the
            initial 24 hours.
            <br />
            Next 24 hours :<br />
            Colloid are given as 20-60 % calculated plasma volume . NO
            crystalloids should be given . Glucose in water is added in amounts
            required to maintain a urinary output of 0.5-1 ml/hr/kg in adult and
            1 ml/hr/kg in children.
            <br />
            Modified Parkland formula:
            <br />
            Initial 24 hours : RL 4 ml /kg /% burn (adult) and next 24 hours :
            colloid infusion of 5 % albumin 0.3 – 1 ml / kg / % burn / 16 / hr
            is started.
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">2) Consensus formula :</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Lacted ringer solution ( or other balanced saline solution ):
            <br />
            2-4 mL Ringers Lactate x weight in kg x % TBSA= mLs in first 24
            hours. Give half of this total in the first 8 hours post burn :
            Pediatrics use 3 mL: Electrical injuries use 4mL.
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">3. Evans formula</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Normal saline at 1 ml/kg/% TBSA burn colloid at 1 ml/kg/% TBSA burn.
            For second 24 hours, give half of the first 24-hour requirements
            &quot; D5W (dextrose 5% in water) 2000 ml.
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">4) Brooke army formula :</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            2mls x body surface areas burned (BSAB) x weight. The Parkland
            formula is 4mls x body surface areas burned (BSAB) x weight. Both
            formulas estimate the first 24 hour fluid requirements from the time
            of the burn, with half the amount given in the first 8 hours.
            <br />
            Assessment of adequacy of fluid resuscitation :<br />
            ➢ Monitor urine output ( adult greater than 1ml/kg / hour)
            <br />
            ➢ Daily weight
            <br />
            ➢ Vital signs
            <br />
            ➢ Heart rate and blood pressure
            <br />
            ➢ CVP
            <br />
            ➢ Level of consciousness
            <br />➢ Laboratory values
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">Antibiotic protocol in burns:</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Patient care is improved by promoting the best practice in
            antibiotics prophylaxis and therapy Antibiotic will be given only
            when patient actually requires . If the the clinical condition is
            improving in general then antibiotics strategy should not changed.
            However if there is no clinical response within 72 hours the
            clinical diagnosis the choice of antibiotic and or possibly of a
            secondary infection should be reconsidered. The antibiotic should be
            given for the minimum length of time that is effective.
          </p>
          <h2 className="text-4xl font-extrabold dark:text-black">Antibiotic protocol in burns:</h2>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Commonly used topical agents include combination antimicrobial
            ointments, silver sulfadiazine, bismuth-impregnated petroleum gauze,
            mafenide, and chlorhexidine Other agents such as honey,
            povidone-iodine, and Dakin&apos;s solution are less commonly used.
            Combinations of antimicrobials with topical antifungal agents have
            also demonstrated some efficacy for the local treatment of burns
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">DRUGS </h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            ▪ Tetanus immunization
            <br />
            ▪ Analgesic : Morphine , Fentanyl, methadone, NSAID (ketorolac) ,
            Adjutant analgesics
            <br />
            ▪ Sedatives: Midazolam, intrazepam,
            <br />
            ▪ Antidepressant : Sertraline
            <br />
            ▪ Anticoagulant : Heparin
            <br />
            ▪ Nutritional support : vitamin A,C , E, and multivitamin minerals,
            zinc , iron
            <br />▪ Gastrointestinal support : Ranitidine , Nystatin .
          </p>
          <h2 className="text-4xl font-extrabold dark:text-black">SURGERY: - </h2>
          <h3 className="text-4xl font-extrabold dark:text-black">Escharotomy</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            • The aim of the escharotomy is to release the pressure over the
            involved deeper tissues and to restore their circulation.
            <br />
            • Clinical indications for escharotomy include patient complaints of
            tingling or numbness in limbs.
            <br />
            • The incisions should extend from burnt skin to unburnt skin
            ideally, or at least into areas of more superficial burns, down to
            subcutaneous fat, and release any constrictions. In the limbs,
            incisions should be made in the midaxial line, both medially and
            laterally, and on the chest and abdominal wall, the incisions are
            made in the midaxillary lines, which can be joined by a transverse
            incision below the costal margin to allow adequate release.
            <br />• The wound edges should be adequately parted upon incision;
            any residual constrictions should be checked by running a finger
            along the length of the incision.
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">Fasciotomy:</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            • Fasciotomies are performed when there are circumferential burns.
            <br />
            • It is a surgical procedure to incise fascia to relieve pressure
            which otherwise would have resulted in loss of circulation to the
            tissue.
            <br />
            • It is a limb-saving method which is done to treat compartment
            syndrome.
            <br />
            Facial reconstructive surgery :<br />
            Reconstructive burn surgery is a procedure performed by a plastic
            surgeon after the initial wounds from a burn have healed . the goal
            of the surgery is to increase the function and restore the
            appearance of the skin . Some of these procedural involve several
            months of preparation to improve tissue .
          </p>
          <h1 className="text-4xl font-extrabold dark:text-black">NURSING MANAGEMENT</h1>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            ➢ Monitor hemodynamically status
            <br />
            ➢ Keep accurate record of intake and output to monitor fluid loss
            and gain .<br />
            ➢ Maintain IV solution containing electrolyte at consistent flow
            rate
            <br />
            ➢ Monitor manifestations of electrolyte imbalance to detect early
            changes of electrolyte imbalance
            <br />
            ➢ Provide optimal pain relief with prescribed analgesics to manage
            pain.
            <br />
            ➢ Assure pre-treatment analgesia prior to painful procedures
            <br />
            ➢ Maintain sterile dressing technique when performing wound care
            <br />➢ Monitor systematics and localized agent and symptoms for
            infection
          </p>
          <h2 className="text-4xl font-extrabold dark:text-black">ACUTE PHASE</h2>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Begins 48 to 72 hours after the burn injury. In this phase the
            extracellular fluid start mobilize and start diuresis. This phase
            complete when wound is covered by skin graft or wound are healed.
            This may take weeks or many months. Escher begins to separate fairly
            after injury . Re epithelialization begins at wound margin and
            appears as red/pink scar tissues The predominant therapeutic
            interventions in the acute phase are <br />
            1) Wound care
            <br />
            2) Excision and grafting
            <br />
            3) Pain management
            <br />
            4) Physical and occupational therapy
            <br />
            5) Nutritional therapy
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">1) WOUND CARE :</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Goal : Prevent infection by cleansing and debriding the area of
            necrotic tissue that would promote bacterial growth and promote
            wound re-epithelialization and or successful skin grafting.
            <br />
            Wound care consist of ongoing observation , assessment , cleansing ,
            debridement and dressing reapplication. Nonsurgical debridement ,
            dressing changes topical antimicrobial therapy , graft care and
            donor site care are performed as often as necessary , depending on
            the topical cream or dressing ordered.
            <br />
            Enzymatic debriders made of natural ingredient , such as collagen ,
            may ne used for enzymatic debridement of burns wounds, which speeds
            up the removal of dead tissue from the healthy wound bed.
            <br />
            Cleans wound with the soap and water or normal saline moistened
            gauze to the remove the old antimicrobial agent. During the
            debridement phase , cover the wound with topical antimicrobial
            creams( e.g. silver sulfadiazine) or silver impregnated dressing.
            <br />
            Dressings — A variety of antimicrobial agents can be applied to the
            burn wound surface, which is then covered with one of several
            dressing materials (eg, gauze, nonadherent films, honey , bactrigras
            dressing )
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">2) DEBRIDEMENT AND SKIN GRAFTING</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            • If patient is stable, then early excision is done within 48 hours.
            <br />
            • At a time, 15-20% dead skin is excised, and the wound is covered
            by autograft or allograft, and sometimes sandwich grafting is used.
            <br />
            • If patient&apos;s condition is not stable, then delayed
            debridement is done after 15-20 days, after patient becomes stable,
            followed by skin grafting. <br />
            • In the care of unavailability of autograft, for high percentage of
            burns , glycerol preserved allograft from cadaver is used as
            temporary biological dressing material
            <br />
            • Biologic grafts — Biologic graft materials that can be used for
            temporary coverage of burn wounds include allografts, xenografts,
            and others (eg, human amnion).
            <br />
            • Semibiologic skin substitutes are temporary biosynthetic dressings
            that are meant to reduce the number of dressing changes and
            facilitate healing. The semipermeable nature of these dressings
            allows wound exudate to be absorbed by the external bulky dressing.
            <br />• Biobrane is used to cover donor sites and aid in coverage of
            large surface area burns, including hands, feet, and joints
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">3) PAIN MANAGEMENT</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Burn patient experience two kind of pain
            <br />
            1) Continuous background pain that might be present throughout the
            day and night
            <br />
            2) Treatment induced pain associated with dressing , changes ,
            ambulation and rehabilitation activities.
            <br />
            • With background pain a continuous iv infusion of an opioids(e.g.
            hydromorphone) allows for a steady , therapeutic level of
            medication.
            <br />
            • Anxiolytics which can potential analgesic are also can indicated
            and include lorazepam and midazolam.
            <br />
            • Adjuvant analgesic such as gabapentin and pregabalin also
            potentiate opioids.
            <br />
            • Fentanyl also used.
            <br />
            • Some pain can be manged using nondrug strategies . mind body
            intervention such as relaxation breathing, guided imagery, hypnosis,
            biofeedback, and musical therapy .<br />• Patient control analgesia
            is used in selected circumstances in some burn centers
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">
            4) PHYSICAL AND OCCUPATIONAL THERAPY:
          </h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            Continuous physical therapy ,passive and active ROM should be
            performed on all joints. Ensure that the patient with neck burns
            continue to sleep without pillows or head hanging slightly over the
            top of the mattress to encourage hyper-extension. Maintain the
            occupational therapy schedule for wearing custom fitted splint ,
            which are designated to keep joint in functional positions.
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">5) NUTRITIONAL THERAPY </h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            When the wounds are still open the burn patient is in a
            hypermetabolic and highly catabolic state. Encourage patient to eat
            high protein, high carbohydrate foods to meet caloric needs. <br />
            • A burns patient&apos;s nourishment depends upon early oral
            feeding.
            <br />
            • It should be started within 48-72 hours just after completion of
            resuscitation. Burn patients find difficulty while chewing the food
            so special diet has to be prepared for them and administered through
            nasogastric tube.
            <br />
            • Small measured quantity is given per hourly basis and monitored
            continuously.
            <br />
            • The buttermilk diet is the safe and well-tolerated food for the
            burns patients, it contains 1 kcal energy per mL. It consists of
            curd-1 L, eggs-four, banana-four, sugar-four tablespoons.
            <br />• The total volume to be made is 1,760 mL, energy content is
            1,760 kcal, protein content is 60 g, and carbohydrate content is 340
            g. The starting quantity is 10 mL/h for every 6 hours to reach a
            maximum of 3-5 mL/kg/h for children and 2 ml/kg/h for adults.
          </p>
          <h1 className="text-4xl font-extrabold dark:text-black">NURSING MANAGEMENT</h1>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            ➢ Weight patient daily and monitor trends to detect early signs of
            fluid imbalance.
            <br />
            ➢ Teach the use of non pharmacological technique before and after
            and if possible during painful activity .<br />
            ➢ Monitor patient satisfaction with the pain management at specified
            interval
            <br />
            ➢ Apply an appropriate burn cream and or dressing to the skin to
            promote healing.
            <br />
            ➢ Compare and record regularly any changes to the wound to promote
            healing .<br />
            ➢ Provide physical isolation measures to prevent infection .<br />
            ➢ Provide patient with high protein , high calorie , nutritious
            finger food and drink that can be readily consumed to meet
            nutritional needs .<br />➢ Monitor food/ fluids ingested and
            calculate daily caloric intake to assess adequacy of diet.
          </p>
          <h2 className="text-4xl font-extrabold dark:text-black">REHABILITATION PHASE :</h2>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            The formal rehabilitative phase begin with the patient wounds have
            healed and he or she engaging in some level of self care. This may
            happen as early as 2 weeks or as long as 7 to 8 month after burn
            injury.
            <br />
            Goal: 1) work toward resuming a functional role in society
            <br />
            3) Rehabilitate from any functional and cosmetic postburn
            reconstructive surgery that may be necessary.
            <br />
            ➢ Focus on is upon wound healing , psychosocial support , self
            image, lifestyle and restoring maximal functional abilities so the
            patient can have best quality life both personally and socially.
            <br />
            ➢ Vocational counselling and support groups may assist the patient.
            <br />➢ Reconstructive surgeries for improving body appearance and
            function. <br />
            EMOTIONAL / PSYCHOLOGICAL NEEDS OF PATIENT AND CAREGIVERS :<br />
            To manage the enormous range of emotional responses that the burn
            patient may exhibit , assess the circumstances of the burn ( e.g.
            cause , people involved) , family relationship and previous coping
            experiences with stressful stimuli.
            <br />
            At any time the patient may experience a variety of emotion such as
            fear , anxiety , anger , guilt, and depression.
            <br />
            Burn survivors frequently experience thoughts and feeling that are
            frightening and disturbing , such as guilt about the burn incident ,
            relieving of the frightening burn experience , fear of dying ,
            concern about future therapy and surgery frustration with ongoing
            discomfort and treatment and hopelessness about the future.
          </p>
          <h2 className="text-4xl font-extrabold dark:text-black">NURSING MANAGEMENT :</h2>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            ➢ Determine the impact of the pain experience on quality of life
            (e.g. sleep, appetite, activity , cognition, mood , relationship of
            job, and role responsibility) to plan long term pain management
            <br />
            ➢ Assist patient and family to seek and obtain support to manage
            residual pain .<br />
            ➢ Monitor appropriateness of diet order to meet daily nutritional
            needs to promote excess weight gain.
            <br />➢ Refer for diet teaching and planning to meet long term
            nutritional needs.
          </p>
          <h2 className="text-4xl font-extrabold dark:text-black">NURSING DIAGNOSIS :</h2>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            • Acute pain related to destruction of skin/ tissue as evidence by
            restlessness.
            <br />
            • Impaired skin integrity related to distruption of skin surface
            with destruction of skin layers as evidence by absence of viable
            tissue.
            <br />
            • Ineffective tissue perfusion related to interruption of arterial/
            venous blood flow as evidence by oedema.
            <br />
            • Impaired physical mobility related to neuromuscular impairment as
            evidence by inability to do activity.
            <br />
            • Disturbed body image related to situational crisis of traumatic
            events as evidence by negative feeling about body.
            <br />
            •Imbalance nutrition less than body requirements related to
            hypermetabolic state as evidence by anorexia.
          </p>
          <h3 className="text-4xl font-extrabold dark:text-black">GENERAL NURSING MANAGEMENT:</h3>
          <p onMouseUp={selecttext} class="my-4 text-lg text-gray-500">
            The nursing assessment focuses on the major priorities for any
            trauma patient; the burn wound is a secondary consideration.
            <br />
            ✓ Obtain history. Assess body temperature, body weight, history of
            preburn weight, allergies, tetanus immunization, past medical
            surgical problems, current illnesses, and use of medications.
            <br />
            ✓ Arrange for patients with facial burns to be assessed for corneal
            injury.
            <br />
            ✓ Continue to assess the extent of the burn; assess depth of wound,
            and identify areas of full and partial thickness injury.
            <br />
            ✓ Assess neurologic status: consciousness, psychological status,
            pain and anxiety levels, and behaviour.
            <br />
            ✓ Assess patient’s and family’ s understanding of injury and
            treatment. Assess patient’s support system and coping skills.
            <br />
            ✓ Focus on the major priorities of any trauma patient. the burn
            wound is a secondary consideration, although aseptic management of
            the burn wounds and invasive lines continues.
            <br />
            ✓ Assess circumstances surrounding the injury. Time of injury,
            mechanism of burn, whether the burn occurred in a closed space, the
            possibility of inhalation of noxious chemicals, and any related
            trauma.
            <br />
            ✓ Monitor vital signs frequently. Monitor respiratory status
            closely; and evaluate apical, carotid, and femoral pulses
            particularly in areas of circumferential burn injury to an
            extremity.
            <br />
            ✓ Start cardiac monitoring if indicated. If patient has history of
            cardiac or respiratory problems, electrical injury.
            <br />
            ✓ Check peripheral pulses on burned extremities hourly; use Doppler
            as needed.
            <br />✓ Monitor fluid intake (IV fluids) and output (urinary
            catheter) and measure hourly. Note amount of urine obtained when
            catheter is inserted (indicates preburn renal function and fluid
            status).
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5  rounded-lg items-center m-2">
        {res.map((com) => (
          <div
            className="flex flex-col justify-center border-2 rounded-lg w-2/3"
            key={com._id}
          >
            <span className="flex items-center gap-5 p-2">
              <h1 className="text-2xl p-2 text-blue-600">{com.name}</h1>
              {com.teacher == true ? (
                <FaChalkboardTeacher className="text-2xl" />
              ) : (
                <></>
              )}
            </span>
            {com.extra ? (
              <p className="p-2 bg-yellow-200">Selected Text:-{com.extra}</p>
            ) : (
              <></>
            )}

            <p className="p-2 bg-white">Comment:-{com.comment}</p>
          </div>
        ))}
        <div className=" my-20">
          <div className="w-1/2">{extra}</div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              value={mess}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are your thoughts?"
              className="flex border-[1px] border-zinc-400 p-4 rounded-lg w-full"
            />

            <button
              className="border-[1px] rounded-fullborder-zinc-400 w-fulls"
              type="submit"
            >
              Comment
            </button>
          </form>
        </div>
      </div>
      {/*div mover*/}
      <div
        id="askprompt"
        className="bg-yellow-200 rounded-full w-[100] top-[-50] h-10 absolute flex gap-1 px-5 py-2 "
      >
        <button className="rounded-l-lg bg-slate-100 px-2" onClick={Askclick}>
          Ask?
        </button>
        <button className="bg-slate-100 rounded-r-lg px-2" onClick={onnotes}>Save</button>
      </div>
      {/*div mover*/}
    </>
  );
}

export async function getStaticProps(context) {

  const client = await clientPromise;
  const db = client.db("test"); 


  const searchRoute = context.params.comment;

  const userData = await db
    .collection("newcoms")
    .find({ name: searchRoute })
    .sort({ metacritic: -1 })
    .toArray();


  return {
    props: {
      comment: JSON.parse(JSON.stringify(userData)),
      
    },
  };
}



// export async function getStaticPaths() {

//   const client = await clientPromise;
//   const db = client.db("test");

//   const searchProjects = await db.collection("newcoms").find({}).toArray();
//   // console.log(searchProjects); 

//   const paths = searchProjects.map((context) => ({
//     // params: { userName : searchRoute, projectName: userPath.projectName },
//     params: { comment: context.name },
//   }));

//   console.log(paths);
//   return { paths, fallback: 'blocking' };
// }


export async function getStaticPaths() {

  const client = await clientPromise;
  const db = client.db("test");

  const searchProjects = await db.collection("newcoms").find({}).toArray();
  // console.log(searchProjects); 

  const paths = searchProjects.map((context) => ({
    // params: { userName : searchRoute, projectName: userPath.projectName },
    params: { comment: context.name },
  }));

  console.log(paths);
  return { paths, fallback: 'blocking' };
}