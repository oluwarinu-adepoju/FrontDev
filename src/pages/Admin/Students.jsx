// src/pages/Admin/Students.jsx
import React, { useState } from 'react';
import styles from './Admin.module.css';
import Button from '../../components/Button/Button';

const Students = () => {
  const [studentData, setStudentData] = useState([
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        registrationDate: "2023-06-15",
        paymentPlan: "premium",
        phoneNumber: "+234 801 234 5678",
        testsTaken: 15,
        averageScore: 82,
        subjectCombination: "Mathematics, Physics, Chemistry, English",
        targetScore: 300,
        lastLoginDate: "2023-07-15",
        stateOfOrigin: "Lagos",
        examDate: "2024-03-15",
        completedMocks: 8
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        registrationDate: "2023-07-01",
        paymentPlan: "basic",
        phoneNumber: "+234 802 345 6789",
        testsTaken: 8,
        averageScore: 75,
        subjectCombination: "Biology, Physics, Chemistry, English",
        targetScore: 280,
        lastLoginDate: "2023-07-14",
        stateOfOrigin: "Abuja",
        examDate: "2024-03-15",
        completedMocks: 5
    },
    {
        id: 3,
        name: "Mike Johnson",
        email: "mike@example.com",
        registrationDate: "2023-07-10",
        paymentPlan: "free",
        phoneNumber: "+234 803 456 7890",
        testsTaken: 3,
        averageScore: 68,
        subjectCombination: "Economics, Government, Literature, English",
        targetScore: 260,
        lastLoginDate: "2023-07-13",
        stateOfOrigin: "Rivers",
        examDate: "2024-03-15",
        completedMocks: 2
    }
   ]);

   const renderStudents = () => {
        const container = document.getElementById('students-container');
        return  (
            <table className={styles.table}>
                 <thead>
                     <tr>
                         <th>ID</th>
                         <th>Name</th>
                         <th>Email</th>
                         <th>Registration Date</th>
                          <th>Payment Plan</th>
                         <th>Phone Number</th>
                         <th>Subject Combination</th>
                         <th>Target Score</th>
                         <th>Tests Taken</th>
                         <th>Average Score</th>
                        <th>Last Login</th>
                        <th>State</th>
                        <th>Exam Date</th>
                        <th>Completed Mocks</th>
                    </tr>
                 </thead>
                <tbody>
                 {studentData.map(student => (
                     <tr key={student.id}>
                         <td>{student.id}</td>
                         <td>{student.name}</td>
                          <td>{student.email}</td>
                          <td>{student.registrationDate}</td>
                          <td><span className={`${styles.paymentBadge} ${student.paymentPlan}`}>{student.paymentPlan.toUpperCase()}</span></td>
                         <td>{student.phoneNumber}</td>
                         <td>{student.subjectCombination}</td>
                          <td>{student.targetScore}</td>
                         <td>{student.testsTaken}</td>
                         <td>{student.averageScore}%</td>
                         <td>{student.lastLoginDate}</td>
                        <td>{student.stateOfOrigin}</td>
                        <td>{student.examDate}</td>
                        <td>{student.completedMocks}</td>
                     </tr>
                     ))}
                </tbody>
            </table>
         );
    }
    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
         const filteredData = studentData.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.subjectCombination.toLowerCase().includes(searchTerm)
        );
        setStudentData(filteredData);
     };
    
     const filterStudentData = () => {
          //add the filter logic here
       alert("filter logic coming soon");
     };
    
     const handleExport = () => {
         // add export logic here
        alert('Excel Export coming soon')
      };
     
    return (
        <>
         <div className={styles.header}>
             <h1>Students</h1>
            <input type="text" className={styles.searchBar} placeholder="Search students..." onChange={handleSearch}/>
         </div>

          <div className={styles.dateFilters}>
               <div>
                    <label>From:</label>
                     <input type="date" className={styles.dateInput} id="startDate"/>
                </div>
                 <div>
                     <label>To:</label>
                    <input type="date" className={styles.dateInput} id="endDate"/>
                </div>
                 <select className={styles.paymentFilter} id="paymentFilter" onChange={filterStudentData}>
                        <option value="">All Plans</option>
                         <option value="premium">Premium</option>
                        <option value="basic">Basic</option>
                       <option value="free">Free</option>
                </select>
                <Button style="light" onClick={handleExport}>Export Excel</Button>
           </div>
            <div id="students-container">
                  {renderStudents()}
              </div>
        </>
    );
};

export default Students;