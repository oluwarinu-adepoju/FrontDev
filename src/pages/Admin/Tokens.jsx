// src/pages/Admin/Tokens.jsx
import React, { useState } from 'react';
import styles from './Admin.module.css';
import Button from '../../components/Button/Button';

const Tokens = () => {
  const [tokenData, setTokenData] = useState([
    {
            date: "2023-07-15",
            provider: "ChatGPT API",
            tokens: 15000,
            cost: 0.30,
            requestType: "Completion",
            status: "Success"
        },
        {
            date: "2023-07-15",
            provider: "Anthropic API",
            tokens: 25000,
            cost: 0.50,
            requestType: "Chat",
            status: "Success"
        },
        {
            date: "2023-07-14",
            provider: "PaLM API",
            tokens: 10000,
            cost: 0.20,
            requestType: "Embedding",
            status: "Success"
        }
    ]);

    const renderTokens = () => {
        const tableBody = document.getElementById('tokenTableBody');
         return  tokenData.map(token => (
            <tr key={token.date}>
                <td>{token.date}</td>
                <td>{token.provider}</td>
                <td>{token.tokens.toLocaleString()}</td>
                <td>${token.cost.toFixed(2)}</td>
                <td>{token.requestType}</td>
                <td>{token.status}</td>
             </tr>
            ));
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
           const filtered = tokenData.filter(token =>
            token.provider.toLowerCase().includes(searchTerm) ||
            token.requestType.toLowerCase().includes(searchTerm)
        );
        setTokenData(filtered)
    };

      const filterTokens = () => {
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
            <h1>Token Usage</h1>
            <input type="text" className={styles.searchBar} placeholder="Search tokens..." onChange={handleSearch}/>
        </div>
          <div className={styles.dateFilters}>
              <div>
                  <label>From:</label>
                  <input type="date" className={styles.dateInput} id="tokenStartDate" />
                </div>
                <div>
                    <label>To:</label>
                     <input type="date" className={styles.dateInput} id="tokenEndDate" />
                </div>
                 <select className={styles.filterSelect} id="apiFilter" onChange={filterTokens}>
                    <option value="">All APIs</option>
                    <option value="chatgpt">ChatGPT API</option>
                     <option value="anthropic">Anthropic API</option>
                    <option value="palm">PaLM API</option>
                 </select>
                  <Button style="light" onClick={handleExport}>Export Excel</Button>
           </div>

          <div className={styles.statsContainer}>
                <div className={styles.statCard}>
                   <h3>Total Tokens Used</h3>
                    <p id="totalTokens">1,234,567</p>
                </div>
                <div className={styles.statCard}>
                    <h3>Total Cost</h3>
                   <p id="totalCost">$123.45</p>
                 </div>
               <div className={styles.statCard}>
                  <h3>Active API Keys</h3>
                    <p id="activeKeys">3</p>
               </div>
               <div className={styles.statCard}>
                  <h3>Average Daily Usage</h3>
                    <p id="avgUsage">45,678</p>
                </div>
          </div>
         <div id="tokens-container">
             <table >
                <thead>
                   <tr>
                       <th>Date</th>
                      <th>API Provider</th>
                      <th>Tokens Used</th>
                      <th>Cost</th>
                      <th>Request Type</th>
                      <th>Status</th>
                   </tr>
               </thead>
               <tbody id="tokenTableBody">
                {renderTokens()}
               </tbody>
            </table>
      </div>
    </>
  );
};

export default Tokens;