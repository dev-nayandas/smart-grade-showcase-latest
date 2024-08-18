import Search from "./Search";
// import Avatar from './assets/avatar.png'
import data from './results.json'
import React from 'react'

const Results = () => {
    const results = data.classes;
    console.log(results.length)
    return (
        <section className="py-24 lg:pt-[120px] lg:pb-28 flex justify-center">
          <div className="container">
           <Search/>
            <div className="max-w-[848px] mx-auto overflow-auto">
            <table className="w-full">
      <thead>
        <tr className="border-b border-[#FFFFFF0D]">
          <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
            ID
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold text-left">
            Name
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
          <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
        </tr>
      </thead>
      <tbody>
        {results.map((classData, classIndex) => (
          <React.Fragment key={classIndex}>
            <tr className="bg-white/5">
              <td className="p-5 text-sm md:text-xl" colSpan="4">
                {classData.class_name}
              </td>
            </tr>
            {classData.students.map((student) => (
              <tr className="border-b border-[#7ECEB529]" key={student.id}>
                <td className="p-5 text-sm md:text-xl">{student.id}</td>
                <td className="p-5 text-sm md:text-xl">
                  <div className="flex space-x-3 items-center">
                    <img
                      className="w-8 h-8"
                      src={student.avatar}
                      width="32"
                      height="32"
                      alt={student.name}
                    />
                    <span className="whitespace-nowrap">{student.name}</span>
                  </div>
                </td>
                <td className="p-5 text-sm md:text-xl text-center">{student.score}</td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {student.percentage}
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
            </div>
          </div>
        </section>
    );
};

export default Results;