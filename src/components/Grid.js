import React from 'react'

const Grid = () => {
    return (
       <div className=" bg-blue-100 flex justify-center items-center h-screen font-serif font-semibold">
           <div className="h-5/6 lg:w-5/6 sm:w-screen mb-5 bg-white sm:p-5 lg:p-16 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
              <div className="bg-indigo-900 overflow-hidden  rounded-lg rounded-r-lg h-full flex justify-center items-center p-4 w-full col-span-2 text-white shadow-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis minima quasi. Quas nemo veniam blanditiis consectetur quia architecto sequi unde necessitatibus illo assumenda incidunt pariatur reprehenderit, tempora eos quod.</div>
              <div className="bg-gray-700 rounded-lg overflow-auto  h-full flex justify-center items-center p-4 w-full text-white"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus optio vel aperiam, ipsum ducimus quae ipsa non. Reiciendis laborum incidunt sint ea, at animi doloribus, amet vel pariatur magni dolorem!</div>
              <div className="border-2  lg:rounded-b-full  h-full flex justify-center lg:items-start items-center p-4 w-full row-span-2 overflow-auto shadow-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem. Tempora nobis vitae ut blanditiis ex nam similique amet dolorem ab ipsum natus reprehenderit impedit doloribus aliquam, saepe harum a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, reprehenderit suscipit ipsum quaerat voluptas tempora assumenda blanditiis at?</div>
              <div className=" border-2 rounded-lg  overflow-auto  h-full flex justify-center items-center p-4 w-full shadow-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta officiis quibusdam ex minima consectetur rem atque corporis saepe, fugit explicabo, enim animi consequuntur </div>
              <div className="bg-gray-900 rounded-lg overflow-auto h-full flex justify-center items-center p-4 text-white w-full col-span-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae impedit eligendi esse, incidunt fugiat assumenda quis excepturi odit illum vitae obcaecati aspernatur blanditiis fuga quo at molestias quaerat architecto nihil.</div>
           </div>

       </div>
    )
}

export default Grid
