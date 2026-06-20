# Guide 02: Building Simple, Low-Cost Data & AI Workflows

This document is for anyone interested in managing spreadsheets, setting up simple automated tasks, or practicing interactive AI prompting. You don't need a premium corporate license or paid software subscriptions to develop these skills—everything below uses powerful, completely free individual developer tools.

---

## 1. Free System Alternatives
You can easily swap out high-cost business software bundles for these free-tier equivalents to learn data management safely:

*   **Premium Charting Apps (like Power BI) ➔ Looker Studio + BigQuery:** Store data inside a free cloud database and hook it up to a drag-and-drop report page at zero cost.
*   **Paid Automation Engines ➔ Google Apps Script:** Write simple scripts directly inside any standard Google Sheet to clean tables or send emails automatically.
*   **Paid AI Memberships ➔ Google AI Studio:** Sign in with any personal Google account to access raw, unfiltered generative models with huge processing windows for free.

---

## 2. Step-by-Step Implementation

### Phase A: Organizing Your Data (Google BigQuery Sandbox)
1. Head to the Google Cloud Console (://google.com) and sign in.
2. Open the "BigQuery" environment. Ensure you stay inside the free Sandbox tier (which requires no billing information).
3. Build a project table folder and upload any standard spreadsheet file (.csv format) right into the workspace.
4. Try writing a basic layout command to review your work:
   `SELECT * FROM your_project_name.your_table LIMIT 10;`

### Phase B: Activating the AI Sandbox (Google AI Studio)
1. Go to Google AI Studio (://google.com) and log in with your standard personal account.
2. Select "Create New Prompt" to open a clean, unrestrictive model window.
3. In the right-hand options box, set your system guidelines to give the AI a clear, helpful baseline perspective:
   `You are a supportive, clear learning assistant. Review data spreadsheets and explain patterns in simple, easy-to-read terms.`
4. Click the "Get Code" text button at the top of your screen to copy your free developer API Key token.

### Phase C: Running an Automatic Spreadsheet Task (Apps Script)
1. Open up a standard, free Google Sheet containing a few rows of data.
2. Click Extensions > Apps Script in the top toolbar to open your built-in code pad.
3. Use a basic script function to bundle your spreadsheet data and send it out to your free AI key for automated review:
   ```javascript
   function analyzeMySheet() {
     const myKey = "PASTE_YOUR_AI_STUDIO_KEY_HERE";
     const url = `https://googleapis.com{myKey}`;
     const sheetData = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getDataRange().getValues();
     
     const options = {
       "method": "post", "contentType": "application/json",
       "payload": JSON.stringify({ "contents": [{ "parts": [{ "text": "Summarize this: " + JSON.stringify(sheetData) }] }] })
     };
     
     const response = UrlFetchApp.fetch(url, options);
     Logger.log(response.getContentText());
   }
   ```
4. Run the code. Your sheet will automatically communicate with the cloud AI system and return an analysis with zero software middleman fees.

---

## 3. Financial Tracking & Safety Precounters

*   **Cloud Data Storage (BigQuery):** $0.00 *(Free up to 10 GB of storage capacity)*
*   **Interactive Dashboard Reports (Looker Studio):** $0.00 *(Completely unbilled personal use)*
*   **AI Developer Keys (AI Studio):** $0.00 *(Free usage tiers for individual learners)*
*   **TOTAL MONTHLY RUNNING OVERHEAD:** **$0.00 / month**

*Security Rule of Thumb: While public learning folders are an amazing asset to share with colleagues, never hardcode or save your real AI Studio key strings inside your public GitHub repository files. Keep your private keys tucked safely inside your private Google account panel or script dashboards so your work stays entirely protected.*
