import React,{useState,useEffect} from 'react'

const Tipcal = () => {
    const [TipAmount,setTipAmount]=useState(0);
    const [Total,setTotal]=useState(0);
    const [Tbill,setTbill]=useState("0")
    const [Bill, setBill]=useState(0);
    const [Tip,setTip]=useState(0);
    const [People,setPeople]=useState(1);
    useEffect(()=>{
        setTotal((Number(Bill) + Number(((Tip*Bill)/100).toFixed(2))).toFixed(2))
    },[Bill,Tip,People])
    function handleBill(e){
        setTbill(e.target.value);
        if (e.target.value !== undefined) {
            setBill(parseFloat(e.target.value))
            console.log(Bill);
        }
        else {

            setBill(0);
        }
    }
    function handleTip(e){
        setTip(parseFloat(e.target.value))
    }
    function handlePeople(e){
        setPeople(parseInt(e.target.value))
    }
    return (
       <div className="bg-blue-100  flex flex-col justify-center items-center h-screen w-100">
           <h1 className="font-extrabold text-indigo-800 text-3xl mb-5 font-serif">BILL/TIP CALCULATOR </h1>
           <div className="bg-white lg:p-5 lg:flex lg:flex-row sm:flex-col lg:justify-center lg:items-center lg:h-96 rounded-3xl lg:w-1/2 sm:w-4/5 lg:shadow-xl">
               
               
               {/* left side div */}
               <div className="h-full w-full rounded-xl m-1 flex flex-col justify-between items-center font-bold font-serif">


                   {/* bill input box */}
                   <div className="border-2 rounded-xl h-20  w-full flex flex-col justify-evenly p-2 lg:shadow-md"> 
                      <div className="h-2/6 flex justify-between ">BILL <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span> </div>
                      <div className="flex justify-end h-8/12"><input type="text" placeholder="0" value={Bill}  onChange={handleBill}  className="w-1/3 font-bold text-blue-800 h-full outline-none bg-indigo-100 text-center rounded-lg" /></div>
                   </div>
                   {/* end bill input box */}

                   <div className="border-2 w-full h-1/2 p-2  rounded-lg lg:shadow-md">
                       <div className="ml-2  flex justify-between">  SET TIP <div className="mr-2">%</div> </div>
                       <div className=" grid grid-cols-3 p-2 h-4/6 gap-4 text-white mt-2">
                           <div className={Tip==5?"bg-blue-100 text-indigo-800 rounded-lg":"bg-indigo-800 rounded-lg"}><button className="rounded-lg  font-bold hover:bg-blue-100 hover:text-indigo-800  w-full h-full flex justify-center items-center"
                         onClick={()=>setTip(5)}  >5 %</button></div>                          
                           <div className={Tip==10?"bg-blue-100 text-indigo-800 rounded-lg":"bg-indigo-800 rounded-lg"}><button  className="rounded-lg  font-bold hover:bg-blue-100 hover:text-indigo-800   w-full h-full flex justify-center items-center"
                           onClick={()=>setTip(10)} >10 %</button></div>
                           <div className={Tip==15?"bg-blue-100 text-indigo-800 rounded-lg":"bg-indigo-800 rounded-lg"}><button  className="rounded-lg  font-bold hover:bg-blue-100 hover:text-indigo-800  w-full h-full flex justify-center items-center"
                            onClick={()=>setTip(15)} >15 %</button></div>
                           <div className={Tip==20?"bg-blue-100 text-indigo-800 rounded-lg":"bg-indigo-800 rounded-lg"}><button  className="rounded-lg  font-bold hover:bg-blue-100 hover:text-indigo-800 w-full h-full flex justify-center items-center"
                           onClick={()=>setTip(20)} >20 %</button></div>
                           <div className={Tip==25?"bg-blue-100 text-indigo-800 rounded-lg":"bg-indigo-800 rounded-lg"}><button  className="rounded-lg  font-bold  hover:bg-blue-100 hover:text-indigo-800 w-full h-full flex justify-center items-center"
                            onClick={()=>setTip(25)} >25 %</button></div>
                           <div className="rounded-lg bg-indigo-800"><input type="text" className=" bg-blue-100 font-bold  w-full h-full flex justify-center items-center text-blue-800 outline-none text-center rounded-lg" placeholder="CUSTOM" onChange={handleTip} /></div>
                       </div>
                   </div>
                   <div className="border-2 rounded-lg w-full px-5 py-2  lg:shadow-md">
                       <div className="flex justify-between ">Number Of People  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
                       <div className="flex justify-end">
                          
                           <input type="text" placeholder="1" className="bg-blue-100 w-1/3 outline-none ml-2 text-center font-bold rounded-lg" value={People} onChange={handlePeople} />
                        </div>
                   </div>
               </div>
               {/* left side div end */}
             










             {/* right side div */}
            <div className="h-full w-full rounded-xl m-1 text-indigo-800 font-bold grid grid-cols-1 gap-1  lg:shadow-md font-serif">
                <div className="rounded-lg bg-blue-100 text-white  lg:shadow-md"> 
                    <div className="flex h-1/2  p-5  justify-between items-center border-b-2  border-dashed border-blue-300 ">
                        <div className="text-2xl text-indigo-800">Tip amount <div className=" font-semibold text-sm">/person</div> </div>
                        <div className="flex justify-between text-indigo-800  w-16 items-center">
                        <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
                            {((Tip*Bill)/(People*100)).toFixed(2)} </div>
                    </div>
                   <div className="flex h-1/2  p-5  justify-between items-center ">
                        <div className="text-2xl text-indigo-800">Total</div>
                        <div className="  flex justify-between  text-indigo-800  w-16 items-center">
                        <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
                            
                            {Total}</div>
                   </div>
                </div>
              
                <div className=" p-5 bg-indigo-800 rounded-lg flex justify-center items-center  lg:shadow-md">
                       <button className=" bg-white rounded-lg border-2 w-full font-bold hover:bg-blue-100 hover:text-indigo-800" onClick={()=>{
                           setBill(0);
                           setTip(0);
                           setPeople(1);
                       }}>RESET</button>
                </div>
            </div>
           {/* right side div end  */}









           </div>
       </div>
    )
}

export default Tipcal
