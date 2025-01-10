// src/pages/Admin/Admin.jsx
import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';
import Chart from '../../components/Chart/Chart';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';


const Admin = () => {
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const [testData, setTestData] = useState([
        { date: '2023-07-01', subject: 'math', score: 78 },
        { date: '2023-07-01', subject: 'english', score: 85 },
        { date: '2023-07-02', subject: 'math', score: 82 },
        { date: '2023-07-02', subject: 'physics', score: 70 },
        { date: '2023-07-03', subject: 'chemistry', score: 90 },
         { date: '2023-07-03', subject: 'english', score: 75 },
          { date: '2023-07-04', subject: 'math', score: 65 },
          { date: '2023-07-04', subject: 'physics', score: 80 },
           { date: '2023-07-05', subject: 'chemistry', score: 88 },
            { date: '2023-07-05', subject: 'english', score: 92 },
        ]);
        
     const handleNavigation = (path) => {
          navigate(path);
     };

      const userDropdownItems = [
        { label: 'Change Password', to: '#' },
         { label: 'Logout', to: '#' }
      ];
    
     const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Average Performance',
                data: [65, 72, 78, 75, 82, 85],
                borderColor: '#2563eb',
                tension: 0.4
            }]
    }
    const chartOptions = {
      responsive: true,
      plugins: {
          title: {
              display: true,
              text: 'Student Performance Trend'
          }
      }
  }

  const subjectsChartData = {
        labels: ['Mathematics', 'English', 'Physics', 'Chemistry'],
            datasets: [{
                data: [30, 25, 20, 25],
                backgroundColor: ['#2563eb', '#22c55e', '#eab308', '#ef4444']
            }]
    }

    const subjectsChartOptions = {
        responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Tests by Subject'
                }
            }
    }

    const genderChartData = {
        labels: ['Male', 'Female'],
            datasets: [{
                label: 'Gender Distribution',
                data: [1350, 1197],
                backgroundColor: [
                   '#3b82f6',
                     '#ec4899'
                 ],
                 borderColor: [
                    '#2563eb',
                     '#db2777'
                ],
             borderWidth: 1
         }]
     }
    
     const genderChartOptions = {
        responsive: true,
        plugins: {
            title: {
               display: true,
               text: 'Student Gender Distribution'
             },
             legend: {
                display: false
              }
         },
          scales: {
               y: {
                  beginAtZero: true,
                    title: {
                       display: true,
                      text: 'Number of Students'
                     }
                 },
                 x: {
                   title: {
                      display: true,
                      text: 'Gender'
                 }
              }
            }
       }

        const handleExport = (format) => {
             const exportData = {
                 performance: performanceChart.data.datasets[0].data,
                 subjects: {
                     labels: subjectsChart.data.labels,
                     data: subjectsChart.data.datasets[0].data
                },
                gender: {
                    male: genderChart.data.datasets[0].data[0],
                    female: genderChart.data.datasets[0].data[1]
                  }
            };
    
             if (format === 'csv') {
                  // const csv = convertToCSV([exportData]);
                //  downloadFile(csv, 'dashboard_data.csv', 'text/csv');
                alert("CSV Export coming soon")
             } else if (format === 'excel') {
                  //  const worksheet = XLSX.utils.json_to_sheet([exportData]);
                   // const workbook = XLSX.utils.book_new();
                 //   XLSX.utils.book_append_sheet(workbook, worksheet, "Dashboard Data");
                    // XLSX.writeFile(workbook, "dashboard_data.xlsx");
                alert("Excel Export coming soon")
            }
        }
        
          const filterDashboardData = () => {
            // date and subject filter logic
             alert("filter logic coming soon");
        };

    return (
        <>
            <div className={styles.header}>
                <h1>Dashboard</h1>
                <div className={styles.adminProfile}>
                    <div className={styles.profileIcon} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <i className="fas fa-user-circle"></i>
                         <span className={styles.adminName}>Admin</span>
                    </div>
                      <Dropdown
                         isOpen={isDropdownOpen}
                         setIsOpen={setIsDropdownOpen}
                         trigger={null}
                         items={userDropdownItems}
                    />
                 </div>
           </div>
            
          <div className={styles.filters}>
             <div className={styles.dateFilters}>
                <div>
                    <label>From:</label>
                    <input type="date" className={styles.dateInput} id="dashboardStartDate"/>
                 </div>
                 <div>
                  <label>To:</label>
                   <input type="date" className={styles.dateInput} id="dashboardEndDate"/>
                </div>
            </div>
                <select className={styles.filterSelect} id="subjectFilter">
                   <option value="">All Subjects</option>
                    <option value="math">Mathematics</option>
                    <option value="english">English</option>  
                     <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                 </select>
                 <Button style="light" onClick={() => handleExport('csv')}>Export CSV</Button>
                 <Button style="light" onClick={() => handleExport('excel')}>Export Excel</Button>
          </div>

          <div className={styles.statsContainer}>
             <div className={styles.statCard}>
                <h3>Total Students</h3>
                <p>2,547</p>
            </div>
            <div className={styles.statCard}>
                <h3>Tests Taken</h3>
                <p>12,849</p>
            </div>
             <div className={styles.statCard}>
                 <h3>Average Score</h3>
                  <p>76%</p>
            </div>
             <div className={styles.statCard}>
               <h3>Active Users</h3>
                 <p>1,283</p>
            </div>
        </div>
    
    
        <div className={styles.chartsContainer}>
          <div className={styles.chartCard}>
             <Chart 
               type="line"
               data={chartData}
              options={chartOptions}
               chartId="performanceChart"
                />
            </div>
            <div className={styles.chartCard}>
                <Chart
                   type="doughnut"
                    data={subjectsChartData}
                    options={subjectsChartOptions}
                    chartId="subjectsChart"
                 />
          </div>
          <div className={styles.chartCard}>
             <Chart
                   type="bar"
                   data={genderChartData}
                   options={genderChartOptions}
                   chartId="genderChart"
               />
            </div>
        </div>
    </>
    );
};
export default Admin;